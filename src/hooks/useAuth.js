import { useState } from "react"
import { loginRequest, registerRequest } from '../services/authService.js'

export function useAuth() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function loginReq(email, password) {
    setLoading(true)
    setError(null)
    try {
      const data = await loginRequest({email, password})
      // localStorage.setItem("token", data.token)
      return data.user
    } catch (err) {
      setError(err.message)
      return null;
    } finally {
      setLoading(false)
    }
  }

  async function registerReq(email, password, role) {
    setLoading(true)
    setError(null)
    try {
      const data = await registerRequest({email, password, role})
      // localStorage.setItem("token", data.token)
      return data.user
    } catch (err) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { loginReq, registerReq, loading, error }
}