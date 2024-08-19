"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Button clicked");
    router.push("/spam");
  };

  return (
    <div className="h-screen bg-neutral-900 flex flex-col items-center justify-center relative w-full bg-cover z-10"> {/* Increased z-index for main container */}
      <h2 className="relative flex-col md:flex-row z-20 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        <span>@ByteCode Official Website</span>
        <span className="text-white text-lg font-thin">x</span>
        <span>Coming Soon !!</span>
      </h2>
      <div className="flex items-center justify-center bg-transparent z-30"> {/* Increased z-index for button */}
        <button
          onClick={handleClick}
          className="relative p-2 rounded-lg border-4 border-transparent bg-yellow-500 hover:bg-red-500 overflow-hidden animate-blink"
          title="Click at Your Own Risk">
          <div className="text-black z-10">
            ⚠️ Danger ⚠️
          </div>
        </button>
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 100% {
            background-color: red;
          }
          50% {
            background-color: yellow;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
      <div className="absolute inset-0 z-0"> {/* Background elements moved behind */}
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
}