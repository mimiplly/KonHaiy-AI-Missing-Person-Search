# KonHaiy AI

KonHaiy AI is a missing person search system that uses facial recognition to compare registered photos with webcam or surveillance footage.

Users can register a missing person, search detection history, and receive location alerts when the system finds a matching face.

## About the Project

This project started from a group assignment. The original idea and features were discussed and developed together with my teammates.

I was the main developer responsible for turning the idea into a working application, including:

* Frontend development
* Backend development
* Database integration
* Face recognition integration
* API connection between each part of the system
* System testing and bug fixing

## Table of Contents

1. [Main Features](#main-features)
2. [Demo and Presentation](#demo-and-presentation)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Environment Variables](#environment-variables)
7. [Running the Project](#running-the-project)
8. [Privacy Warning](#privacy-warning)
9. [Known Limitations](#known-limitations)

## Main Features

* Register and manage missing person records
* Upload missing person photos
* Detect and recognize faces through a webcam
* Store detection locations and timestamps
* Search tracking history using an identification number
* Send Telegram and WhatsApp alerts when a match is detected
* Manage data through a React web application
* Run face recognition through a Streamlit dashboard

## Demo and Presentation

### Project Presentation

[View KonHaiy AI Presentation (PDF)](docs/KonHaiy-AI-Presentation.pdf)

### Application Screenshots

#### Home Page

![KonHaiy AI Home Page](screenshots/home-page.png)

#### Missing Person Registration

![Missing Person Registration](screenshots/register-person.png)

#### Missing Persons List

![Missing Persons List](screenshots/missing-persons-list.png)

#### Report Case Page

![Report Case Page](screenshots/report-case.png)

#### Location Search

![Location Search](screenshots/location-search.png)

#### Surveillance Dashboard

![Surveillance Dashboard](screenshots/surveillance-dashboard.png)

#### Face Detection Result

![Face Detection Result](screenshots/detection-result.png)

## Technology Stack

* **Frontend:** React, React Router, Tailwind CSS, Axios
* **Backend:** Node.js, Express, Mongoose, Multer
* **Database:** MongoDB
* **Face Recognition:** Python, OpenCV, `face-recognition`, NumPy
* **Surveillance Dashboard:** Streamlit, Streamlit-Lottie
* **Notifications:** Telegram Bot API, Ultramsg WhatsApp API
* **Geolocation:** GeoJS API

## Project Structure

```text
Face_recognition_Finding_missing_people/
├── Node-js server MS/
│   ├── index.js
│   ├── db.js
│   ├── models/
│   │   ├── person.js
│   │   └── location.js
│   ├── routes/
│   │   ├── missing.js
│   │   └── location.js
│   ├── uploads/
│   └── package.json
│
├── Frontend/
│   └── frontend MS/
│       └── msfrontend/
│           ├── public/
│           └── src/
│               ├── components/
│               └── App.js
│
├── face_recognition/
│   ├── main.py
│   ├── simple_facerec.py
│   ├── apicall.py
│   ├── imagesapi.py
│   ├── telegram_alert.py
│   ├── dateandwhatsapp.py
│   ├── getlocationinfo2.py
│   ├── images_update.py
│   ├── accuracytest.py
│   ├── requirements.txt
│   ├── images/
│   └── test_images/
│
├── screenshots/
├── docs/
├── .env.example
├── .gitignore
└── README.md
```

## Installation

### Requirements

Make sure these programs are installed:

* Node.js 16 or newer
* Python 3.8 or newer
* MongoDB or MongoDB Atlas
* Git

Telegram and Ultramsg accounts are required only when notification features are used.

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repository>.git
cd Face_recognition_Finding_missing_people
```

### 2. Create Environment Files

Copy the example environment file:

```bash
cp .env.example .env
```

Create a frontend environment file inside:

```text
Frontend/frontend MS/msfrontend/
```

### 3. Install Backend Dependencies

```bash
cd "Node-js server MS"
npm install
cd ..
```

### 4. Install Frontend Dependencies

```bash
cd "Frontend/frontend MS/msfrontend"
npm install
cd ../../..
```

### 5. Install Python Dependencies

```bash
cd face_recognition
pip install -r requirements.txt
cd ..
```

## Environment Variables

### Root `.env`

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/facedb

TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

ULTRAMSG_TOKEN=
ULTRAMSG_INSTANCE=

PYTHON_BACKEND_API_URL=http://localhost:5000
```

### Frontend `.env`

Create the file inside:

```text
Frontend/frontend MS/msfrontend/.env
```

Add:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_SURVEILLANCE_URL=http://localhost:8501
```

Do not upload real API tokens or private credentials to GitHub.

## Running the Project

The project uses four terminals.

### Terminal 1: MongoDB

Start MongoDB locally or connect the project to MongoDB Atlas.

### Terminal 2: Backend

```bash
cd "Node-js server MS"
npm start
```

### Terminal 3: Frontend

```bash
cd "Frontend/frontend MS/msfrontend"
npm start
```

### Terminal 4: Face Recognition Service

```bash
cd face_recognition
streamlit run main.py
```

The services normally run at:

```text
Frontend:     http://localhost:3000
Backend:      http://localhost:5000
Surveillance: http://localhost:8501
```

## Privacy Warning

This project handles personal information and biometric data.

Before publishing or deploying it:

* Remove real identification numbers, phone numbers, addresses, and photos
* Do not upload face images without permission
* Keep uploaded images and face data out of the public repository
* Store API tokens only in `.env` files
* Make sure `.env`, `uploads/`, and private image folders are included in `.gitignore`
* Follow applicable privacy and data protection laws

This project was created for educational and demonstration purposes.

## Known Limitations

* Recognition accuracy depends on lighting, camera angle, and image quality
* The current recognition tolerance is fixed at `0.6`
* The Streamlit service uses one webcam by default
* RTSP and CCTV streams are not fully supported
* The system does not currently have user authentication
* The backend does not include rate limiting
* Missing person images are stored as Base64 data in MongoDB
* WhatsApp alerts depend on the Ultramsg service
* Production security and database protection still need improvement

## Contributors

This project was created from a group idea and developed with input from my teammates.

**My main role:** Full-stack developer responsible for the frontend, backend, database connection, face recognition integration, API integration, testing, and bug fixing.
