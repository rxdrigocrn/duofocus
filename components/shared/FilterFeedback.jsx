import React, { useState } from 'react'

const FilterFeedback = () => {
    const [activeTab, setActiveTab] = useState('weekly')
    return (
    <div className='flex gap-3 bg-[#1A1F5A] p-1 rounded-lg'>
            <button 
                onClick={() => setActiveTab('weekly')}
                className={`px-5 py-2 rounded-lg transition-colors duration-300 text-white cursor-pointer
                ${activeTab === 'weekly' ? 'bg-[#6699FF]' : 'bg-transparent'}`}
            >

                <h3>Weekly</h3>
            </button>
            
           
        </div>
  )
}

export default FilterFeedback