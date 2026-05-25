const request = async (endpoint, { method = "POST", body, token } = {}) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Error en la solicitud")
  }

  return res.json();
}

export const login = (body) =>
  request("/api/users/login", { body })

export const register = (body) =>
  request("/api/users/register", { body })

export const current = (token) =>
  request("/api/users/current", {
    method: "GET",
    token,
  })