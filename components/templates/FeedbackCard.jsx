import React from 'react'
import FeedbackTypeCard from '../shared/FeedbackTypeCard'


function FeedbackCard({title, value, content}) {
  return (
    <div className=' flex flex-col gap-5 max-w-6xl w-full bg-[#1A1F5A] h-auto rounded-xl text-white p-4'>
        <div className='flex justify-between'>
          <h3>{title}</h3>
          <h3>{value}</h3>
        </div>
      <div>{content}</div>
      


    </div>
  )
}

export default FeedbackCard