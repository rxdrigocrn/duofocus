'use client'
import React from "react";
import Button from "@/components/shared/Button";
import TasksTable from "@/components/templates/TasksTable";
import { redirect } from "next/navigation";
import { useState } from "react";

const HomePage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [tasks, setTasks] = useState([
        { label: 'Fazer 30 minutos de cardio', icon: 'dumbbell', completed: false },
        { label: 'Ler 20 páginas do livro', icon: 'brain', completed: false },
        { label: 'Fazer exercícios de musculação', icon: 'dumbbell', completed: true },
        { label: 'Estudar React por 1 hora', icon: 'brain', completed: false },
    ]);

    const handleFilterChange = (filter) => {
        setActiveFilter(filter === activeFilter ? 'all' : filter);
    };

    const filteredTasks = activeFilter === 'all'
        ? tasks
        : tasks.filter(task => task.icon === activeFilter);

    const toggleTaskCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div className=" min-h-[calc(100vh-82px)] bg-[linear-gradient(135deg,#061131,#091843)]">
            <div className="flex flex-col lg:flex-row min-h-[calc(100vh-82px)] px-4">
                {/* Seção Esquerda */}
                <section className="w-full lg:w-1/2 flex flex-col items-center px-4 py-3 md:px-8 md:py-4 lg:border-r lg:border-r-[3px] lg:border-r-[#1B284E]">
                    <h1 className="text-xl w-full mb-6 md:mb-10 md:text-2xl font-bold text-white text-center lg:text-left ">
                        Good morning, Erfon! Be <br className="hidden sm:block" /> consistent. Success is built <br className="hidden sm:block" /> day by day.
                    </h1>

                    <TasksTable
                        title="Minhas Tarefas Diárias"
                        tasks={filteredTasks}
                        bgColor="bg-gray-50"
                        textColor="text-gray-800"
                        onFilter={handleFilterChange}
                        activeFilter={activeFilter}
                        onToggle={toggleTaskCompletion}
                    />

                    <div className="mt-6 w-full flex justify-end ">
                        <h3 className="text-white text-xl md:text-2xl font-bold text-right ">
                            Big changes start with small <br /> actions.
                        </h3>
                    </div>
                </section>

                {/* Seção Direita */}
                <section className="w-full lg:w-1/2 flex flex-col items-center py-8 lg:py-0 lg:justify-center relative">
                    <div className="lg:absolute lg:top-10 mb-8 lg:mb-0">
                        <h3 className="text-white text-lg md:text-xl text-center lg:text-left">
                            Today's progress:
                        </h3>
                    </div>

                    <div className="flex flex-row lg:flex-col gap-4 lg:gap-10 w-full justify-center items-center">
                        <div onClick={() => redirect('/add-body-task')}>
                            <Button
                                text="Body"
                                icon="/bodyWhite.svg"
                                bgColor="bg-[#FF6B6B]"
                                className="w-full sm:w-auto px-6"

                            />
                        </div>

                        <div onClick={() => redirect('/add-mind-task')}>
                            <Button
                                text="Mind"
                                icon="/mindWhite.svg"
                                bgColor="bg-[#4D96FF]"
                                iconSize="w-6 h-6"
                                className="w-full sm:w-auto px-6"
                            />
                        </div>
                    </div>

                    <div className="mt-8 lg:absolute lg:bottom-10 max-w-[250px]">
                        <h3 className="text-[#9CA3AF] text-lg md:text-xl text-center">
                            "Every small step brings you closer to your big dream."
                        </h3>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;