import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const DroneMonitoring = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [media, setMedia] = useState(null);
  const [stream, setStream] = useState(null);
  const [streaming, setStreaming] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const dummyBoxes = [
    { x: 100, y: 80, width: 120, height: 60, label: 'Fruit', confidence: 0.94 },
    { x: 260, y: 150, width: 100, height: 70, label: 'Fruit', confidence: 0.88 },
  ];

  const startStream = async () => {
    try {
      const streamData = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(streamData);
      if (videoRef.current) {
        videoRef.current.srcObject = streamData;
        setStreaming(true);
      }
    } catch (err) {
      console.error('Webcam error:', err);
    }
  };

  const stopStream = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStreaming(false);
    }
  };

  const drawDetections = (boxes) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || !videoRef.current) return;

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    boxes.forEach((box) => {
      ctx.strokeStyle = '#00FFFF';
      ctx.lineWidth = 2;
      ctx.strokeRect(box.x, box.y, box.width, box.height);
      ctx.fillStyle = '#00FFFF';
      ctx.font = '14px sans-serif';
      ctx.fillText(`${box.label} (${Math.round(box.confidence * 100)}%)`, box.x, box.y - 6);
    });
  };

  useEffect(() => {
    let interval;
    if (streaming) {
      interval = setInterval(() => {
        drawDetections(dummyBoxes); // Replace with actual model output if available
      }, 500);
    }
    return () => clearInterval(interval);
  }, [streaming]);

  useEffect(() => {
    return () => stopStream();
  }, []);

  const handleFileChange = (e) => {
    setMedia(e.target.files[0]);
    setResult(null);
    setError('');
  };

  const handleUpload = async () => {
    if (!media) return;
    const formData = new FormData();
    formData.append('file', media);
    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/predict/apple/`, formData);
      setResult(res.data);
    } catch (err) {
      setError('Prediction failed. Please try a different file.');
    } finally {
      setLoading(false);
    }
  };

  const isVideo = (filename) => {
    return filename && (filename.endsWith('.mp4') || filename.endsWith('.mov') || filename.endsWith('.avi'));
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Drone-Based Fruit Monitoring</h1>
        <p className="text-center text-gray-400 mb-10">
          Live detection via webcam/drone or upload drone footage for AI-powered fruit counting.
        </p>

        {/* Live Streaming Section */}
        <h2 className="text-xl font-semibold text-blue-400 mb-4">Live Streaming (Drone)</h2>
        <div className="relative bg-gray-900 rounded overflow-hidden shadow mb-8">
          <video ref={videoRef} autoPlay muted playsInline className="w-full h-auto rounded" />
          <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
        </div>

        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={startStream}
            disabled={streaming}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded disabled:opacity-50"
          >
            Start Streaming
          </button>
          <button
            onClick={stopStream}
            disabled={!streaming}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded disabled:opacity-50"
          >
            Stop Streaming
          </button>
        </div>

        {/* Upload Prediction */}
        {!streaming && (
          <div className="bg-gray-900 p-6 rounded shadow text-center">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="mb-4 text-sm text-gray-300 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
            <button
              onClick={handleUpload}
              disabled={!media || loading}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Upload & Predict'}
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {result && (
              <div className="mt-8">
                <p className="text-green-400 font-semibold text-lg mb-4">
                  Detected Count: {result.count}
                </p>
                <div>
                  {isVideo(result.preview_inline || result.media_url) ? (
                    <video
                      src={result.preview_inline || result.media_url}
                      controls
                      className="rounded shadow w-full"
                    />
                  ) : (
                    <img
                      src={result.preview_inline || result.media_url}
                      alt="Prediction result"
                      className="rounded shadow w-full"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default DroneMonitoring;
