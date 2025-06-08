'use client'
import React from 'react';
import TaskForm from '@/components/templates/TaskForm';
import { toast } from 'react-toastify';

const AddBodyTaskPage = () => {
    const handleSubmit = async (task) => {
        try {
            const token = sessionStorage.getItem("token");

            const response = await fetch("http://localhost:8080/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(task),
            });

            if (!response.ok) {
                throw new Error(`Erro ${response.status}`);
            }

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

