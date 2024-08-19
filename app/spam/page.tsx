"use client"
import React, { useRef, useEffect } from 'react';

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Unmute the video
      videoRef.current.volume = 1; // Set the volume to maximum
      videoRef.current.play().catch(error => console.error('Play failed:', error));
    }
  };

  useEffect(() => {
    handlePlay(); // Call handlePlay when the component mounts
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black">
      <video
        ref={videoRef}
        src="/Nyan-Cat.mp4"
        autoPlay
        loop
        className="w-full h-full object-cover"
        playsInline
      ></video>
    </div>
  );
}
