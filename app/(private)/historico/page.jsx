'use client'
import React, { useEffect, useState } from 'react';
import { fetchAll, fetchOne } from '@/services/apiServices';
import { useRouter } from 'next/navigation';
import { useTaskStore } from '@/store/taskStore';


const Page = () => {
    const router = useRouter();
    const userId = sessionStorage.getItem("userId");
    const [historicTask, setHistoricTask] = useState([]);
    const { handleCompleteTask } = useTaskStore();

    const getHistoric = async () => {
        try {
            const res = await fetchAll("tasks/historico");
            console.log(res);
            setHistoricTask(res || []);
        } catch (err) {
            console.error(err);
            router.push("/login");
        }
    };

    useEffect(() => {
        getHistoric();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    };

    const handleUncomplete = async (taskId) => {
        try {
            await handleCompleteTask(taskId, false);
            getHistoric();
        } catch (err) {
            console.error(err);
            alert('Error unmarking task as completed.');
        }
    };
    return (
        <div className='min-h-[calc(100vh-82px)] flex flex-col items-center gap-7 py-10 px-4'>
            <h1 className='text-2xl font-bold text-white'>Task History</h1>

            <div className="w-full max-w-4xl overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Last Completion
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {historicTask.length > 0 ? (
                            historicTask.map((task) => (
                                <tr key={task.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {task.description}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {formatDate(task.date)}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {formatDate(task.dataUltimaConclusao)}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {task.type || '-'}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${task.completed
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                            }`}>
                                            {task.completed ? 'Completed' : 'Pending'}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        {task.completed ? (
                                            <button
                                                className="text-blue-500 hover:underline cursor-pointer"
                                                onClick={() => handleUncomplete(task.id)}
                                            >
                                                Unmark
                                            </button>
                                        ) : (
                                            <span className="text-gray-400">-</span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="px-4 py-4 text-center text-sm text-gray-500">
                                    No tasks found in history
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Page;