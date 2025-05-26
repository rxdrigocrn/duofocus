"use client";
import React from "react";
import AuthSlider from "../shared/AuthSlider";

const AuthTemplate = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-[#0D112D] flex items-center justify-center px-4">
      <div className="flex w-full max-w-[95%] h-[95vh] md:w-[1600px] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-2/5 p-10 flex flex-col ">{children}</div>

        <div
          className="w-3/5 hidden md:flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/fundo.png')",
            height: "100%", 
          }}
        >
          <div className="w-full flex items-center justify-center h-full">
            <AuthSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
