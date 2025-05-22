import React from 'react'

function FeedbackTypeCard({ icon, title, value, trendIcon, color }) {
  return (
    <div className='flex flex-col justify-between bg-[#262B6A] w-[49.5%] rounded-md p-4'>
      <div className='flex justify-between items-start'>
        <div className='flex items-center gap-2'>
          {icon}
          <h4 className='text-sm text-white'>{title}</h4>
        </div>
      </div>
      <div className='flex justify-between items-center mt-6'>
        <p className={`text-xl font ${color}`}>{value}</p>
        {trendIcon && <span className={color}>{trendIcon}</span>}
      </div>
    </div>
  )
}

export default FeedbackTypeCard
