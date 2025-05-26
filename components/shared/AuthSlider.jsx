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
    <div className="relative w-[90%] h-[40%] transition-all duration-700 ease-in-out flex items-center justify-center">
      <div className="w-full h-full">{slides[currentIndex]}</div>
      <DotNavigation currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  )
}
