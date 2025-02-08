"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import Head from "next/head";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function RoseDay() {
  const [showMessage, setShowMessage] = useState(false);
  const [roses, setRoses] = useState([]);

  

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 5000);
  }, []);

  const handleScroll = () => {
    setRoses((prev) => [
      ...prev,
      { id: prev.length, left: Math.random() * 90 + "%" },
    ]);
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-black via-red-900 to-black text-white overflow-hidden flex flex-col items-center justify-center text-center"
      onScroll={handleScroll}
    >
      <Head>
        <title>Happy Rose Day</title>
      </Head>
      <nav className="absolute top-4 left-4">
        <Link href="/" className="text-pink-300 hover:text-pink-500 text-lg font-bold">
          Home
        </Link>
      </nav>
      <div className="mb-6 flex justify-center">
        <Heart className="text-red-500 w-20 h-20 animate-pulse drop-shadow-lg" />
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        {showMessage && (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-4xl font-extrabold text-pink-400 drop-shadow-lg"
          >
            Happy Rose Day, My Love! 🌹
            <br />
            <span className="text-2xl">Every rose in the world may wither, but my love for you will last forever.</span>
          </motion.h1>
        )}
      </div>

      {roses.map((rose) => (
        <motion.div
          key={rose.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 text-red-500 text-2xl animate-bounce"
          style={{ left: rose.left }}
        >
          🌹
        </motion.div>
      ))}
    </div>
  );
}