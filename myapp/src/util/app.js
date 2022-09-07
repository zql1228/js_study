import axios from 'axios'
const api=axios.create({
    baseURL:'http://localhost:8080',
    timeout:6000,
    headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16624565381673886194204673","bc":"420100"}',
        }
})
export default api