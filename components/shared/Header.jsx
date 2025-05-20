import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-4 py-3 md:px-8 md:py-4" style={{ borderBottom: '3px solid #1B284E' }}>
      
        <a href="/home" className="flex items-center mb-4 md:mb-0 cursor-pointer">
          <img src="/logo.svg" alt="Logo" className="h-8 md:h-[47px] mr-2 md:mr-[10px]" />
          <h1 className="text-xl md:text-2xl font-bold text-white">DuoFocus</h1>
        </a>

      <div className="flex justify-center gap-4 md:gap-8">
        <a href="#" className="flex items-center gap-1 md:gap-2">
          <h2 className="text-white text-sm md:text-[16px]">
            Feedback
          </h2>
          <img
            src="/feedback.svg"
            alt="feedback icon"
            className="w-8 h-6 md:w-[43.65px] md:h-[32.37px]"
          />
        </a>
        <a href="/profile" className="flex items-center gap-1 md:gap-2">
          <h2 className="text-white text-sm md:text-[16px]">
            My Account
          </h2>
          <img
            src="/account.svg"
            alt="account icon"
            className="w-7 h-6 md:w-[38px] md:h-[32px]"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;