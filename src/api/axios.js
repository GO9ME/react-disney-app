import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "8681dc1cbf39ed807e872a5a42339e54",
        language: "ko-KR"
    }
})

export default instance;
