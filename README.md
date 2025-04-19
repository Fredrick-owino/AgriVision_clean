# AgriVision_Clean 🌾🚁

AgriVision is a drone-powered agricultural monitoring system that enables:

- Plant disease detection via deep learning (TensorFlow)
- Crop/Fruit counting,  (YOLO )
- Manual and drone-based image upload support

---

## 🌐 Tech Stack

- **Backend:** Django, Django REST Framework, PostgreSQL, Docker
- **ML Models:** TensorFlow (disease), YOLOv4/YOLOv8 (counting)
- **Frontend:** React + Vite (handled by separate team)

---

## 📦 Features

- Disease detection via uploaded or drone-captured images
- CORS and Swagger (OpenAPI) integration
- Multi-language support scaffold
- Dockerized dev environment

---

## 🚀 Getting Started (Dev)

### 1. Clone the Repo

```bash
git clone https://github.com/Fredrick-owino/AgriVision_clean.git
cd AgriVision_clean
# AgriVision_Clean

AgriVision is a drone-powered AI platform for smart agriculture. It allows farmers and researchers to:

- Detect plant diseases using deep learning (TensorFlow)
- Count apples or fruits using YOLOv8
- Upload images or drone videos for analysis
- Visualize processed results in real-time

---

## 🚀 Tech Stack

| Layer       | Tools                                    |
|-------------|-------------------------------------------|
| **Backend** | Django, Django REST Framework, PostgreSQL |
| **ML Models**| TensorFlow (disease), YOLOv8 (counting)  |
| **Frontend**| React + Vite + Tailwind CSS               |
| **Deployment**| Docker + Docker Compose                |

---

## 📁 Project Structure

```
AgriVision_clean/
├── backend/                 # Django backend
│   ├── agrivision/         # Django settings, urls
│   ├── api/                # API views, serializers, inference logic
│   ├── manage.py
│   └── requirements.txt
├── frontend/               # React + Vite frontend
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
├── models/                 # Trained ML models
│   ├── crop_disease/
│   │   └── trained_model.keras
│   └── yolo/
│       └── best.pt
├── docker-compose.yml
├── .env.dev                # Environment variables
└── README.md
```

---

## 🛠️ Local Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/Fredrick-owino/AgriVision_clean.git
cd AgriVision_clean
```

### 2. Create `.env.dev`

Create a `.env.dev` file at the project root:

```env
DEBUG=1
SECRET_KEY=your_secret_key
DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1
SQL_ENGINE=django.db.backends.postgresql
SQL_DATABASE=agrivision
SQL_USER=postgres
SQL_PASSWORD=postgres
SQL_HOST=db
SQL_PORT=5432
```

### 3. Build and Start the Project

```bash
docker-compose up --build
```

### 4. Apply Migrations (from Docker container)

```bash
docker-compose exec web bash
cd backend
python manage.py migrate

```

### 5. Access the System

| Service      | URL                                |
|--------------|-------------------------------------|
| 🌐 Frontend   | http://localhost:5173              |
| 🧠 Swagger API| http://localhost:8000/api/docs/swagger/ |
| 📘 ReDoc Docs | http://localhost:8000/api/docs/redoc/    |

---

## 🤖 Pretrained Model Files

Ensure these models exist before running the app:   but Ian  ive tried to push the models but it always crush due to their side. I've realised that there is a threshold size of files you can push to github

| Model                | Location                               |
|---------------------|----------------------------------------|
| TensorFlow model     | `models/crop_disease/trained_model.keras` |
| YOLOv8 model         | `models/yolo/best.pt`                     |

These are loaded automatically at backend startup.

---

## 📡 API Endpoints

### Disease Detection

| Endpoint                       | Description                        |
|--------------------------------|------------------------------------|
| `POST /api/predict/disease/`   | Predict from manual image upload   |
| `POST /api/predict/disease/drone/` | Predict from drone image upload |
| `GET /api/predict/disease/classes/` | List of class labels         |

### Fruit Counting

| Endpoint                | Description                          |
|-------------------------|--------------------------------------|
| `POST /api/predict/apple/` | Upload image/video and count apples |

### Result Previews

| Endpoint                            | Description                   |
|-------------------------------------|-------------------------------|
| `GET /api/preview/tmp/<filename>`   | Preview processed image/video |

---

## 📷 Frontend Pages

- `/` – Landing Page
- `/predict` – Upload and run predictions
- `/drone-monitoring` – Real-time stream with object detection
- `/docs` – API documentation (Swagger/ReDoc links)
- `/about`, `/contact` – Informational sections

---

## 👨‍💻 Maintainer

**Fredrick Onyango**   (https://github.com/Fredrick-owino)

---

## 📜 License

This project is MIT Licensed.
```

---


