import React from "react";

const header = () => {
  return (
    <header className="flex justify-between border-b-4">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" />
        <h2>DuoFocus</h2>
      </div>
    </header>
  );
};

export default header;
