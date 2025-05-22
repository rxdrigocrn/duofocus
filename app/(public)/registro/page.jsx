'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '@/components/shared/TextInput'
import AuthTemplate from '@/components/templates/AuthTemplate'
import AuthHeader from '@/components/templates/AuthHeader'
import { redirect } from 'next/navigation'

const RegisterPage = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log('Register data:', data)
        redirect('/login')
    }

    return (
        <AuthTemplate title="Cadastro">
            <AuthHeader title="Welcome" subtitle="Please enter your details" />
            <form className="space-y-6 mb-10" onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    name="name"
                    label="Name"
                    type="text"
                    placeholder="Your full name"
                    register={register}
                />
                <TextInput
                    name="email"
                    label="E-mail"
                    type="email"
                    placeholder="youremail@example.com"
                    register={register}
                />
                <TextInput
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    register={register}
                />
                <p className="text-sm text-gray-600">
                    Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.
                </p>
                <button
                    type="submit"
                    className="w-full bg-[#6699FF] text-white py-3 rounded-lg hover:bg-[#4466FF] transition cursor-pointer"
                >
                    Sign Up
                </button>

            </form>

            <div className="flex flex-col items-center justify-center">
                <p className="text-gray-600">
                    Already have an account?
                </p>
                <a href="/login" className="text-cyan-600 hover:underline ml-2">
                    Login
                </a>
            </div>
        </AuthTemplate>
    )
}

export default RegisterPage

