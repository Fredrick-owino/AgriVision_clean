import React, { useState } from 'react';
import axios from 'axios';

const Predict = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 px-4 sm:px-8 space-y-24">
      
      {/* Disease Detection Section */}
      <section className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2">🌿 Disease Detection</h2>
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

        {diseaseResult && (
          <div className="grid md:grid-cols-2 gap-6 bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-800">
            <div className="space-y-2">
              <h4 className="text-xl font-semibold">📷 Input Image</h4>
              <img src={URL.createObjectURL(diseaseFile)} alt="Input" className="rounded-md shadow-md" />
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">🧪 Prediction Details</h4>
              <ul className="space-y-1 text-base text-gray-300">
                <li><span className="font-bold text-white">Label:</span> {diseaseResult.label}</li>
                <li><span className="font-bold text-white">Confidence:</span> {(diseaseResult.confidence * 100).toFixed(2)}%</li>
                <li><span className="font-bold text-white">Plant:</span> {diseaseResult.plant}</li>
                <li><span className="font-bold text-white">Disease:</span> {diseaseResult.disease}</li>
                <li><span className="font-bold text-white">Control Measures:</span> {diseaseResult.control_measures}</li>
                <li><span className="font-bold text-white">Chemicals:</span> {diseaseResult.chemicals}</li>
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* Fruit Counting Section */}
      <section className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2">🍎 Fruit Counting</h2>
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

        {fruitResult && (
          <div className="grid md:grid-cols-2 gap-6 bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-800">
            <div className="space-y-2">
              <h4 className="text-xl font-semibold">📷 Input Preview</h4>
              {fruitFile?.type?.startsWith("video") ? (
                <video
                  src={URL.createObjectURL(fruitFile)}
                  controls
                  className="rounded-md w-full max-h-[400px] shadow"
                />
              ) : (
                <img
                  src={URL.createObjectURL(fruitFile)}
                  alt="Input"
                  className="rounded-md shadow"
                />
              )}
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-semibold">🧠 Detection Output</h4>
              {fruitFile?.type?.startsWith("video") ? (
                <video
                  src={fruitResult?.preview_inline || fruitResult?.media_url}
                  controls
                  className="rounded-md w-full max-h-[400px] shadow"
                />
              ) : (
                <img
                  src={fruitResult?.preview_inline || fruitResult?.media_url}
                  alt="Detected"
                  className="rounded-md shadow"
                />
              )}
            </div>

            <div className="col-span-2 mt-4 text-center text-xl text-white font-semibold">
              ✅ Fruits Counted: <span className="text-green-400">{fruitResult.count}</span>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Predict;
