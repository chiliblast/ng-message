# ng-message Backend Server

This is the Node.js backend for the ng-message application. It handles API requests, real-time communication via Socket.io, and serves static browser installers for compatibility checks.

## Getting Started

### 1. Install Dependencies
Run the following command in the `server` directory:
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root of the `server` directory and configure the following (refer to `.env.example` if available):
- `PORT` (Default: 3000)
- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`

### 3. Run the Server
To start the server in production mode:
```bash
npm start
```
Or run directly with Node:
```bash
node server.js
```

---

## Browser Installer Assets

The application performs a browser compatibility check on startup. If a user's browser is outdated or unsupported, it provides links to download offline installers. These files must be manually placed in the `server/assets/` folder, and their filenames must be mapped in the configuration file.

### 1. Place Installers in Assets
Upload your offline installers to:
`server/assets/`

### 2. Update Configuration
If you change any filenames or versions, you **must** update the mapping in the configuration file:
`server/config/browser-config.json`

The frontend dynamically fetches this JSON to generate the correct download links.

### Default Filenames Reference
By default, the system expects the following (but these can be changed in the config file mentioned above):

#### Windows
- **Google Chrome:** `ChromeStandaloneSetup.exe` (32-bit), `ChromeStandaloneSetup64.exe` (64-bit)
- **Mozilla Firefox:** `Firefox Setup 150.0.1.exe` (32-bit), `Firefox Setup 150.0.1 64.exe` (64-bit)

#### Linux
- **Google Chrome:** `google-chrome-stable_current_amd64.deb`
- **Mozilla Firefox:** `firefox-150.0.1 Linux 64.tar.xz` (x64), `firefox-150.0.1 Linux ARM64AArch64.tar.xz` (ARM64)

> [!IMPORTANT]
> Always ensure the physical file in `server/assets/` matches the string value defined in `server/config/browser-config.json`.
