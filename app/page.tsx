"use client";
import React from "react";
import { useRouter } from "next/navigation"; 
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Button clicked");
    router.push("/spam");
  };

  return (
    <div className="h-screen bg-neutral-900 flex flex-col items-center justify-center relative w-full bg-cover z-10">
      {/* Top-right button */}
      <div className="absolute top-4 right-4 z-30">
        <button 
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={() => window.open("https://discord.gg/GCQZMuSu", "_blank")}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Join our Discord
          </span>
        </button>
      </div>
      
      <h2 className="relative flex-col md:flex-row z-20 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        <span>@ByteCode Official Website</span>
        <span className="text-white text-lg font-thin">x</span>
        <span>Coming Soon !!</span>
      </h2>
      
      {/* Added margin-top to create gap */}
      <div className="flex items-center justify-center bg-transparent z-30 mt-8"> 
        <button
          onClick={handleClick}
          className="relative p-2 rounded-lg border-4 border-transparent bg-yellow-500 hover:bg-red-500 overflow-hidden animate-blink"
          title="Click at Your Own Risk">
          <div className="z-10 font-bold text-lg transition-colors duration-500 ease-in-out">
            ⚠️ DANGER! ⚠️
          </div>
        </button>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% {
            background-color: red;
            color: white;
          }
          50% {
            background-color: yellow;
            color: black;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
      
      <div className="absolute inset-0 z-0">
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
}
