'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '@/components/shared/TextInput'
import AuthTemplate from '@/components/templates/AuthTemplate'
import AuthHeader from '@/components/templates/AuthHeader'
import { API_BASE_URL } from '@/lib/axios/api'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';


import axios from 'axios'

const RegisterPage = () => {
    const { register, handleSubmit } = useForm()
    const router = useRouter()

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(`${API_BASE_URL}/auth/register`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (res.status !== 200) {
                toast.error("Registration failed. Please check your details.");
                return;
            }
            toast.success("Registration successful! Please log in.");
            console.log(res.data);
            router.push('/login');
        } catch (err) {
            toast.error("Registration failed. Please check your details.");
            console.log(err);
        }
    }

    return (
        <AuthTemplate title="Cadastro">
            <AuthHeader title="Welcome" subtitle="Please enter your details" />
            <form className="space-y-6 mb-10" onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    name="nome"
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
                    name="senha"
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

            <div className="flex flex-col items-center justify-center mt-[-14px]">
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

