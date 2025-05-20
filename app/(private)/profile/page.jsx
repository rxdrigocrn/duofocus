import React from 'react'
import ProfileForm from '@/components/templates/ProfileForm'

const ProfilePage = () => {
    return (
        <div className="min-h-[calc(100vh-82px)] flex flex-col items-center justify-between py-10 px-4">

            <div className="mb-4 text-center  ">
                <h3 className="text-white text-2xl font-semibold">My Account</h3>
                <p className="text-[#6C8CD5] text-sm">Manage your personal information</p>
            </div>

            <div className="w-full max-w-[760px]">
                <ProfileForm />
            </div>

            <div className="text-center mt-6">
                <p className="text-gray-400">"Keep improving. One step at a time."</p>
            </div>

        </div>
    )
}

export default ProfilePage
