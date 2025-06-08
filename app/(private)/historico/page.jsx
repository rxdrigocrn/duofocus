'use client'
import React, { useEffect } from 'react';
import { fetchAll, fetchOne } from '@/services/apiServices';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const userId = sessionStorage.getItem("userId");
    const [historicTask, setHistoricTask] = React.useState([]);

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

    return (
        <div className='min-h-[calc(100vh-82px)] flex flex-col items-center gap-7 py-10 px-4'>
            <h1 className='text-2xl font-bold text-white'>Histórico de Tarefas</h1>

            <div className="w-full max-w-4xl overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Descrição
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Data
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Última Conclusão
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tipo
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
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
                                            {task.completed ? 'Concluída' : 'Pendente'}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-4 py-4 text-center text-sm text-gray-500">
                                    Nenhuma tarefa encontrada no histórico
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