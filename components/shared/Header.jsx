import React from "react";

const header = () => {
  return (
    <header className="flex justify-between" style={{borderBottom: '3px solid #1B284E'}}>
      <div className="flex items-center mx-[4rem] my-[1rem]" >
        <img src="/logo.svg" alt="Logo" className="h-[47px] mr-[10px]" />
        <h1 className="text-2xl font-bold text-white">DuoFocus</h1>
      </div>
      <div className="flex justify-around mx-[4rem] my-[1rem] gap-8">
        <a href="#" className="flex items-center gap-2">
          <h2 className="text-white text-[16px]">
            Feedback
          </h2>
          <img src="/feedback.svg" alt="feedback icon" className="w-[43.65px] h-[32.37px]"/>
        </a>
        <a href="#" className="flex items-center gap-2">
          <h2 className="text-white text-[16px]">
            My Account
          </h2>
          <img src="/account.svg" alt="account icon" className="w-[38px] h-[32px]"/>
        </a>
      </div>
    </header>
  );
};

export default header;
