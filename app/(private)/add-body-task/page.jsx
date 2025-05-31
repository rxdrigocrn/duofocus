'use client'
import React from 'react';
import TaskForm from '@/components/templates/TaskForm';
import { toast } from 'react-toastify';
import { createItem } from '@/services/apiServices';

const AddBodyTaskPage = () => {

    const handleSubmit = async (task) => {
        try {
            await createItem("/tasks", task);
            toast.success("Tarefa criada com sucesso!");
        } catch (error) {
            toast.error("Erro ao criar tarefa.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-82px)] bg-[url('/gymBg.svg')] bg-cover bg-center">

            <TaskForm
                type="CORPO"
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default AddBodyTaskPage;

