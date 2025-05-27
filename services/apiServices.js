import apiFetch from "./apiConfig";

export const fetchAll = async (resource) => {
    const response = await apiFetch("GET", `${resource}`);
    return response;
};

export const fetchOne = async (resource, id) => {
    return await apiFetch("GET", `${resource}/${id}`);
};

export const createItem = async (resource, data) => {
    return await apiFetch("POST", `${resource}`, data);
};

export const updateItem = async (resource, id, data) => {
    return await apiFetch("PUT", `${resource}/${id}`, data);
};

export const deleteItem = async (resource, id) => {
    return await apiFetch("DELETE", `${resource}/${id}`);
};

export const fetchData = async (url) => {
    return await apiFetch("GET", url);
};