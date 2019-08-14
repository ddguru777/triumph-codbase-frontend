import axios from "axios"
import { getToken } from "./utility"

const API_ROOT = process.env.REACT_APP_BACKEND_BASE_URL

const client = axios.create({
  baseURL: API_ROOT
})

client.defaults.headers.common = {
  Authorization: `Bearer ${getToken().accessToken}`
}

export { client }
