

## 🧠 AgriVision Frontend Integration Guide

### 🚀 Overview

**AgriVision** is a drone-powered crop monitoring system. The backend is built with:

- Django + Django REST Framework
- PostgreSQL
- Docker + Docker Compose
- TensorFlow-based disease detection module

This guide explains:
- How to run the backend
- What API endpoints are available
- How to begin frontend integration
- Tools and setup needed

---

## 🛠️ Backend Status & Stack

### ✅ Backend Tech Stack:
- **Python 3.9**
- **Django 4.2.20**
- **Django REST Framework**
- **drf-spectacular** (API schema + docs)
- **PostgreSQL 15**
- **TensorFlow 2.19** for disease detection
- **Docker / Docker Compose**

### ✅ Backend Progress:
- Full disease detection pipeline working
- Image upload (drone/manual)
- Prediction confidence included
- API docs generated with Swagger + Redoc
- CORS enabled for frontend development

---

## 🐳 How to Run the Backend

Make sure Docker is installed.

```bash
git clone https://github.com/Fredrick-owino/agrivision.git
cd agrivision
docker-compose up --build
```

📍 This will start:

- `web` container running Django
- `db` container running PostgreSQL

The backend will be available at:  
**http://localhost:8000**

---

## 🌐 API Endpoints (Ready for Use)

| Endpoint | Method | Description |
|---------|--------|-------------|
| `/api/predict-disease/` | POST | Upload an image to get disease prediction |
| `/api/drone-upload/` | POST | Upload drone image for prediction |
| `/api/disease-classes/` | GET | Get supported crop disease classes |
| `/api/schema/` | GET | OpenAPI Schema (for devs) |
| `/api/docs/swagger/` | GET | Swagger UI (interactive) |
| `/api/docs/redoc/` | GET | Redoc UI |

📂 Files must be uploaded as `multipart/form-data` under the `image` field.

Example using `fetch` or `axios` will be shared below.

---

## 🧑‍💻 Frontend Setup

You’ll build the frontend using:

- **React + Vite**
- **ian hapa sjui uatumia hii Tailwind CSS ama ingine**
- **Axios** (for API requests)

### 📦 Prerequisites

- Node.js (v16+)
- npm or yarn

### 🧪 Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at:  
**http://localhost:5173**

---

## 📡 Example API Call (Disease Detection)

```js
import axios from 'axios';

const predictDisease = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await axios.post('http://localhost:8000/api/predict-disease/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
```

---

## ✅ What the Frontend Should Cover Now

- 🌾 **Image Upload Interface**:
  - Upload image from disk
  - Option for drone image
- 🔍 **Prediction Result View**:
  - Show prediction + confidence
- 📖 **API Docs Access Page** (optional):
  - Link to Swagger/Redoc

---

## 🧭 What's Next?

I'm  now starting the **YOLOv8 crop/fruit counting module**, which will be added as a new feature and route. Frontend will later update to support:

- Real-time object counting
- YOLO-based visualizations
- Multiple model selections (in future)

