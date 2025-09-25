// Use environment variable if available, otherwise default to localhost
const API_BASE_URL = import.meta.env?.VITE_API_URL || 'http://localhost:5000';

export { API_BASE_URL };