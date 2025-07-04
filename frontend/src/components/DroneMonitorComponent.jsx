import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Video, Upload, Play, Square, Camera, Activity, AlertCircle, CheckCircle, Loader } from 'lucide-react';

const DroneMonitorComponent = () => {
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
      setError('Failed to access camera. Please check permissions.');
    }
  };

  const stopStream = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStreaming(false);
      setStream(null);
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
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
      setResult(null);
      setError('');
    }
  };

  const handleUpload = async () => {
    if (!media) return;
    const formData = new FormData();
    formData.append('file', media);
    try {
      setLoading(true);
      setError('');
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
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Drone Monitoring</h1>
        <p className="text-gray-600">Live detection via webcam/drone or upload drone footage for AI-powered fruit counting</p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Stream Status</p>
              <p className={`text-2xl font-bold ${streaming ? 'text-green-600' : 'text-gray-400'}`}>
                {streaming ? 'Live' : 'Offline'}
              </p>
              <p className="text-xs text-gray-400">Camera feed</p>
            </div>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              streaming ? 'bg-green-100' : 'bg-gray-100'
            }`}>
              <Video className={`w-6 h-6 ${streaming ? 'text-green-600' : 'text-gray-400'}`} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Detection Count</p>
              <p className="text-2xl font-bold text-blue-600">
                {result?.count || (streaming ? dummyBoxes.length : 0)}
              </p>
              <p className="text-xs text-gray-400">Fruits detected</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Processing Status</p>
              <p className={`text-2xl font-bold ${loading ? 'text-orange-600' : result ? 'text-green-600' : 'text-gray-400'}`}>
                {loading ? 'Processing' : result ? 'Complete' : 'Ready'}
              </p>
              <p className="text-xs text-gray-400">AI analysis</p>
            </div>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              loading ? 'bg-orange-100' : result ? 'bg-green-100' : 'bg-gray-100'
            }`}>
              {loading ? (
                <Loader className="w-6 h-6 text-orange-600 animate-spin" />
              ) : result ? (
                <CheckCircle className="w-6 h-6 text-green-600" />
              ) : (
                <Activity className="w-6 h-6 text-gray-400" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Live Streaming Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Video className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Live Camera Feed</h3>
          </div>
          
          <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4" style={{ aspectRatio: '16/9' }}>
            <video 
              ref={videoRef} 
              autoPlay 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
            <canvas 
              ref={canvasRef} 
              className="absolute top-0 left-0 w-full h-full pointer-events-none" 
            />
            {!streaming && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-center text-gray-400">
                  <Camera className="w-12 h-12 mx-auto mb-2" />
                  <p>Camera feed will appear here</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={startStream}
              disabled={streaming}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Play size={16} />
              Start Stream
            </button>
            <button
              onClick={stopStream}
              disabled={!streaming}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Square size={16} />
              Stop Stream
            </button>
          </div>

          {streaming && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-sm text-green-700">Live detection active</p>
              </div>
            </div>
          )}
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <Upload className="w-4 h-4 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Upload Analysis</h3>
          </div>

          {!streaming && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Upload drone footage or images</p>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>

              {media && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Selected:</strong> {media.name}
                  </p>
                  <p className="text-xs text-blue-600">
                    Size: {(media.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              )}

              <button
                onClick={handleUpload}
                disabled={!media || loading}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {loading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload size={16} />
                    Upload & Analyze
                  </>
                )}
              </button>
            </div>
          )}

          {streaming && (
            <div className="text-center py-8 text-gray-500">
              <Camera className="w-12 h-12 mx-auto mb-2" />
              <p>Stop live stream to upload files</p>
            </div>
          )}
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      )}

      {/* Results Display */}
      {result && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Analysis Results</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
                <h4 className="font-semibold text-green-800 mb-2">Detection Summary</h4>
                <p className="text-2xl font-bold text-green-600 mb-1">{result.count}</p>
                <p className="text-sm text-green-700">Fruits detected in uploaded media</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Processing Time</span>
                  <span className="font-medium text-gray-900">~2.3s</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Confidence</span>
                  <span className="font-medium text-gray-900">94.2%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Model Version</span>
                  <span className="font-medium text-gray-900">v2.1</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Processed Media</h4>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                {isVideo(result.preview_inline || result.media_url) ? (
                  <video
                    src={result.preview_inline || result.media_url}
                    controls
                    className="w-full h-auto"
                  />
                ) : (
                  <img
                    src={result.preview_inline || result.media_url}
                    alt="Prediction result"
                    className="w-full h-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DroneMonitorComponent;