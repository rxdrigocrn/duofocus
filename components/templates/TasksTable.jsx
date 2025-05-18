import React from 'react'
import { Brain, Dumbbell } from 'lucide-react'

const TasksTable = ({ title, tasks, bgColor = 'bg-white', textColor = 'text-gray-800', onFilter, activeFilter, onToggle }) => {
    return (
        <div className={`${bgColor} ${textColor} rounded-xl max-h-[700px] overflow-y-auto shadow p-6 w-full max-w-5xl`}>
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <div className="flex gap-2 text-gray-500">
                    <button className="cursor-pointer" onClick={() => onFilter('dumbbell')}>
                        <Dumbbell
                            size={28}
                            className={`${activeFilter === 'dumbbell' ? 'text-red-600' : 'text-gray-500'} hover:text-red-600`}
                        />
                    </button>
                    <div className="h-8 w-[2px] bg-gray-300" />
                    <button className="cursor-pointer" onClick={() => onFilter('brain')}>
                        <Brain
                            size={28}
                            className={`${activeFilter === 'brain' ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600`}
                        />
                    </button>
                </div>
            </div>
            <ul className="space-y-6">
                {tasks.map((task, index) => (
                    <li key={index} className="flex items-center justify-between">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                className="accent-blue-600 w-5 h-5"
                                checked={task.completed}
                                onChange={() => onToggle(index)}

                                readOnly
                            />
                            <span className={`text-sm text-gray-700 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                                {task.label}
                            </span>
                        </label>
                        <span className="text-gray-500">
                            {task.icon === 'dumbbell' && <Dumbbell color='#374151' fill='#374151' size={18} />}
                            {task.icon === 'brain' && <Brain fill='#374151' size={18} />}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TasksTable