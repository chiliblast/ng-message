# NG-Message Java Biometric Authentication Server

Production-grade Spring Boot backend providing unified credentials and multi-modal biometric authentication (Fingerprint matching via **SourceAFIS** and Facial Recognition via a **Pure Java Spatial-LBPH Engine**). The server operates 100% offline with zero native external C++ DLL dependencies.

---

## 🔐 Biometric Authentication Rules

The server and frontend follow a strict 4-state biometric authentication policy based on the user's enrollment record in the database:

```
                                  +--------------------------+
                                  |   User Enters Username   |
                                  +--------------------------+
                                               |
                                               v
                                 [Check Enrollment in DB]
                                               |
         +--------------------+----------------+--------------------+--------------------+
         |                    |                                     |                    |
         v                    v                                     v                    v
+------------------+ +------------------+                 +------------------+ +------------------+
|      RULE 1      | |      RULE 2      |                 |      RULE 3      | |      RULE 4      |
| Neither Enrolled | |  Face Enrolled   |                 | Finger Enrolled  | |  Both Enrolled   |
+------------------+ +------------------+                 +------------------+ +------------------+
| • Sign in with   | | • MUST provide   |                 | • MUST provide   | | • Can sign in by |
|   Username +     | |   Face Scan      |                 |   Fingerprint    | |   EITHER Face OR |
|   Password only  | | • Credentials-   |                 | • Credentials-   | |   Fingerprint    |
| • No biometric   | |   only rejected  |                 |   only rejected  | | • Tab selector   |
|   scan prompted  | | • Fingerprint    |                 | • Face attempt   | |   available in   |
| • "Sign In"      | |   attempt        |                 |   attempt        | |   frontend UI    |
|   logs in direct | |   rejected       |                 |   rejected       | |                  |
+------------------+ +------------------+                 +------------------+ +------------------+
```

### Detailed Rule Specifications

| Rule | State | Required Auth Factors | Server Enforcement Behavior | Frontend UI Experience |
| :--- | :--- | :--- | :--- | :--- |
| **Rule 1** | **Neither Enrolled** (`!hasFace && !hasFingerprint`) | Username + Password | Credentials are authenticated directly via HMAC-SHA256. Generates JWT access/refresh tokens. | Button says **"Sign In"**. Info banner explains account uses standard password authentication. No scanner is opened. |
| **Rule 2** | **Face Only Enrolled** (`hasFace && !hasFingerprint`) | Username + Password + **Face Scan** | Standard login without face scan returns HTTP 401 with `requiresBiometric: true`. Attempting to submit a fingerprint returns HTTP 401: *"User is not enrolled for fingerprint scan. Please sign in using face scan."*. Face probe must match candidate template with score $\ge 0.68$. | Button says **"Sign In"**. UI prompts for camera/face recognition. Fingerprint reader is not requested. |
| **Rule 3** | **Fingerprint Only Enrolled** (`!hasFace && hasFingerprint`) | Username + Password + **Fingerprint** | Standard login without fingerprint returns HTTP 401 with `requiresBiometric: true`. Attempting to submit a face scan returns HTTP 401: *"User is not enrolled for face scan. Please sign in using fingerprint."*. Fingerprint minutiae must match with SourceAFIS score $\ge 40.0$. | Button says **"Sign In"**. UI prompts for fingerprint scan on DigitalPersona reader. Face scanner is not requested. |
| **Rule 4** | **Both Enrolled** (`hasFace && hasFingerprint`) | Username + Password + (**Face OR Fingerprint**) | Accepts either biometric modality submitted in `biometricType`. The submitted sample is verified against its corresponding database template. | Button says **"Sign In"**. UI displays a modality selector tab (`[Fingerprint | Face Scan]`), allowing the user to freely toggle and use their preferred modality. |

---

## 🎨 UI Button & Interaction Design Principles

1. **Clean "Sign In" Button**:
   - The primary action button always displays **"Sign In"** (never hardcoded to *"Sign in with Fingerprint"* or *"Sign in with Face"* on page load or when unenrolled).
   - When a biometric capture is actively running, the button displays an animated scanning state (e.g., *"Place finger on reader..."* or *"Scanning face..."*).
2. **Always Enabled on Load**:
   - The submit button is never disabled due to absent or disconnected fingerprint reader hardware (`[disabled]="loading"`). Unenrolled users or users awaiting biometric prompt can always click or submit with standard credentials.
3. **Dynamic Scanner Icon Button**:
   - The secondary scanner indicator button is only visible if the user has at least one biometric enrolled (`hasFace || hasFingerprint`).

---

## 🗄️ Database Schema (`users` Table)

The MySQL database `ng-message` table `users` utilizes separate template storage and per-modality enrollment timestamps:

```sql
ALTER TABLE users
  ADD COLUMN fingerprint_template LONGTEXT NULL,
  ADD COLUMN face_template LONGTEXT NULL,
  ADD COLUMN fingerprint_enrolled_at TIMESTAMP NULL,
  ADD COLUMN face_enrolled_at TIMESTAMP NULL;
```

| Column | Type | Nullable | Description |
| :--- | :--- | :--- | :--- |
| `fingerprint_template` | `LONGTEXT` | Yes | Base64-encoded serialized SourceAFIS minutiae template. |
| `face_template` | `LONGTEXT` | Yes | Serialized JSON feature embedding vector (64-cell spatial LBPH + gradient histograms). |
| `fingerprint_enrolled_at` | `TIMESTAMP` | Yes | Timestamp of when the user enrolled or last updated their fingerprint. |
| `face_enrolled_at` | `TIMESTAMP` | Yes | Timestamp of when the user enrolled or last updated their face template. |

> **Note on Deprecated Columns**:
> - `biometric_type` is removed/not used. The presence of `fingerprint_template` and/or `face_template` defines the user's active modalities.
> - `biometric_enrolled_at` has been replaced by `fingerprint_enrolled_at` and `face_enrolled_at` so each biometric is tracked independently.

---

## 📡 API Endpoints

### 1. Check User Biometrics Enrollment
- **Method & Path**: `GET /api/auth/user/{username}/biometrics`
- **Description**: Returns the active enrollment status and enrollment timestamps for a given user. Used by the frontend during username input to determine which authentication rule applies.
- **Response (200 OK)**:
```json
{
  "username": "branch1_L2_1",
  "hasFace": true,
  "hasFingerprint": false,
  "requiresBiometric": true,
  "fingerprintEnrolledAt": null,
  "faceEnrolledAt": "2026-10-19T23:32:10"
}
```

---

### 2. Standard Credentials Login
- **Method & Path**: `POST /api/auth/login`
- **Request Body**:
```json
{
  "username": "branch1_L3_3",
  "password": "password"
}
```
- **Responses**:
  - **Rule 1 (Unenrolled User - 200 OK)**:
    ```json
    {
      "success": true,
      "message": "Login successful",
      "accessToken": "eyJhbGciOiJIUzI1NiJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiJ9...",
      "requiresBiometric": false,
      "hasFace": false,
      "hasFingerprint": false,
      "appUserModel": { ... }
    }
    ```
  - **Rules 2, 3, or 4 (Biometric Enrolled User - 401 Unauthorized)**:
    ```json
    {
      "success": false,
      "message": "Biometric verification required for this account. Please sign in with your enrolled face or fingerprint.",
      "requiresBiometric": true,
      "hasFace": true,
      "hasFingerprint": false
    }
    ```

---

### 3. Unified Biometric & Credentials Login
- **Method & Path**: `POST /api/auth/login-with-biometric` (alias: `POST /api/auth/login-raw-biometric`)
- **Headers**: `Content-Type: application/json`
- **Request Body**:
```json
{
  "username": "branch1_L2_1",
  "password": "password",
  "biometricType": "face",
  "biometricData": "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
}
```
*(For fingerprint, set `biometricType` to `"fingerprint"`).*

- **Success Response (200 OK)**:
```json
{
  "success": true,
  "message": "Biometric face and credentials authentication successful!",
  "accessToken": "eyJhbGciOiJIUzI1NiJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiJ9...",
  "requiresBiometric": true,
  "hasFace": true,
  "hasFingerprint": false,
  "biometricMatchResult": {
    "matched": true,
    "biometricType": "face",
    "score": 0.983,
    "threshold": 0.68,
    "engine": "Pure Java Spatial-LBPH Face Recognition",
    "details": "Face verification successful with high confidence."
  }
}
```

- **Wrong Modality Rejection Response (401 Unauthorized)**:
*(Example: User with face enrolled tries to submit a fingerprint)*
```json
{
  "success": false,
  "message": "User 'branch1_L2_1' is not enrolled for fingerprint scan. Please sign in using face scan.",
  "requiresBiometric": true,
  "hasFace": true,
  "hasFingerprint": false
}
```

---

### 4. Biometric Enrollment
- **Method & Path**: `POST /api/auth/register-biometric` (alias: `POST /api/auth/register-raw-biometric`)
- **Request Body**:
```json
{
  "username": "branch1_L2_1",
  "password": "password",
  "biometricType": "face",
  "biometricData": "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
}
```
- **Behavior**:
  - Verifies user's password.
  - Extracts minutiae (SourceAFIS) or generates 64-cell spatial LBPH descriptor (Face Engine).
  - Updates `users` table: sets `face_template` and `face_enrolled_at` (or `fingerprint_template` and `fingerprint_enrolled_at`).
  - Returns confirmation response.

---

### 5. Health Check
- **Method & Path**: `GET /api/auth/health`
- **Response (200 OK)**:
```json
{
  "status": "UP",
  "service": "NG-Message Java Biometric Authentication Server",
  "fingerprintEngine": "SourceAFIS 3.18.1 (Robert Vazan minutiae extraction)",
  "faceEngine": "Pure Java Spatial-LBPH Face Recognition",
  "mode": "100% Offline"
}
```

---

## 🛠️ Biometric Matching Engines

### 1. Robert Vazan SourceAFIS Java (`com.machinezoo.sourceafis:sourceafis:3.18.1`)
- **Minutiae Extraction**: Extracts ISO/IEC 19794-2 and ANSI 378 minutiae points from raw grayscale/PNG/JPEG fingerprint images.
- **Template Serialization**: Binary minutiae representation serialized and encoded as Base64.
- **Matcher**: `FingerprintMatcher.match()` computes minutiae similarity scores.
- **Threshold**: Standard threshold is `40.0` (matching False Acceptance Rate $\le 1:10,000$). Typical genuine scores range from `80.0` to `1200.0+`.

### 2. Pure Java Spatial-LBPH Face Recognition Engine
- **Pre-processing**: Normalization of image dimensions ($160 \times 160$), grayscale conversion, contrast enhancement.
- **Spatial Grid**: Splits face into an $8 \times 8$ grid (64 local spatial cells).
- **Texture Analysis**: Computes Uniform Local Binary Patterns (LBP) per cell to capture skin texture, eye corners, and facial contours invariant to monotonic illumination changes.
- **Gradient Projection**: Integrates Sobel vertical and horizontal gradient histograms for structural depth.
- **Matcher**: Normalized Cosine Similarity between probe vector and candidate template.
- **Threshold**: Default threshold is `0.68`. A genuine face typically matches at scores between `0.85` and `0.99`.

---

## 🚀 Build and Run

### Prerequisites
- Java 17+ (or Java 21)
- Maven 3.8+ (or use included `mvnw.cmd` / `mvnw`)
- MySQL 8.0+ running on `localhost:3306` with database `ng-message`

### Commands (Windows PowerShell)

```powershell
# Navigate to Java server folder
cd d:\Projects\ng-message\server-java

# 1. Run unit & integration tests
.\mvnw.cmd test

# 2. Package standalone JAR (skipping tests for quick build)
.\mvnw.cmd -DskipTests clean package

# 3. Run Spring Boot application
java -jar target/server-java-1.0.0.jar
```

The server binds to port **`8080`**. Database configuration and JWT secret keys can be configured in:
`server-java/src/main/resources/application.properties`
