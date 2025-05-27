import axios from "axios";
export const API_BASE_URL = "http://localhost:8080/api";


const apiFetch = async (method, endpoint, data, contentType) => {
   try {
    const res = await axios({
      method,
      url: `${API_BASE_URL}${endpoint}`,
      data: {
        ...data,
      },
      headers: {
        "Content-Type": contentType || "application/json",
      },
    //   withCredentials: true,
    });

    return res.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
      throw new Error("unauthorized");
    } else {
      throw new Error(
        `Erro na requisição: ${error?.response?.data?.message || error.message}`
      );
    }
  }
};

export default apiFetch;