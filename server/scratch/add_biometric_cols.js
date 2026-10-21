const mysql = require('mysql2/promise');

async function main() {
  const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ng-message'
  });

  console.log('Connected to MySQL.');

  async function ensureColumn(colName, definition) {
    const [rows] = await conn.query(`SHOW COLUMNS FROM users LIKE '${colName}'`);
    if (rows && rows.length > 0) {
      console.log(`Column ${colName} already exists.`);
    } else {
      await conn.query(`ALTER TABLE users ADD COLUMN ${colName} ${definition}`);
      console.log(`✅ Added column: ${colName}`);
    }
  }

  await ensureColumn('fingerprint_template', 'LONGTEXT NULL AFTER password');
  await ensureColumn('face_template', 'LONGTEXT NULL AFTER fingerprint_template');
  await ensureColumn('biometric_type', 'VARCHAR(20) NULL AFTER face_template');
  await ensureColumn('biometric_enrolled_at', 'TIMESTAMP NULL AFTER biometric_type');

  const [cols] = await conn.query('DESCRIBE users');
  console.log('\nUsers Table Schema:');
  console.table(cols.map(c => ({ Field: c.Field, Type: c.Type, Null: c.Null })));

  await conn.end();
}

main().catch(console.error);
