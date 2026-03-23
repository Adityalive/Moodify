import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";

export default function FaceExpression({
  onClick = () => {},
  compact = false,
}) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function setup() {
      try {
        await init({ landmarkerRef, videoRef, streamRef });
        if (!mounted) {
          return;
        }
        setIsReady(true);
      } catch (error) {
        console.error("Expression setup failed:", error);
      }
    }

    setup();

    return () => {
      mounted = false;
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }

      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  function handleClick() {
    setIsDetecting(true);
    const currentExpression = detect({ landmarkerRef, videoRef, setExpression });
    if (currentExpression) {
      onClick(currentExpression);
    }
    setTimeout(() => {
      setIsDetecting(false);
    }, 300);
  }

  return (
    <div className="bg-[#151515] border border-white/5 rounded-2xl p-5 shadow-lg flex-1 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-orange-500 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          masks
        </span>
        <h2 className="text-white font-bold text-lg">Mood Detector</h2>
      </div>
      <p className="text-gray-400 text-sm mb-4">
        Point your camera — we'll find songs that match your vibe
      </p>

      {/* Video Container */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/50 border border-white/5 mb-4">
        <video
          ref={videoRef}
          className="w-full h-full object-cover select-none"
          autoPlay
          muted
          playsInline
        />
        {!isReady && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
            Starting camera...
          </div>
        )}
        
        {/* Placeholder / Error / Status over video if needed, keeping it clean for now */}
      </div>

      <div className="flex flex-col items-center mt-auto gap-4">
        {/* Detected Expression Badge (Only show if there is an expression) */}
        <div className={`px-5 py-1.5 rounded-full border border-white/20 text-gray-300 text-sm font-medium transition-opacity ${expression ? 'opacity-100' : 'opacity-0'}`}>
          {expression || "waiting"}
        </div>

        {/* Action Button */}
        <button
          onClick={handleClick}
          disabled={!isReady || isDetecting}
          className="w-full bg-[#f9570c] hover:bg-[#e04e0a] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-base py-3.5 rounded-xl transition-colors shadow-[0_4px_20px_rgba(249,87,12,0.3)]"
        >
          {isDetecting ? "Detecting..." : "Detect My Mood"}
        </button>
      </div>
    </div>
  );
}
