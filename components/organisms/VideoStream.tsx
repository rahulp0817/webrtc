"use client";

import useLocalMedia from "@/lib/webrtc/useLocalMedia";
import { useEffect, useRef } from "react";

export const VideoStream = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { stream, loading, error } = useLocalMedia();

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  if (loading) return <p>Requesting camera access…</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ width: "500px", borderRadius: "8px" }}
      />
    </div>
  );
};
