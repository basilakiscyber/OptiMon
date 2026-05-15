import { useState, useEffect } from "react";
import { PingResponse } from "@shared/api";

export default function Index() {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const fetchPing = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/ping");
      const data: PingResponse = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Error fetching from server");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPing();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Hello World</h1>
        <p className="text-gray-600 mb-6">
          Welcome to the Fusion Starter template. This is a production-ready
          full-stack React application.
        </p>

        <div className="bg-indigo-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700 mb-2">Server Response:</p>
          <p className="text-lg font-semibold text-indigo-600">
            {loading ? "Loading..." : message || "No response"}
          </p>
        </div>

        <button
          onClick={fetchPing}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          {loading ? "Fetching..." : "Fetch Server"}
        </button>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-3">Features:</p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>✓ React 18 + TypeScript</li>
            <li>✓ React Router 6 SPA routing</li>
            <li>✓ Express server integration</li>
            <li>✓ TailwindCSS styling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
