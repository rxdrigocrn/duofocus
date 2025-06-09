import React from "react";

function FeedbackText({insight}) {
  
  return (
    <div>
        <h3 className='text-xs text-[#D1D5DB]'>
          {insight}
        </h3>
    </div>
  )
}

export default FeedbackText