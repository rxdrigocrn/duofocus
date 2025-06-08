'use client';
import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from '../shared/TextInput';
import { useForm } from 'react-hook-form';
import { Pencil } from 'lucide-react';
import ModalDeletarConta from '../shared/ModalDeleteAccount';
import { updateItem } from '@/services/apiServices';

const schema = z.object({
    nome: z.string().min(2, 'Name is obrigatory'),
    email: z.string().email('Invalid email'),
});

const ProfileForm = ({ user }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            nome: '',
            email: '',
        },
    });

    const [showModal, setShowModal] = useState(false);
    const [editName, setEditName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);

    useEffect(() => {
        if (user) {
            reset({
                nome: user.nome,
                email: user.email,
            });
        }
    }, [user, reset]);

    const handleDelete = () => {
        console.log('Account deleted!');
        setShowModal(false);
    };

    const handleUpdate = async (data) => {
        try {
            await updateItem(`/users`, user?.id, data);
            console.log('User updated successfully:', data);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const onSubmit = (data) => {
        if (editName || editEmail) {
            handleUpdate(data);
            setEditName(false);
            setEditEmail(false);
        }
    };


    return (
        <div className="w-full max-w-[760px] max-h-[680px] mx-auto bg-[#202C4F] text-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
                <img
                    src="https://via.placeholder.com/60"
                    alt="Avatar"
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#6699FF]"
                />
                <div>
                    <h2 className="text-xl font-semibold">{user.nome}</h2>
                    <p className="text-sm text-[#6699FF]">Premium Member</p>
                </div>
            </div>

            <hr className="border-[#2A3964] mb-6" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="relative">
                    <TextInput
                        label="Full Name"
                        name="nome"
                        placeholder="Seu nome"
                        register={register}
                        readOnly={!editName}
                        error={errors.nome?.message}
                    />
                    <button
                        type="button"
                        onClick={() => setEditName(!editName)}
                        className="absolute top-9 right-3 text-[#6C8CD5] cursor-pointer"
                    >
                        <Pencil size={18} />
                    </button>
                </div>

                <div className="relative">
                    <TextInput
                        label="Email Address"
                        name="email"
                        placeholder="Your email"
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

                {(editName || editEmail) && (
                    <div className="flex gap-4 pt-4">
                        <button
                            type="submit"
                            className="flex-1 cursor-pointer bg-[#FF6666] hover:bg-[#FF4444] text-white rounded-md py-2 transition-all"
                        >
                            Save Changes
                        </button>
                        <button
                            type="button"
                            className="flex-1 cursor-pointer border border-[#6699FF] text-[#6699FF] rounded-md py-2 hover:bg-[#6699FF] hover:text-[#FFFFFF] transition-all"
                            onClick={() => {
                                reset({ nome: user.nome, email: user.email });
                                setEditName(false);
                                setEditEmail(false);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                )}


                <hr className="border-[#2A3964] mt-6" />
            </form>

            <div className="text-center mt-6">
                <button
                    onClick={() => setShowModal(true)}
                    className="text-red-400 cursor-pointer text-sm hover:underline"
                >
                    Delete Account
                </button>
            </div>

            <ModalDeletarConta
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleDelete}
            />
        </div>
    );
};

export default ProfileForm;
