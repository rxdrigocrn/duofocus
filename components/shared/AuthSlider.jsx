'use client'
import { useState, useEffect } from 'react'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import DotNavigation from './DotNavigation'

const slides = [<Slide1 key="slide1" />, <Slide2 key="slide2" />]

export default function AuthSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-[90%] h-[40%] flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute w-full h-full transition-opacity duration-800 ease-in-out
            ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
        >
          {slide}
        </div>
      ))}
      <DotNavigation currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  )
}
