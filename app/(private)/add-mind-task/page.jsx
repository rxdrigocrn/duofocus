'use client';

import React from 'react';
import TaskForm from '@/components/templates/TaskForm';

const AddMindTaskPage = () => {
    const handleSubmit = (task) => {
        console.log("Mind task:", task);
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-82px)]">
            <TaskForm
                type="mind"
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default AddMindTaskPage;

