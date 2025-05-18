'use client';

import React from 'react';
import TaskForm from '@/components/templates/TaskForm';

const AddBodyTaskPage = () => {
    const handleSubmit = (task) => {
        console.log("Body task:", task);
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-82px)]">
            <TaskForm
                type="body"
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default AddBodyTaskPage;

