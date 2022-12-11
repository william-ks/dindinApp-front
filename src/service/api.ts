import axios from 'axios'

export default axios.create({
  baseURL: "dindinapp-back.up.railway.app",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});