import axios from "axios";

const http = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

http.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('ACCESS_TOKEN')

        // eslint-disable-next-line no-param-reassign
        config.headers = {
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            'Content-Type': 'application/json',

            //Authorization: `Bearer ${token.token}`,
            ...config.headers,
        }
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    error => Promise.reject(error),
)


export default http
