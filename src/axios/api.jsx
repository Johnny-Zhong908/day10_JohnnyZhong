import axios from "axios";

const API_URL = "https://67495c87868020296630ab65.mockapi.io/todo/TodoItems";

export const getTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createTodo = async (todo) => {
    const response = await axios.post(API_URL, todo);
    return response.data;
};

export const updateTodo = async (id, updatedData) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
};

export const deleteTodo = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
