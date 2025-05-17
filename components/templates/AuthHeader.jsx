import React from 'react'
import TextLogo from '../shared/TextLogo'

const AuthHeader = ({ title, subtitle }) => {
    return (
        <div className="flex gap-3 flex-col register-header pb-10 text-[#0D112D]">
            <TextLogo />
            <h2 className="text-3xl font-bold">
                {title}
            </h2>
            <p className=" text-gray-600">{subtitle}</p>
        </div>)
}

export default AuthHeader