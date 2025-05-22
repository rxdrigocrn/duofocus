import React from 'react'
import { Share2 } from 'lucide-react'
import { px } from 'framer-motion'

function ShareProgressButton() {
  return (
    <div>
        <button className='flex justify-center items-center gap-2 bg-[#1A1F5A] p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#6699FF]'>

        <Share2 size={18} color='#ffffff'/>
        <h3 className='text-white text-md'>
            Share Progress
        
        </h3>
        </button>
    </div>
  )
}

export default ShareProgressButton