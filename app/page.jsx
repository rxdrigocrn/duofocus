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
      <header className="fixed top-0 left-0 w-full px-24 py-5">
        <h1 className="text-xl font-bold text-white">DuoFocus</h1>
      </header>

      <div className="flex min-h-screen flex-col items-center justify-center bg-[linear-gradient(90deg,#061131_0%,#0E1E4D_100%)]">
        <main className="flex flex-col gap-[32px] items-center text-[#E5E7EB] w-full">
          <div className="flex flex-col items-center">
            <Image
              src="/logo.svg"
              alt="DuoFocus logo"
              width={180}
              height={180}
              priority
            />

            <h3 className="text-2xl font-bold mt-4 text-center w-4/5">
              {messages[currentMessageIndex]}
            </h3>

            <div className="flex gap-2 mt-2">
              {messages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMessageIndex(index)}
                  className={`w-2 h-2 rounded-full shadow-md cursor-pointer  transition-colors duration-200 ${index === currentMessageIndex ? "bg-blue-400" : "bg-white"
                    } hover:bg-blue-200`} 
                  aria-label={`Selecionar mensagem ${index + 1}`}
                />
              ))}
            </div>

            <p className="text-center mt-4 text-xs  w-1/2">
              DuoFocus helps you to stay productive and motivated through monitoring your habits.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-4/5 max-w-sm">
            <button className="block bg-blue-500 text-white rounded py-2">
              Get Started
            </button>
            <button className="bg-white text-blue-500 rounded py-2">
              Login
            </button>
          </div>
        </main>

        <footer className="fixed bottom-0 left-0 w-full flex flex-col items-center justify-center py-5">
          <p className="text-white text-xs">
            By continuing, you agree to our Terms & Privacy Policy
          </p>
          <p className="text-white text-xs">© 2023 DuoFocus</p>
        </footer>
      </div>
    </>
  );
}
