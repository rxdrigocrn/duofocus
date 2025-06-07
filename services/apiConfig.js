// lib/apiFetch.ts
import api from '@/lib/axios/api';

const apiFetch = async (method, endpoint, data, contentType) => {
  try {
    const res = await api({
      method,
      url: endpoint, 
      data,
      headers: {
        "Content-Type": contentType || "application/json",
      },
    });

    return res.data;
  } catch (error) {
    throw new Error(
      `Erro na requisição: ${error?.response?.data?.message || error.message}`
    );
  }
};

export default apiFetch;
