import axios from "axios";


const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "890ea5ed05f74ea29abbe40cb73c8467"
  }
})


export default apiClient
