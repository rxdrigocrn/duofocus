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
                    label="Nome"
                    type="text"
                    placeholder="Seu nome completo"
                    register={register}
                />
                <TextInput
                    name="email"
                    label="E-mail"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    register={register}
                />
                <TextInput
                    name="password"
                    label="Senha"
                    type="password"
                    placeholder="••••••••"
                    register={register}
                />
                <p className="text-sm text-gray-600">
                    A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial.
                </p>
                <button
                    type="submit"
                    className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition"
                >
                    Criar Conta
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

