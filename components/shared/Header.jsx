import React from "react";

const header = () => {
  return (
    <header className="flex justify-between border-b-2">
      <div className="flex items-center mx-[4rem] my-[1rem]" >
        <img src="/logo.svg" alt="Logo" className="h-[47px]" />
        <h2>DuoFocus</h2>
      </div>
    </header>
  );
};

export default header;
