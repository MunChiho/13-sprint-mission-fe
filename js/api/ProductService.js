const BASE_URL = "https://panda-market-api-crud.vercel.app";

export default class ProductApi {
  async getProductList(params) {
    return await api.get(`/products?${params}`);
  }

  async getProduct(id) {
    return await api.get(`/products/${id}`);
  }

  async createProduct(data) {
    return await api.post("/products", data);
  }

  async patchProduct(id, data) {
    return await api.patch(`/products/${id}`, data);
  }

  async deleteProduct(id) {
    return await api.delete(`/products/${id}`);
  }
}

async function request(endpoint, options = {}) {
  const config = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    if (!response.status === 200) {
      console.error(`Http Error : ${response.status}`);
      throw error;
    }
    if (response.status === 204) return null;

    return response.json();
  } catch (error) {
    console.error(`Rquest에러: ${error.message}`);
  }
}

const api = {
  get: (endpoint) => request(endpoint),
  post: (endpoint, data) =>
    request(endpoint, { method: "POST", body: JSON.stringify(data) }),
  patch: (endpoint, data) =>
    request(endpoint, { method: "PATCH", body: JSON.stringify(data) }),
  delete: (endpoint) => request(endpoint, { method: "DELETE" }),
};
