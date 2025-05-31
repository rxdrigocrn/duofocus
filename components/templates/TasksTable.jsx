import React from 'react'
import useTaskStore from '@/store/taskStore';

const TasksTable = ({ title, tasks, bgColor = 'bg-white', textColor = 'text-gray-800', onFilter, activeFilter, onToggle }) => {
    const { handleCompleteTask } = useTaskStore();

    const gradientBackground =
        activeFilter === 'dumbbell'
            ? 'bg-gradient-to-b from-[#FF6B6B] to-[#C86161]'
            : activeFilter === 'brain'
                ? 'bg-gradient-to-b from-[#4D96FF] to-[#3475D1]'
                : bgColor;



    return (
        <div className={`${gradientBackground} ${textColor} rounded-xl max-h-[700px] overflow-y-auto shadow p-6 w-full max-w-5xl transition-colors duration-300`}>
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <div className="flex gap-2 text-gray-500">
                    <button className="cursor-pointer" onClick={() => onFilter('dumbbell')}>
                        <img
                            src={activeFilter === 'dumbbell' ? '/bodyWhite.svg' : '/bodyBlue.svg'}
                            className="w-[30px]"
                        />
                    </button>
                    <div className="h-8 w-[2px] bg-[#374151]" />
                    <button className="cursor-pointer" onClick={() => onFilter('brain')}>
                        <img
                            src={activeFilter === 'brain' ? '/mindWhite.svg' : '/mindBlue.svg'}
                            className="w-[20px]"
                        />
                    </button>
                </div>
            </div>
            <ul className="space-y-4">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 ">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 md:w-5 md:h-5 appearance-none border border-gray-300 rounded bg-transparent checked:bg-white checked:border-white checked:before:content-['✔'] checked:before:text-black checked:before:text-xs checked:before:flex checked:before:items-center checked:before:justify-center transition duration-300"
                                    checked={task.completed}
                                    onChange={() => handleCompleteTask(task.id, !task.completed)}
                                />
                                <span className={`text-sm transition-colors duration-300 ${task.completed ? 'line-through text-gray-400' : activeFilter === task.icon ? 'text-white' : 'text-gray-700'}`}>
                                    {task.description}
                                </span>
                            </label>
                            <span className="text-gray-500">
                                {task.icon === 'dumbbell' && <img src="/bodyBlue.svg" className="w-[25px]" />}
                                {task.icon === 'brain' && <img src="/mindBlue.svg" className="w-[20px]" />}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TasksTable