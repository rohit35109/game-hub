import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '66ea52f2c3854f179d5d946b8155c5fe'
    }
})