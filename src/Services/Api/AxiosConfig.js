import axios from "axios";
import { API_BASE_URL } from "./Constants";

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
})

export default instance