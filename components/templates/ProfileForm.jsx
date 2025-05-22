'use client'
import React, { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import TextInput from '../shared/TextInput'
import { useForm } from 'react-hook-form'
import { Pencil, Eye, EyeOff } from 'lucide-react'
import ModalDeletarConta from '../shared/ModalDeleteAccount'

const schema = z.object({
    fullName: z.string().min(2, 'Nome é obrigatório'),
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'Mínimo de 6 caracteres'),
})

const ProfileForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            fullName: 'Erfon Spanos',
            email: 'erfonspanos@gmail.com',
            password: '********',
        },
    })
    const [showModal, setShowModal] = useState(false)
    const [editName, setEditName] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false)


    const handleDelete = () => {
        console.log('Conta deletada!')
        setShowModal(false)
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="w-full max-w-[760px] max-h-[680px] mx-auto bg-[#202C4F] text-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
                <img
                    src="https://via.placeholder.com/60"
                    alt="Avatar"
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#6699FF]"
                />
                <div>
                    <h2 className="text-xl font-semibold">Erfon Spanos</h2>
                    <p className="text-sm text-[#6699FF]">Premium Member</p>
                </div>
            </div>

            <hr className="border-[#2A3964] mb-6" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="relative">
                    <TextInput 
                        label="Full Name"
                        name="fullName"
                        placeholder="Seu nome"
                        register={register}
                        readOnly={!editName}
                        error={errors.fullName?.message}
                    />
                    <button
                        type="button"
                        onClick={() => setEditName(!editName)}
                        className="absolute top-9 right-3 text-[#6C8CD5]  cursor-pointer"
                    >
                        <Pencil size={18} />
                    </button>
                </div>

                <div className="relative">
                    <TextInput
                        label="Email Address"
                        name="email"
                        placeholder="Seu email"
                        register={register}
                        readOnly={!editEmail}
                        error={errors.email?.message}
                    />
                    <button
                        type="button"
                        onClick={() => setEditEmail(!editEmail)}
                        className="absolute top-9 right-3 text-[#6C8CD5] cursor-pointer"
                    >
                        <Pencil size={18} />
                    </button>
                </div>

                <div className="relative">
                    <TextInput
                        label="Password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Sua senha"
                        register={register}
                        error={errors.password?.message}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-9 right-3 text-[#6C8CD5]  cursor-pointer"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>

                <div className="flex gap-4 pt-4">
                    <button
                        type="submit"
                        className="flex-1  cursor-pointer bg-[#FF6666] hover:bg-[#FF4444] text-white rounded-md py-2 transition-all"
                    >
                        Save Changes
                    </button>
                    <button
                        type="button"
                        className="flex-1  cursor-pointer border border-[#6699FF] text-[#6699FF] rounded-md py-2 hover:bg-[#6699FF] hover:text-[#FFFFFF] transition-all"
                    >
                        Cancel
                    </button>
                </div>
                <hr className="border-[#2A3964] mt-6" />
            </form>

            <div className="text-center mt-6">
                <button onClick={() => setShowModal(true)}
                    className="text-red-400  cursor-pointer text-sm hover:underline">
                    Delete Account
                </button>
            </div>

            <ModalDeletarConta
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleDelete}
            />
        </div>
    )
}

export default ProfileForm
