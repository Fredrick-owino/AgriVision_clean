import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Loader } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../services/api';

function Predict() {
  // State management for prediction flow
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [isDroneImage, setIsDroneImage] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Handle file drop using react-dropzone
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Create preview URL for the uploaded image
    setPreviewUrl(URL.createObjectURL(file));
    setIsLoading(true);
    setPrediction(null);

    try {
      // Call appropriate API based on image type
      const result = isDroneImage 
        ? await api.predictDroneImage(file)
        : await api.predictDisease(file);
      
      setPrediction(result);
      toast.success('Analysis complete!');
    } catch (error) {
      console.error('Prediction error:', error);
      toast.error('Failed to analyze image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [isDroneImage]);

  // Dropzone configuration
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Crop Disease Detection
      </h1>

      {/* Image type selector */}
      <div className="mb-8 flex justify-center gap-4">
        <button
          onClick={() => setIsDroneImage(false)}
          className={`px-4 py-2 rounded-md ${
            !isDroneImage 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Regular Image
        </button>
        <button
          onClick={() => setIsDroneImage(true)}
          className={`px-4 py-2 rounded-md ${
            isDroneImage 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Drone Image
        </button>
      </div>

      {/* Upload area */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
          ${isDragActive ? 'border-green-500 bg-green-50' : 'border-gray-300'}
        `}
      >
        <input {...getInputProps()} />
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">
          {isDragActive
            ? 'Drop the image here...'
            : 'Drag & drop an image here, or click to select'}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Supported formats: JPEG, JPG, PNG
        </p>
      </div>

      {/* Preview and results section */}
      {(previewUrl || isLoading || prediction) && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          {previewUrl && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Uploaded Image</h3>
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-64 mx-auto rounded-lg"
              />
            </div>
          )}

          {isLoading && (
            <div className="text-center py-4">
              <Loader className="h-8 w-8 animate-spin text-green-600 mx-auto" />
              <p className="mt-2 text-gray-600">Analyzing image...</p>
            </div>
          )}

          {prediction && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Results</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-700">
                  <span className="font-medium">Disease:</span>{' '}
                  {prediction.disease}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Confidence:</span>{' '}
                  {(prediction.confidence * 100).toFixed(2)}%
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Predict;