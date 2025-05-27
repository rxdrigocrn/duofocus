export default function DotNavigation({ currentIndex, setCurrentIndex }) {
  return (
    <div className="absolute bottom-6 flex justify-center gap-2">
      {[0, 1].map((i) => (
        <span
          key={i}
          onClick={() => setCurrentIndex(i)}
          className={`
            w-3 h-3 rounded-full cursor-pointer 
            transition-all duration-300 ease-in-out 
            hover:scale-[1.5] 
            ${i === currentIndex ? 'scale-[1.5] opacity-100' : 'opacity-50'} 
            ${i === 0 
              ? (i === currentIndex ? 'bg-red-400' : 'bg-gray-400') 
              : (i === currentIndex ? 'bg-blue-400' : 'bg-gray-400')
            }
          `}
        />
      ))}
    </div>
  )
}
