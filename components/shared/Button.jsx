import React from 'react'

function Button({ text, icon, bgColor, iconSize = 'w-8 h-8', onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full max-w-[350px] px-8 sm:px-16 md:px-36 py-4 ${bgColor} cursor-pointer text-white rounded-xl flex items-center justify-center gap-3 shadow-md hover:opacity-90 transition hover:scale-102 duration-100 `}
    >
      <img src={icon} alt={`${text} icon`} className={iconSize} />
      <span className="font-semibold text-xl">{text}</span>
    </button>
  );
}

export default Button