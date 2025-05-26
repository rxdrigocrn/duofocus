export default function DotNavigation({ currentIndex, setCurrentIndex }) {
  return (
    <div className="absolute bottom-6 flex justify-center gap-2">
      {[0, 1].map((i) => (
        <span
          key={i}
          onClick={() => setCurrentIndex(i)}
          className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
            i === currentIndex
              ? i === 0
                ? 'bg-red-400'
                : 'bg-blue-400'
              : 'bg-gray-400'
          }`}
        />
      ))}
    </div>
  )
}
