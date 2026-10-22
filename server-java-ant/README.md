# NG-Message Java ANT Biometric Server

A standalone, production-ready Java Biometric Authentication Server built with **Apache Ant** that operates **100% offline**. All dependencies, source code, build scripts, and the Ant runtime are self-contained inside the `server-java-ant` directory with zero internet connection required at build or run time.

---

## 🌟 Key Features

1. **Apache Ant Build System (100% Offline)**:
   - Standard `build.xml` build script.
   - Bundled Apache Ant distribution (`apache-ant-1.10.14`) and root wrappers (`ant.cmd` / `ant.bat`).
   - All 18 required dependency JARs pre-bundled directly in `lib/`.
   - No Maven, Gradle, or internet repository downloads required.

2. **Dedicated Biometric Login & Registration APIs**:
   - **Finger Login API**: Takes 3 parameters (`username`, `password`, `finger`).
   - **Face Login API**: Takes 3 parameters (`username`, `password`, `face`).
   - **Finger Registration API**: Takes 3 parameters (`username`, `password`, `finger`).
   - **Face Registration API**: Takes 3 parameters (`username`, `password`, `face`).

3. **High-Performance Offline Biometric Engines**:
   - **Fingerprint Matching**: Robert Vazan's [SourceAFIS Java](https://github.com/robertvazan/sourceafis-java) 3.18.1 minutiae extractor and matcher (threshold: `40.0`).
   - **Face Recognition**: Pure Java Spatial-LBPH (Local Binary Pattern Histogram) with multi-cell gradient projection and Cosine Similarity (threshold: `0.68`). Zero native C++ DLLs needed.

4. **Unified Security & Token Compatibility**:
   - HMAC-SHA256 password hash validation matching existing Node.js & Spring Boot crypto specifications (`AJH|80J*KLKS902JLAJD01_92`).
   - Generates standard JJWT (0.12.5) access and refresh tokens directly compatible with the Angular frontend.

---

## 📂 Project Structure

```
server-java-ant/
├── apache-ant-1.10.14/     # Bundled Apache Ant binary distribution
├── ant.cmd                 # Windows Command Prompt Ant launcher
├── ant.bat                 # Windows Batch Ant launcher
├── build.xml               # Apache Ant build file
├── README.md               # Documentation and API guide
├── config/
│   └── server.properties   # Port, database URL, credentials, and thresholds
├── lib/                    # All offline dependency JARs (18 files)
│   ├── sourceafis-3.18.1.jar
│   ├── mysql-connector-j-8.3.0.jar
│   ├── jackson-databind-2.15.4.jar
│   ├── jjwt-api-0.12.5.jar
│   └── ...
└── src/
    └── com/ngmessage/ant/
        ├── ServerAntApplication.java   # HTTP Server entry point (port 8082)
        ├── config/ServerConfig.java
        ├── db/DatabaseManager.java     # JDBC connection & queries
        ├── dto/                        # Request & response data transfer objects
        ├── model/User.java             # User entity
        ├── service/
        │   ├── BiometricService.java       # Coordinates login & enrollment
        │   ├── FingerprintService.java     # SourceAFIS matcher
        │   ├── FaceRecognitionService.java # Pure Java Spatial-LBPH face engine
        │   └── JwtService.java             # Token generation
        ├── util/
        │   ├── ImageUtils.java         # Base64 & BufferedImage processing
        │   ├── JsonUtil.java           # Jackson JSON serializer/deserializer
        │   └── PasswordUtil.java       # HMAC-SHA256 password verification
        └── test/
            └── BiometricApiTest.java   # Automated end-to-end test suite
```

---

## 🚀 Server Run Commands

All commands can be executed from inside `d:\Projects\ng-message\server-java-ant`:

> **Note**: If you have global Apache Ant installed on your system PATH, you can type `ant <target>`. Alternatively, use the included wrapper `.\ant.cmd <target>`.

### 1. Compile the Server
```powershell
.\ant.cmd compile
```
Compiles all Java source files from `src/` into `build/classes/` using the offline JARs in `lib/`.

### 2. Run the Server
```powershell
.\ant.cmd run
```
Starts the HTTP server on port **`8082`** (configurable in `config/server.properties`).

### 3. Package Standalone Executable JAR
```powershell
.\ant.cmd jar
```
Builds `dist/server-java-ant.jar` along with `dist/lib/` and `dist/config/`.

To run the packaged JAR directly:
```powershell
java -cp "dist/server-java-ant.jar;dist/lib/*" com.ngmessage.ant.ServerAntApplication
```

### 4. Run Automated Biometric API Verification Tests
```powershell
.\ant.cmd test
```
Executes `BiometricApiTest` which creates synthetic fingerprint and facial biometrics, registers them, and verifies login for both modalities against the running server.

### 5. Clean Build Artifacts
```powershell
.\ant.cmd clean
```
Deletes the `build/` and `dist/` directories.

---

## 📡 API Calls and Parameters

Base URL: `http://localhost:8082`

---

### 1. Finger Biometric Login API
Authenticates a user using username, password, and fingerprint biometric data.

- **Method**: `POST`
- **Path**: `/api/auth/login-finger` *(Alias: `/api/auth/fingerprint/login`)*
- **Headers**: `Content-Type: application/json`
- **Parameters (JSON Body)**:
  | Parameter | Type | Required | Description |
  | :--- | :--- | :--- | :--- |
  | `username` | String | **Yes** | User account username (e.g. `"branch1_L3_3"`). |
  | `password` | String | **Yes** | Plaintext password to verify against HMAC-SHA256 hash. |
  | `finger` | String | **Yes** | Raw Base64 or Data URI (`data:image/png;base64,...`) of the captured fingerprint image. *(Aliases accepted: `fingerprint`, `fingerBase64`).* |

#### Example Request (cURL)
```bash
curl -X POST http://localhost:8082/api/auth/login-finger \
  -H "Content-Type: application/json" \
  -d '{
    "username": "branch1_L3_3",
    "password": "password",
    "finger": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
  }'
```

#### Success Response (`200 OK`)
```json
{
  "success": true,
  "message": "Fingerprint biometric login successful!",
  "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJicmFuY2gxX0wzXzMi...",
  "refreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJicmFuY2gxX0wzXzMi...",
  "loginLogId": 1,
  "groupUserUuid": "group_user_uuid",
  "appUserModel": {
    "id": 3,
    "username": "branch1_L3_3",
    "name": "Dr. Marie Curie",
    "role": "ADMIN"
  },
  "requiresBiometric": true,
  "hasFingerprint": true,
  "hasFace": false,
  "biometricMatchResult": {
    "matched": true,
    "biometricType": "fingerprint",
    "score": 1177.95,
    "threshold": 40.0,
    "engine": "SourceAFIS 3.18.1 (Robert Vazan)",
    "details": "Fingerprint minutiae matched candidate with high confidence."
  }
}
```

#### Match Failure Response (`401 Unauthorized`)
```json
{
  "success": false,
  "message": "Biometric fingerprint did not match enrolled template (Score: 0.00, Required: 40.00)",
  "requiresBiometric": true,
  "hasFingerprint": true,
  "biometricMatchResult": {
    "matched": false,
    "biometricType": "fingerprint",
    "score": 0.0,
    "threshold": 40.0,
    "engine": "SourceAFIS 3.18.1 (Robert Vazan)",
    "details": "Fingerprint minutiae similarity score below threshold."
  }
}
```

---

### 2. Face Biometric Login API
Authenticates a user using username, password, and face biometric data.

- **Method**: `POST`
- **Path**: `/api/auth/login-face` *(Alias: `/api/auth/face/login`)*
- **Headers**: `Content-Type: application/json`
- **Parameters (JSON Body)**:
  | Parameter | Type | Required | Description |
  | :--- | :--- | :--- | :--- |
  | `username` | String | **Yes** | User account username (e.g. `"branch1_L2_1"`). |
  | `password` | String | **Yes** | Plaintext password to verify against HMAC-SHA256 hash. |
  | `face` | String | **Yes** | Raw Base64 or Data URI (`data:image/jpeg;base64,...`) of the captured face image. *(Aliases accepted: `faceBase64`, `image`).* |

#### Example Request (cURL)
```bash
curl -X POST http://localhost:8082/api/auth/login-face \
  -H "Content-Type: application/json" \
  -d '{
    "username": "branch1_L2_1",
    "password": "password",
    "face": "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
  }'
```

#### Success Response (`200 OK`)
```json
{
  "success": true,
  "message": "Face biometric login successful!",
  "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJicmFuY2gxX0wyXzEi...",
  "refreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJicmFuY2gxX0wyXzEi...",
  "loginLogId": 1,
  "groupUserUuid": "group_user_uuid",
  "appUserModel": {
    "id": 1,
    "username": "branch1_L2_1",
    "name": "Prof. Dr. John Doe",
    "role": "ADMIN"
  },
  "requiresBiometric": true,
  "hasFace": true,
  "hasFingerprint": false,
  "biometricMatchResult": {
    "matched": true,
    "biometricType": "face",
    "score": 0.983,
    "threshold": 0.68,
    "engine": "Pure Java Spatial-LBPH Face Matcher",
    "details": "Face features matched enrolled candidate with high confidence."
  }
}
```

---

### 3. Finger Biometric Registration API
Enrolls or updates a user's fingerprint minutiae template in the database.

- **Method**: `POST`
- **Path**: `/api/auth/register-finger` *(Alias: `/api/auth/fingerprint/register`)*
- **Headers**: `Content-Type: application/json`
- **Parameters (JSON Body)**:
  | Parameter | Type | Required | Description |
  | :--- | :--- | :--- | :--- |
  | `username` | String | **Yes** | Account username to enroll. |
  | `password` | String | **Yes** | Account password to authorize enrollment. |
  | `finger` | String | **Yes** | Base64 fingerprint image sample. |

#### Example Request (cURL)
```bash
curl -X POST http://localhost:8082/api/auth/register-finger \
  -H "Content-Type: application/json" \
  -d '{
    "username": "branch1_L3_3",
    "password": "password",
    "finger": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
  }'
```

#### Success Response (`200 OK`)
```json
{
  "success": true,
  "message": "Fingerprint template registered successfully for user 'branch1_L3_3'",
  "username": "branch1_L3_3",
  "biometricType": "fingerprint",
  "engine": "SourceAFIS 3.18.1"
}
```

---

### 4. Face Biometric Registration API
Enrolls or updates a user's facial feature vector template in the database.

- **Method**: `POST`
- **Path**: `/api/auth/register-face` *(Alias: `/api/auth/face/register`)*
- **Headers**: `Content-Type: application/json`
- **Parameters (JSON Body)**:
  | Parameter | Type | Required | Description |
  | :--- | :--- | :--- | :--- |
  | `username` | String | **Yes** | Account username to enroll. |
  | `password` | String | **Yes** | Account password to authorize enrollment. |
  | `face` | String | **Yes** | Base64 face image sample. |

#### Example Request (cURL)
```bash
curl -X POST http://localhost:8082/api/auth/register-face \
  -H "Content-Type: application/json" \
  -d '{
    "username": "branch1_L3_3",
    "password": "password",
    "face": "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
  }'
```

#### Success Response (`200 OK`)
```json
{
  "success": true,
  "message": "Face biometric template registered successfully for user 'branch1_L3_3'",
  "username": "branch1_L3_3",
  "biometricType": "face",
  "engine": "Pure Java Spatial-LBPH Face Matcher"
}
```

---

### 5. Health Check & Diagnostics
- **Method**: `GET`
- **Path**: `/api/auth/health`
- **Response (`200 OK`)**:
```json
{
  "status": "UP",
  "server": "NG-Message Java ANT Biometric Server",
  "buildTool": "Apache Ant (100% Offline)",
  "fingerprintEngine": "SourceAFIS 3.18.1 (Robert Vazan minutiae extraction)",
  "faceEngine": "Pure Java Spatial-LBPH Face Recognition",
  "databaseConnected": true,
  "port": 8082
}
```

---

### 6. User Biometrics Enrollment Status
- **Method**: `GET`
- **Path**: `/api/auth/user/{username}/biometrics`
- **Response (`200 OK`)**:
```json
{
  "username": "branch1_L2_1",
  "hasFingerprint": false,
  "hasFace": true,
  "requiresBiometric": true,
  "fingerprintEnrolledAt": null,
  "faceEnrolledAt": 1792434730000
}
```

---

## ⚙️ Configuration (`config/server.properties`)

```properties
# Server Port (default 8082)
server.port=8082

# MySQL Connection Details
db.url=jdbc:mysql://localhost:3306/ng-message?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true&zeroDateTimeBehavior=CONVERT_TO_NULL
db.user=root
db.password=

# JWT Secret & Expiration
jwt.secret=AJH|80J*KLKS902JLAJD01_92
jwt.expiration-ms=86400000

# Biometric Match Thresholds
biometric.fingerprint.threshold=40.0
biometric.face.threshold=0.68

# CORS
cors.allowed-origins=*
```
