"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { Typewriter } from "react-simple-typewriter";

export default function Propose() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    if (accepted) {
      setMusicPlaying(true);
    }
  }, [accepted]);

  const handleNoHover = () => {
    const maxX = window.innerWidth / 3;
    const maxY = window.innerHeight / 3;
    const randomX = Math.random() * maxX * 2 - maxX;
    const randomY = Math.random() * maxY * 2 - maxY;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const toggleMusic = () => {
    setMusicPlaying((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-500 via-red-400 to-purple-600 p-4">
      {!accepted ? (
        <>
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg glow-text text-center mb-8">
            Will you be my Valentine? 💖
          </h1>
          <div className="flex gap-6">
            <button
              className="bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-110"
              onClick={() => setAccepted(true)}
            >
              Yes 💕
            </button>
            <motion.button
              className="bg-white text-red-500 px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold rounded-full shadow-lg cursor-pointer relative"
              animate={{ x: noButtonPos.x, y: noButtonPos.y }}
              transition={{ type: "spring", stiffness: 200 }}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
            >
              No 💔
            </motion.button>
          </div>
        </>
      ) : (
        <>
          <Confetti numberOfPieces={window.innerWidth > 768 ? 300 : 100} />
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleMusic}
              className="bg-white text-red-500 px-4 py-2 text-sm font-semibold rounded-full shadow-lg"
            >
              {musicPlaying ? "Pause Music ⏸️" : "Play Music ▶️"}
            </button>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center glow-text px-4">
            <Typewriter
              words={[
                "Thank you for making me the luckiest guy on the planet! 💖🎆",
              ]}
              loop={1}
              cursor={false}
              typeSpeed={50}
            />
            <br />
            <Typewriter
              words={["I might just die of happiness."]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              delaySpeed={5000}
            />
          </h1>

          {musicPlaying && (
            <iframe
              className="hidden"
              src="https://www.youtube.com/embed/jmpUP1MaQ9Q?autoplay=1&loop=1&playlist=jmpUP1MaQ9Q"
              allow="autoplay"
            />
          )}
        </>
      )}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
        <div className="animate-float text-white text-4xl sm:text-6xl">❤️</div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 3s infinite ease-in-out;
        }
        .glow-text {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
}
