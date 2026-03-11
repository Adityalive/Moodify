export async function init({ landmarkerRef, videoRef, streamRef }) {
  if (!videoRef?.current) return;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    streamRef.current = stream;
    videoRef.current.srcObject = stream;
    await videoRef.current.play();

    // Placeholder for a future face-landmarker instance.
    landmarkerRef.current = null;
  } catch (error) {
    console.error("Camera initialization failed:", error);
  }
}

export async function detect({ landmarkerRef, videoRef, setExpression }) {
  if (!videoRef?.current?.srcObject) {
    setExpression("Camera is not ready.");
    return;
  }

  if (!landmarkerRef?.current) {
    setExpression("Face model not loaded yet.");
    return;
  }

  try {
    // Replace with real landmarker inference when model setup is added.
    setExpression("Detection completed.");
  } catch (error) {
    console.error("Detection failed:", error);
    setExpression("Detection failed.");
  }
}
