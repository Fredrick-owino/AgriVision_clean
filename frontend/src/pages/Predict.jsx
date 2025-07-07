import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Upload, Image, Video, BarChart3, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import axios from 'axios';

const Predict = () => {
  const { isDark } = useTheme();

  // Original API logic (do not change)
  const [diseaseFile, setDiseaseFile] = useState(null);
  const [diseaseResult, setDiseaseResult] = useState(null);
  const [diseaseLoading, setDiseaseLoading] = useState(false);

  const [fruitFile, setFruitFile] = useState(null);
  const [fruitResult, setFruitResult] = useState(null);
  const [fruitLoading, setFruitLoading] = useState(false);

  const handleDiseaseSubmit = async (e) => {
    e.preventDefault();
    if (!diseaseFile) return;

    setDiseaseLoading(true);
    setDiseaseResult(null);

    const formData = new FormData();
    formData.append('image', diseaseFile);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/predict/disease/`, formData);
      setDiseaseResult(res.data);
    } catch (err) {
      console.error('Disease prediction error:', err);
      alert('Disease prediction failed. Try again.');
    } finally {
      setDiseaseLoading(false);
    }
  };

  const handleFruitSubmit = async (e) => {
    e.preventDefault();
    if (!fruitFile) return;

    setFruitLoading(true);
    setFruitResult(null);

    const formData = new FormData();
    formData.append('file', fruitFile);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/predict/apple/`, formData);
      setFruitResult(res.data);
    } catch (err) {
      console.error('Fruit count error:', err);
      alert('Fruit counting failed. Try again.');
    } finally {
      setFruitLoading(false);
    }
  };

  // Dummy data for UI/Style demonstration (not using API)
  const dummyDiseaseResult = {
    label: "Healthy",
    confidence: 0.942,
    plant: "Apple",
    disease: "None",
    control_measures: "No action needed.",
    chemicals: "N/A"
  };

  const dummyFruitResult = {
    count: 23,
    preview_inline: "",
    media_url: "",
  };

  // Helper for preview
  const isVideo = (file) => {
    if (!file) return false;
    if (typeof file === "string") {
      return file.endsWith('.mp4') || file.endsWith('.mov') || file.endsWith('.avi');
    }
    return file.type && file.type.startsWith("video");
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            AI Prediction
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Upload your farm images or videos to get instant AI-powered fruit counting and disease detection.
          </p>
        </div>

        {/* Disease Detection Section */}
        <section className="mb-24">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">🌿 Disease Detection</h2>
            <p className="text-gray-400">Upload a plant image to analyze disease conditions.</p>
          </div>
          <form onSubmit={handleDiseaseSubmit} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setDiseaseFile(e.target.files[0])}
              className="w-full sm:w-1/2 text-sm text-gray-300 bg-gray-800 p-2 rounded-md border border-gray-700"
            />
            <button
              type="submit"
              disabled={!diseaseFile || diseaseLoading}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md disabled:opacity-50 transition"
            >
              {diseaseLoading ? 'Analyzing...' : 'Analyze'}
            </button>
          </form>
          {/* Show real result if available, else dummy */}
          {(diseaseResult || diseaseFile) && (
            <div className="grid md:grid-cols-2 gap-6 bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-800 mt-8">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold">📷 Input Image</h4>
                {diseaseFile && (
                  <img src={URL.createObjectURL(diseaseFile)} alt="Input" className="rounded-md shadow-md" />
                )}
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">🧪 Prediction Details</h4>
                <ul className="space-y-1 text-base text-gray-300">
                  <li><span className="font-bold text-white">Label:</span> {(diseaseResult || dummyDiseaseResult).label}</li>
                  <li><span className="font-bold text-white">Confidence:</span> {((diseaseResult || dummyDiseaseResult).confidence * 100).toFixed(2)}%</li>
                  <li><span className="font-bold text-white">Plant:</span> {(diseaseResult || dummyDiseaseResult).plant}</li>
                  <li><span className="font-bold text-white">Disease:</span> {(diseaseResult || dummyDiseaseResult).disease}</li>
                  <li><span className="font-bold text-white">Control Measures:</span> {(diseaseResult || dummyDiseaseResult).control_measures}</li>
                  <li><span className="font-bold text-white">Chemicals:</span> {(diseaseResult || dummyDiseaseResult).chemicals}</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Fruit Counting Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">🍎 Fruit Counting</h2>
            <p className="text-gray-400">Upload an image or video to count fruits in the input.</p>
          </div>
          <form onSubmit={handleFruitSubmit} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setFruitFile(e.target.files[0])}
              className="w-full sm:w-1/2 text-sm text-gray-300 bg-gray-800 p-2 rounded-md border border-gray-700"
            />
            <button
              type="submit"
              disabled={!fruitFile || fruitLoading}
              className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md disabled:opacity-50 transition"
            >
              {fruitLoading ? 'Counting...' : 'Count'}
            </button>
          </form>
          {/* Show real result if available, else dummy */}
          {(fruitResult || fruitFile) && (
            <div className="grid md:grid-cols-2 gap-6 bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-800 mt-8">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold">📷 Input Preview</h4>
                {fruitFile && (isVideo(fruitFile)
                  ? <video src={URL.createObjectURL(fruitFile)} controls className="rounded-md w-full max-h-[400px] shadow" />
                  : <img src={URL.createObjectURL(fruitFile)} alt="Input" className="rounded-md shadow" />
                )}
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold">🧠 Detection Output</h4>
                {fruitFile && (isVideo(fruitFile)
                  ? <video src={fruitResult?.preview_inline || fruitResult?.media_url || dummyFruitResult.preview_inline} controls className="rounded-md w-full max-h-[400px] shadow" />
                  : <img src={fruitResult?.preview_inline || fruitResult?.media_url || dummyFruitResult.preview_inline} alt="Detected" className="rounded-md shadow" />
                )}
              </div>
              <div className="col-span-2 mt-4 text-center text-xl text-white font-semibold">
                ✅ Fruits Counted: <span className="text-green-400">{(fruitResult || dummyFruitResult).count}</span>
              </div>
            </div>
          )}
        </section>

        {/* Features Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className={`p-6 rounded-xl text-center ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
            <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
              <BarChart3 className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Accurate Counting</h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>AI-powered fruit counting with 94%+ accuracy</p>
          </div>
          <div className={`p-6 rounded-xl text-center ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
            <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-green-500/20' : 'bg-green-100'}`}>
              <CheckCircle className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Disease Detection</h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Early identification of plant diseases and issues</p>
          </div>
          <div className={`p-6 rounded-xl text-center ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
            <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
              <Loader className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            </div>
            <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Fast Processing</h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Results in under 10 seconds for quick decision-making</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predict;
