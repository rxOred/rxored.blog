import axios from 'axios';

const api = axios.create({
	baseURL: 'https://rxored-blog-backend.azurewebsites.net/'
});

export default api;
