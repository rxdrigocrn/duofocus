'use client'
import React from 'react'

const ModalDeletarConta = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 ">
            <div className="bg-[#202C4F] text-white max-w-xl w-full p-6 rounded-lg shadow-lg ">
                <p className="text-sm leading-relaxed mb-6">
                    Are you sure you want to delete your account? <br />
                    By proceeding, all your progress and information will be permanently
                    lost and cannot be recovered. <br />
                    This action is irreversible. Do you want to continue?
                </p>
                <div className="flex justify-between gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 w-full py-2 border border-white text-white rounded-md hover:bg-white hover:text-[#111C44] transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 w-full bg-[#FF6B6B] text-white rounded-md hover:bg-[#ff4c4c] transition-all"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalDeletarConta
