"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const messages = [
    "Monitor, Improve, Conquer!",
    "Cultivate habits, harvest results!",
    "The future you want starts with the habits you build today!"
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  return (
    <>
      <header className="fixed top-0 left-0 w-full px-48 py-10">
        <h1 className="text-xl font-bold text-white">DuoFocus</h1>
      </header>

      <div className="flex min-h-screen flex-col items-center justify-center bg-[linear-gradient(90deg,#061131_0%,#0E1E4D_100%)]">
        <main className="flex flex-col gap-[32px] items-center text-[#E5E7EB] w-full">
          <div className="flex flex-col items-center">
            <Image
              src="/logo.svg"
              alt="DuoFocus logo"
              width={200}
              height={200}
              priority
            />

            <h3 className="text-2xl font-bold mt-5 text-center w-4/5">
              {messages[currentMessageIndex]}
            </h3>

            <p className="text-center mt-4 text-xs  w-1/2">
              DuoFocus helps you to stay productive and motivated through monitoring your habits.
            </p>

            <div className="flex gap-2 mt-8">
              {messages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMessageIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full shadow-md cursor-pointer  transition-colors duration-200 ${index === currentMessageIndex ? "bg-indigo-400" : "bg-white"
                    } hover:bg-indigo-200`} 
                  aria-label={`Selecionar mensagem ${index + 1}`}
                />
              ))}
            </div>

          </div>

          <div className="flex flex-col gap-4 w-4/5 max-w-screen-sm">
            <button className="block bg-indigo-500 text-white rounded-[8px] py-2">
              Get Started
            </button>
            <button className="bg-white text-indigo-500 rounded-[8px] py-2 border">
              Login
            </button>
          </div>
        </main>

        <footer className="fixed bottom-0 left-0 w-full flex flex-col items-center justify-center py-5">
          <p className="text-white text-xs">
            By continuing, you agree to our Terms & Privacy Policy
          </p>
          <p className="text-white text-xs">© 2025 DuoFocus</p>
        </footer>
      </div>
    </>
  );
}
