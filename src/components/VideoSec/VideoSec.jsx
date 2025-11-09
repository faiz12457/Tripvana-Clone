import React, { useState, useRef } from "react";

function VideoSec() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - left, y: e.clientY - top });
  }

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying((prev)=>!prev);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full bg-gray-100 overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/mountain.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating Play button */}
      <PlayBtn position={position} onClick={togglePlay} isPlaying={isPlaying} />
    </div>
  );
}

export default VideoSec;

function PlayBtn({ position, onClick, isPlaying }) {
  const { x, y } = position;

  return (
    <div
      style={{
        top: y - 64,
        left: x - 64,
      }}
      onClick={onClick}
      className="absolute size-32 rounded-full z-50 cursor-pointer transition-transform duration-150 ease-out"
    >
      <img
        src={!isPlaying ? "/pauseIcon.webp" : "/playIcon.webp"} 
        alt="Play Button"
        className="size-full rounded-full object-cover"
      />
    </div>
  );
}
