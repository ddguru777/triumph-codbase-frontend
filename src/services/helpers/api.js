import { client } from "./apiConfig"

const loginAPI = (email, password) => {
  return client.post("/v1/account/login", {
    email: email,
    password: password
  })
}

export { loginAPI }
