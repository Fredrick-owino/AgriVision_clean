import tensorflow as tf
import numpy as np
import os
from django.conf import settings

class DiseaseDetector:
    def __init__(self):
        model_path = os.path.join(os.path.dirname(__file__), 'trained_model.keras')
        self.model = tf.keras.models.load_model(model_path)
        print("\n✅ Model Loaded Successfully\n")

    def predict(self, img_path):
        # Load the image with the target size for your model
        img = tf.keras.preprocessing.image.load_img(img_path, target_size=(128, 128))
        
        # Convert the image to a numpy array
        img_array = tf.keras.preprocessing.image.img_to_array(img)
        
        # Normalize the image array
        img_array /= 255.0
        
        # Expand the dimensions so the input is (1, 224, 224, 3)
        img_array = np.expand_dims(img_array, axis=0)
        
        # Make predictions using your model
        predictions = self.model.predict(img_array)
        predicted_index = np.argmax(predictions, axis=1)[0]
        confidence = float(np.max(predictions))
          # Get the index of the highest probability class

        # List of class labels
        class_labels = [
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

        # Return the class label of the predicted class
        result = class_labels[predicted_index]
        return {"label": result, "confidence": round(confidence, 4)}