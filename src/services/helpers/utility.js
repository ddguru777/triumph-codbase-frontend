export function clearToken() {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("loggedIn")
}

export function getToken() {
  try {
    const accessToken = localStorage.getItem("accessToken")
    const loggedIn = localStorage.getItem("loggedIn")

    return { loggedIn, accessToken }
  } catch (err) {
    clearToken()
    return null
  }
}
