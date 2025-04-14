# AgriVision 🌾🚁

AgriVision is a drone-powered agricultural monitoring system that enables:

- Plant disease detection via deep learning (TensorFlow)
- Crop/Fruit counting,  (YOLO )
- Manual and drone-based image upload support

## 🌐 Tech Stack

- **Backend:** Django, Django REST Framework, PostgreSQL, Docker
- **ML Models:** TensorFlow (disease), YOLOv4 (counting)
- **Frontend:** React + Vite (handled by separate team)

## 📦 Features

- Disease detection via uploaded or drone-captured images
- CORS and Swagger (OpenAPI) integration
- Multi-language support scaffold
- Dockerized dev environment

## 🚀 Getting Started (Dev)

```bash
git clone https://github.com/your-username/agrivision.git
cd agrivision
cp .env.example .env.dev
docker-compose up --build
```

## 🛠 API Docs

- Swagger: [http://localhost:8000/api/docs/swagger/](http://localhost:8000/api/docs/swagger/)
- Redoc: [http://localhost:8000/api/docs/redoc/](http://localhost:8000/api/docs/redoc/)

## 📁 Directory Structure

```bash
AgriVision/
├── backend/        # Django app
├── frontend/       # React app (Vite)
├── models/         # ML models (disease + YOLO)
└── docker-compose.yml

