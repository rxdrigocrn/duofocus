'use client'
import React from 'react'

const AuthTemplate = ({ title, children }) => {
    return (
        <div className="min-h-screen bg-[#0D112D] flex items-center justify-center px-4">
            <div className="flex w-full h-[800px] md:w-[1600px] bg-white rounded-lg shadow-lg overflow-hidden">

                <div className="w-full md:w-2/5 p-10 flex flex-col ">
                    {children}
                </div>

                <div
                    className="w-3/5 bg-cover bg-center hidden md:block"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/fundo.png')"
                    }}
                />


            </div>
        </div>
    )
}

export default AuthTemplate
