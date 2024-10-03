import axios from "axios";

export default defineNextPlugin((next) => {
    axios.defaults.baseURL = "http://localhost:8080";
    axios.defaults.withCredentials = true;

    return {
        provide: {
            axios: axios,
        }
    }
})