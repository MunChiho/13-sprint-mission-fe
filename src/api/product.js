import instance from "@/lib/axios";

//상품 목록 조회
export async function getProducts({ page = 1, pageSize = 10, orderBy = 'recent', keyword = '' }) {
  const res = await instance.get('/products', { params: { page, pageSize, orderBy, keyword } });
  return res.data
}

//상품 상세 조회
export async function getProduct(productId) {
  const res = await instance.get(`/products/${productId}`);
  return res.data
}

//상품 등록
export async function createProducts({ images, tags, price, description, name }) {
  const res = await instance.post('/products', {images, tags, price, description, name})
  return res.data
}

// 상품 수정
export async function updateProduct(productId, { images, tags, price, description, name }) {
  const res = await instance.patch(`/products/${productId}`, { images, tags, price, description, name });
  return res.data;
}

// 상품 삭제
export async function deleteProduct(productId) {
  const res = await instance.delete(`/products/${productId}`);
  return res.data;
}

// 좋아요
export async function addFavorite(productId) {
  const res = await instance.post(`/products/${productId}/favorite`);
  return res.data;
}

// 좋아요 취소
export async function removeFavorite(productId) {
  const res = await instance.delete(`/products/${productId}/favorite`);
  return res.data;
}