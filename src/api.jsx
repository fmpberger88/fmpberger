import axios from 'axios';

// const API_URL = 'http://localhost:5001/api/v1';
const API_URL = 'https://blog-api-t6tp.onrender.com/api/v1'

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


