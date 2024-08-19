
"use client"
import React, { useEffect, useRef } from 'react';

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 1.0; // Set volume to full
      videoRef.current.play().catch(error => {
        console.error('Auto-play was prevented:', error);
        // Optionally, handle the error by showing a play button or mute the video and retry autoplay
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black">
      <video
        ref={videoRef}
        src="/Nyan-Cat.mp4"
        autoPlay
        loop
        muted
        controls
        className="w-full h-full object-cover"
        playsInline
        onError={(e) => console.error('Error playing video:', e.currentTarget.error)}
      ></video>
    </div>
  );
}
