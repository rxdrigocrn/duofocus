'use client'
import React from 'react';
import TaskForm from '@/components/templates/TaskForm';
import { toast } from 'react-toastify';
import { createItem } from '@/services/apiServices';
import { useRouter } from 'next/navigation';

const AddBodyTaskPage = () => {
    const router = useRouter();

    const handleSubmit = async (task) => {
        try {
            const response = await createItem("/tasks", task);


            toast.success("Tarefa criada com sucesso!");
        } catch (error) {
            toast.error("Erro ao criar tarefa.");
        }
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-82px)] bg-[url('/mindBg.svg')] bg-cover bg-center relative p-4">

            <button
                type="button"
                onClick={() => router.push('/home')}
                className="absolute top-32 right-2/3 cursor-pointer transform -translate-x-[calc(100%+2rem)] flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-gray-700 bg-white/80 backdrop-blur-sm shadow-md hover:bg-white hover:shadow-lg transition-all duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Voltar
            </button>
            <TaskForm
                type="CORPO"
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default AddBodyTaskPage;

