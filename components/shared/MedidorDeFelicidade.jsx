import React from 'react'

function MedidorDeFelicidade({ title, value }) {
  const titleLower = title.toLowerCase()

  const getGradient = () => {
    switch (titleLower) {
      case 'body':
        return 'from-[#FF6666] to-[#FF9999]'
      case 'mind':
        return 'from-[#6699FF] to-[#99BBFF]'
      case 'total':
      case 'overall':
        return 'from-[#6699FF] to-[#FF6666]'
      default:
        return 'from-gray-400 to-gray-600'
    }
  }

  const getTrendIconSrc = () => {
    if (titleLower === 'body') return '/ArrowUpRed.svg'
    return '/ArrowUpBlue.svg'
  }

  const getTrendTextColor = () => {
    return titleLower === 'body' ? 'text-[#FF6666]' : 'text-[#6699FF]'
  }

  const gradient = getGradient()
  const barWidth = `${value}%`

  return (
    <div className="flex items-center justify-between w-full mb-3">
      <span className="text-sm text-white">{title}</span>
      <div className="flex-1 mx-4 h-2.5 bg-[#1A1F5A] rounded-full relative overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
          style={{ width: barWidth }}
        />
      </div>
      <div className="flex items-center gap-1 text-sm font-medium">
        <img src={getTrendIconSrc()} className="w-4 h-4" />
        <span className={getTrendTextColor()}>{value}%</span>
      </div>
    </div>
  )
}

export default MedidorDeFelicidade
