# KonHaiy AI

## Table of Contents
1. [Project Purpose](#project-purpose)
2. [Main Features](#main-features)
3. [Demo & Presentation](#Demo-and-Presentation)
4. [Technology Stack](#technology-stack)
5. [Project Structure](#project-structure)
6. [Installation](#installation)
7. [Environment Variables](#environment-variables)
8. [Startup Commands](#startup-commands)
9. [Privacy Warning](#privacy-warning)
10. [Known Limitations](#known-limitations)

## Project Purpose

KonHaiy AI is a face recognition-based missing person detection and tracking system. It enables users to register missing persons, runs real-time surveillance through webcam or CCTV using face recognition, and automatically alerts stakeholders with location and timestamp when a known face is detected. The system also provides a web interface to search tracked locations and manage missing person records.

## Main Features

- Interactive React frontend to register and list missing persons
- Real-time face detection and recognition using OpenCV and the `face-recognition` library
- Automatic location fetching via GeoJS IP geolocation API
- Telegram and WhatsApp alerts sent to registered stakeholders upon detection
- Node.js/Express backend with MongoDB for storing person records and location history
- Search tracked locations by identification number
- Streamlit-based surveillance dashboard

#### Demo & Presentation

### Project Presentation

View the complete project presentation here:

[View KonHaiy AI Presentation (PDF)](ใส่ลิงก์-PDF-ตรงนี้)

### Application Screenshots

#### Home Page

![KonHaiy AI Home Page](screenshots/home-page.png)

#### Missing Person Registration

![Missing Person Registration Page](screenshots/register-person.png)

#### Missing Persons List

![Missing Persons List Page](screenshots/missing-persons-list.png)

#### Report Case Page

![Report Case Page](screenshots/report-case.png)

#### Location Search

![Tracked Location Search Page](screenshots/location-search.png)

#### Surveillance Dashboard

![Face Recognition Surveillance Dashboard](screenshots/surveillance-dashboard.png)

#### Detection and Notification

![Face Detection and Alert Result](screenshots/detection-alert.png)


## Technology Stack

- **Frontend:** React 18, React Router, Tailwind CSS, Axios
- **Backend:** Node.js, Express, Mongoose, Multer (file uploads)
- **Database:** MongoDB (local or remote)
- **Face Recognition:** Python, OpenCV, `face-recognition`, `numpy`
- **Surveillance UI:** Streamlit, Streamlit-Lottie
- **Notifications:** Telegram Bot API, Ultramsg WhatsApp API
- **Geolocation:** GeoJS

## Project Structure

```
Face_recognition_Finding_missing_people/
├── Node-js server MS/          # Express backend API
│   ├── index.js                # App entry point
│   ├── db.js                   # MongoDB connection
│   ├── models/                 # Mongoose schemas
│   │   ├── person.js
│   │   └── location.js
│   ├── routes/                 # API routes
│   │   ├── missing.js
│   │   └── location.js
│   ├── uploads/                # Uploaded person images (runtime)
│   └── package.json
├── Frontend/
│   └── frontend MS/
│       └── msfrontend/         # React frontend
│           ├── src/
│           │   ├── components/ # Page components
│           │   └── App.js
│           └── public/
├── face_recognition/           # Python recognition service
│   ├── main.py                 # Streamlit app entry point
│   ├── simple_facerec.py       # Face recognition wrapper
│   ├── apicall.py              # Backend API integration
│   ├── imagesapi.py            # Fetch images from backend
│   ├── telegram_alert.py       # Telegram notifications
│   ├── dateandwhatsapp.py      # WhatsApp notifications
│   ├── getlocationinfo2.py     # Geolocation helper
│   ├── images_update.py        # Image folder cleanup
│   ├── accuracytest.py         # Model accuracy testing
│   ├── requirements.txt
│   ├── images/                 # Known face images (runtime)
│   └── test_images/            # Test images (runtime)
├── screenshots/                # Demo screenshots
├── .env.example                # Environment variable template
├── .gitignore                  # Git ignore rules
└── Readme.md
```

## Installation

### Prerequisites

- Node.js >= 16
- Python >= 3.8
- MongoDB (local or Atlas)
- Telegram Bot Token (from [@BotFather](https://t.me/botfather))
- Ultramsg account (for WhatsApp notifications)

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd Face_recognition_Finding_missing_people
```

### 2. Configure environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

Also create a frontend env file:

```bash
cd "Frontend/frontend MS/msfrontend"
cp .env.example .env
cd ../../..
```

### 3. Install backend dependencies

```bash
cd "Node-js server MS"
npm install
cd ..
```

### 4. Install frontend dependencies

```bash
cd "Frontend/frontend MS/msfrontend"
npm install
cd ../../..
```

### 5. Install Python dependencies

```bash
cd face_recognition
pip install -r requirements.txt
cd ..
```

## Environment Variables

### Root `.env` (Backend + Python Service)

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Backend server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/facedb` |
| `TELEGRAM_BOT_TOKEN` | Telegram bot token from BotFather | *(required)* |
| `TELEGRAM_CHAT_ID` | Telegram chat ID to send alerts to | *(required)* |
| `ULTRAMSG_TOKEN` | Ultramsg API token | *(required)* |
| `ULTRAMSG_INSTANCE` | Ultramsg instance ID | `instance7517` |
| `PYTHON_BACKEND_API_URL` | Backend base URL for Python service | `http://localhost:5000` |
| `PYTHON_TELEGRAM_BOT_TOKEN` | Telegram bot token (Python service) | *(same as above)* |
| `PYTHON_TELEGRAM_CHAT_ID` | Telegram chat ID (Python service) | *(same as above)* |
| `PYTHON_ULTRAMSG_TOKEN` | Ultramsg token (Python service) | *(same as above)* |
| `PYTHON_ULTRAMSG_INSTANCE` | Ultramsg instance (Python service) | *(same as above)* |

### Frontend `.env` (in `Frontend/frontend MS/msfrontend/`)

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API base URL | `http://localhost:5000` |
| `REACT_APP_SURVEILLANCE_URL` | Streamlit surveillance URL | `http://localhost:8501` |

## Startup Commands

### Terminal 1: Start MongoDB
Ensure MongoDB is running locally, or use a MongoDB Atlas connection string in `MONGODB_URI`.

### Terminal 2: Start Backend

```bash
cd "Node-js server MS"
npm start
```

### Terminal 3: Start Frontend

```bash
cd "Frontend/frontend MS/msfrontend"
npm start
```

### Terminal 4: Start Python Recognition Service

```bash
cd face_recognition
streamlit run main.py
```

## Privacy Warning

**This project handles highly sensitive personal data.** Before making this repository public or deploying it:

- **Never commit real identification numbers, phone numbers, addresses, or personal photos.** The repository currently contains sample images in `face_recognition/images/` and `face_recognition/test_images/` that must be removed or replaced with synthetic/test data before any public release.
- The `face_recognition/images/` directory stores biometric face encodings and source images of real individuals. These must not be published.
- Uploaded user images stored in the backend `uploads/` directory are runtime data and must be excluded via `.gitignore`.
- Telegram Bot Tokens, Chat IDs, and Ultramsg API tokens are secrets. They must only live in local `.env` files, which are git-ignored.
- Review local laws (e.g., India's DPDP Act, GDPR) before deploying face recognition systems that process personal data.
- This codebase is provided for educational purposes. You are responsible for ensuring compliance with applicable privacy and data protection regulations.

## Known Limitations

- Face recognition accuracy depends on lighting, angle, and image quality. The `tolerance` parameter in `simple_facerec.py` is fixed at `0.6`.
- The Streamlit frontend (`main.py`) uses a single webcam (`cv2.VideoCapture(0)`) and does not support RTSP/CCTV streams out of the box.
- MongoDB is used without authentication by default. Production deployments must enable MongoDB auth and TLS.
- WhatsApp notifications rely on the Ultramsg third-party service and may incur costs or rate limits.
- The frontend stores missing person images as Base64 in MongoDB documents, which can quickly increase database size.
- No input sanitization or rate limiting is implemented on the backend API.
- No user authentication or role-based access control is present.
