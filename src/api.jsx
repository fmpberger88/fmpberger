import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchBlogs = async () => {
    const { data } = await axios.get(`${API_URL}/blogs`);
    return data;
}

export const fetchBlogById = async (id) => {
    const { data } = await axios.get(`${API_URL}/blogs/${id}`);
    return data;
}

export const fetchCommentsByBlogId = async (blogId) => {
    const { data } = await axios.get(`${API_URL}/comments/${blogId}`);
    return data;
}


