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
      setDiseaseResult(res.data); // response is flat dict
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
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-8 space-y-20">
      {/* Disease Detection Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">🌿 Disease Detection</h2>
        <form onSubmit={handleDiseaseSubmit} className="mb-6 space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setDiseaseFile(e.target.files[0])}
            className="w-full text-sm text-gray-300"
          />
          <button
            type="submit"
            disabled={!diseaseFile || diseaseLoading}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md disabled:opacity-50"
          >
            {diseaseLoading ? 'Analyzing...' : 'Submit'}
          </button>
        </form>

        {diseaseResult && (
          <div className="grid md:grid-cols-2 gap-6 bg-gray-900 p-6 rounded-xl shadow-lg">
            <div>
              <h4 className="text-lg font-semibold mb-2">Input Image</h4>
              <img src={URL.createObjectURL(diseaseFile)} alt="Input" className="rounded-md" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Disease Prediction Details</h4>
              <ul className="space-y-2 text-base">
                <li><strong>Label:</strong> {diseaseResult.label}</li>
                <li><strong>Confidence:</strong> {(diseaseResult.confidence * 100).toFixed(2)}%</li>
                <li><strong>Plant:</strong> {diseaseResult.plant}</li>
                <li><strong>Disease:</strong> {diseaseResult.disease}</li>
                <li><strong>Control Measures:</strong> {diseaseResult.control_measures}</li>
                <li><strong>Chemicals:</strong> {diseaseResult.chemicals}</li>
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* Fruit Counting Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">🍎 Fruit Counting</h2>
        <form onSubmit={handleFruitSubmit} className="mb-6 space-y-4">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFruitFile(e.target.files[0])}
            className="w-full text-sm text-gray-300"
          />
          <button
            type="submit"
            disabled={!fruitFile || fruitLoading}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md disabled:opacity-50"
          >
            {fruitLoading ? 'Counting...' : 'Submit'}
          </button>
        </form>

        {fruitResult && (
          <div className="grid md:grid-cols-2 gap-6 bg-gray-900 p-6 rounded-xl shadow-lg">
            {/* Input File Preview */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Input</h4>
              {fruitFile?.type?.startsWith("video") ? (
                <video
                  src={URL.createObjectURL(fruitFile)}
                  controls
                  className="rounded-md w-full max-h-[400px]"
                />
              ) : (
                <img
                  src={URL.createObjectURL(fruitFile)}
                  alt="Input"
                  className="rounded-md"
                />
              )}
            </div>

            {/* Annotated Detection Output */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Detection Result</h4>
              {fruitFile?.type?.startsWith("video") ? (
                <video
                  src={fruitResult?.preview_inline || fruitResult?.media_url}
                  controls
                  className="rounded-md w-full max-h-[400px]"
                />
              ) : (
                <img
                  src={fruitResult?.preview_inline || fruitResult?.media_url}
                  alt="Detected"
                  className="rounded-md"
                />
              )}
            </div>

            {/* Fruit Count Summary */}
            <div className="col-span-2 mt-4 text-center text-lg">
              <p><strong>Fruits Counted:</strong> {fruitResult.count}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Predict;
