import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";

export default function FaceExpression() {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Initializing camera...");
  const [cameraReady, setCameraReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const setup = async () => {
      await init({ landmarkerRef, videoRef, streamRef });
      if (mounted) {
        const ready = Boolean(videoRef.current?.srcObject);
        setCameraReady(ready);
        setExpression(ready ? "Camera is ready." : "Camera is not available.");
      }
    };

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

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "12px",
        textAlign: "center",
      }}
    >
      <video
        ref={videoRef}
        style={{
          width: "min(92vw, 460px)",
          borderRadius: "12px",
          border: "1px solid #334155",
          backgroundColor: "#0f172a",
        }}
        autoPlay
        muted
        playsInline
      />
      <h2>{expression}</h2>
      <button
        disabled={!cameraReady}
        onClick={() => {
          detect({ landmarkerRef, videoRef, setExpression });
        }}
        style={{
          padding: "10px 16px",
          borderRadius: "8px",
          border: "none",
          background: cameraReady ? "#06b6d4" : "#334155",
          color: "#020617",
          fontWeight: 600,
          cursor: cameraReady ? "pointer" : "not-allowed",
        }}
      >
        Detect expression
      </button>
    </div>
  );
}
