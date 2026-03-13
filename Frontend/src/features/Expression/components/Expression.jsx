import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";

export default function FaceExpression({ onClick = () => { } }) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Getting camera ready...");
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
        setExpression("Camera is live. Tap below to detect your mood.");
      } catch (error) {
        console.error("Expression setup failed:", error);
        if (mounted) {
          setExpression("Unable to start the camera or face model.");
        }
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
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background:
          "radial-gradient(circle at top, #fde68a 0%, #fb7185 35%, #0f172a 100%)",
      }}
    >
      <div
        style={{
          width: "min(100%, 960px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          padding: "28px",
          borderRadius: "28px",
          background: "rgba(15, 23, 42, 0.86)",
          boxShadow: "0 24px 80px rgba(15, 23, 42, 0.35)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "16px",
            color: "#f8fafc",
          }}
        >
          <span
            style={{
              alignSelf: "flex-start",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(255, 255, 255, 0.14)",
              color: "#fde68a",
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Mood Camera
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(2rem, 4vw, 3.6rem)",
              lineHeight: 1,
            }}
          >
            Detect your expression in one tap
          </h1>
          <p
            style={{
              margin: 0,
              color: "rgba(226, 232, 240, 0.82)",
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            Let the camera read your face, then use that mood to drive the next
            playlist or recommendation flow.
          </p>
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "18px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div
              style={{
                marginBottom: "8px",
                color: "#93c5fd",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Current status
            </div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#f8fafc",
              }}
            >
              {expression}
            </div>
          </div>
          <button
            onClick={handleClick}
            disabled={!isReady || isDetecting}
            style={{
              width: "fit-content",
              padding: "14px 24px",
              border: "none",
              borderRadius: "999px",
              background: isReady
                ? "linear-gradient(135deg, #f59e0b, #fb7185)"
                : "rgba(148, 163, 184, 0.35)",
              color: "#0f172a",
              fontSize: "1rem",
              fontWeight: 800,
              letterSpacing: "0.01em",
              cursor: !isReady || isDetecting ? "not-allowed" : "pointer",
              boxShadow: isReady
                ? "0 14px 30px rgba(251, 113, 133, 0.28)"
                : "none",
              transition: "transform 180ms ease, box-shadow 180ms ease",
            }}
          >
            {isDetecting ? "Detecting..." : "Detect Expression"}
          </button>
        </div>

        <div
          style={{
            position: "relative",
            minHeight: "320px",
            padding: "14px",
            borderRadius: "28px",
            background: "linear-gradient(180deg, #1e293b, #020617)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <video
            ref={videoRef}
            style={{
              width: "100%",
              height: "100%",
              minHeight: "320px",
              objectFit: "cover",
              borderRadius: "20px",
              backgroundColor: "#020617",
            }}
            autoPlay
            muted
            playsInline
          />
          <div
            style={{
              position: "absolute",
              left: "28px",
              right: "28px",
              bottom: "28px",
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              padding: "12px 14px",
              borderRadius: "16px",
              background: "rgba(15, 23, 42, 0.66)",
              color: "#f8fafc",
              fontSize: "0.95rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <span>{isReady ? "Camera Ready" : "Starting Camera"}</span>
            <span>{isReady ? "Live Preview" : "Please wait"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
