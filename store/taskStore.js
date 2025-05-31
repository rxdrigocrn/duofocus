import { fetchAll, fetchOne } from '@/services/apiServices';
import { create } from 'zustand';

export const useTaskStore = create((set) => ({
    tasks: [],
    taskSelecionada: null,
    loading: false,
    error: null,

    fetchAllTasks: async () => {
        set({ loading: true, error: null });
        try {
            const res = await fetchAll('/tasks');
            const data = await res.json();
            console.log("ALL DATA", data)
            set({ tasks: data, loading: false });
        } catch (err) {
            set({ error: 'Erro ao buscar tarefas', loading: false });
        }
    },

    fetchByIdTasks: async (id) => {
        set({ loading: true, error: null });
        try {
            const res = await fetchOne(`/tasks`, id);
            const data = await res.json();
            console.log("ONE DATA", data)
            set({ taskSelecionada: data, loading: false });
        } catch (err) {
            set({ error: 'Erro ao buscar tarefa por ID', loading: false });
        }
    },

    clearTaskSelecionada: () => set({ taskSelecionada: null }),
}));

