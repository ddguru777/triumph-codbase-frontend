export function clearToken() {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("loggedIn")
}

export function getToken() {
  try {
    const accessToken = localStorage.getItem("accessToken")
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    return { isLoggedIn, accessToken }
  } catch (err) {
    clearToken()
    return null
  }
}
