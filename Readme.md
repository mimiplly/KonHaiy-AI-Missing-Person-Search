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

[View KonHaiy AI Presentation (PDF)](https://github.com/user-attachments/files/30314243/KonHaiy.AI.Presentation.pdf)

### Application Screenshots

* Home Page

<img width="900" alt="KonHaiy AI Home Page" src="https://github.com/user-attachments/assets/647b43ef-66ca-4286-8d40-22f9bfc9e621" />

* Missing Person Registration

<img width="850" alt="Missing Person Registration Page" src="https://github.com/user-attachments/assets/9f3f604b-da5a-4f77-a76b-c46d9071dbf4" />

* Missing Persons List

<img width="850" alt="Missing Persons List Page" src="https://github.com/user-attachments/assets/abd9b62e-66fc-434f-a844-50be5d026016" />

* Tracked Locations and Search

<img width="850" alt="Tracked Locations and Search Page" src="https://github.com/user-attachments/assets/51d03d0c-9465-4576-a271-1b74b6a0cd26" />

* Surveillance Dashboard

<img width="850" alt="Surveillance Dashboard" src="https://github.com/user-attachments/assets/45799765-b341-4ab5-94a5-53b2e91f2ded" />

* Face Detection in Progress

<img width="820" alt="Face Detection in Progress" src="https://github.com/user-attachments/assets/1300c18d-4600-4829-82da-e0f8ac660fa7" />

* Telegram Alert After a Location Is Detected

<img width="580" alt="Telegram Location Alert" src="https://github.com/user-attachments/assets/44ca09af-2858-444a-8a81-e41e91316c2f" />

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
