import React from 'react'
import Image from 'next/image'

const TextLogo = () => {
    return (
        <div className='flex items-center gap-2'>
            <Image src="/logo.svg" alt="Logo" width={47} height={47} />
            <h1 className="text-2xl font-bold text-[#0D112D]">DuoFocus</h1>
        </div>
    )
}

export default TextLogo