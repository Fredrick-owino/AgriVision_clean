import tensorflow as tf
import numpy as np
import os
from django.conf import settings
from api.disease_insights import disease_insights  # ✅ Import disease insights

class DiseaseDetector:
    def __init__(self):
        model_path = os.path.join(os.path.dirname(__file__), 'trained_model.keras')
        self.model = tf.keras.models.load_model(model_path)
        print("\n✅ Disease Detection Model Loaded Successfully\n")

        # Class names – make sure they match training order
        self.class_labels = [
            'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
            'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy',
            'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_',
            'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot',
            'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy',
            'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy',
            'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 'Potato___Early_blight',
            'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy',
            'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy', 'Tomato___Bacterial_spot',
            'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold', 'Tomato___Septoria_leaf_spot',
            'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot',
            'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 'Tomato___healthy'
        ]

    def predict(self, img_path):
        # Load and preprocess the image
        img = tf.keras.preprocessing.image.load_img(img_path, target_size=(128, 128))
        img_array = tf.keras.preprocessing.image.img_to_array(img).astype(np.float32)
        img_array /= 255.0
        img_array = np.expand_dims(img_array, axis=0)

        # Model prediction
        predictions = self.model.predict(img_array)
        predicted_index = int(np.argmax(predictions[0]))
        confidence = float(np.max(predictions[0]))

        label = self.class_labels[predicted_index]
        insights = disease_insights.get(label, {
            "plant": "Unknown",
            "disease": "Unknown",
            "control_measures": "No control measures available.",
            "chemicals": "No chemical recommendations available."
        })

        return {
            "label": label,
            "confidence": round(confidence, 4),
            "plant": insights["plant"],
            "disease": insights["disease"],
            "control_measures": insights["control_measures"],
            "chemicals": insights["chemicals"]
        }
