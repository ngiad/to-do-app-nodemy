import axios from "axios"

const api = axios.create({
    baseURL : "https://backoffice.nodemy.vn/api/"
})

export default api