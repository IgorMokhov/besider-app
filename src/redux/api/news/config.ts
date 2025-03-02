export const PROXY_URL = 'https://corsproxy.io/?';
export const BASE_URL = 'https://api.nytimes.com/svc/archive/v1';
export const API_KEY = import.meta.env.VITE_API_KEY;

const currentDate = new Date();
export const YEAR = currentDate.getFullYear();
export const MONTH = currentDate.getMonth() + 1;