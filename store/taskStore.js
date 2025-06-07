import { fetchAll, fetchOne, toggleItem } from '@/services/apiServices';
import { datetimeRegex } from 'zod';
import { create } from 'zustand';

export const useTaskStore = create((set) => ({
    tasks: [],
    taskSelecionada: null,
    loading: false,
    error: null,

    fetchAllTasks: async () => {
        set({ loading: true, error: null });
        try {
            const data = await fetchAll('/tasks/me');
            console.log("ALL DATA", data)
            set({ tasks: data, loading: false });
        } catch (err) {
            set({ error: 'Erro ao buscar tarefas', loading: false });
        }
    },


    fetchById: async (id) => {
        set({ loading: true, error: null });
        try {
            const data = await fetchOne(`/tasks`, id);
            console.log("ONE DATA", data)
            set({ taskSelecionada: data, loading: false });
        } catch (err) {
            set({ error: 'Erro ao buscar tarefa por ID', loading: false });
        }
    },


    handleCompleteTask: async (id, completed) => {
        set({ loading: true, error: null });
        try {
            const updatedTask = await toggleItem(`/tasks/${id}/completed`, { completed });

            // Atualiza na store o status da tarefa alterada
            set((state) => ({
                tasks: state.tasks.map((task) =>
                    task.id === id ? { ...task, completed: updatedTask.completed } : task
                ),
                loading: false
            }));
        } catch (err) {
            console.error(err);
            set({ error: 'Erro ao atualizar tarefa', loading: false });
        }
    },




    clearTaskSelecionada: () => set({ taskSelecionada: null }),
}));

