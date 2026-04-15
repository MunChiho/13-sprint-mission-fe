const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// 상품 목록 조회
export async function getProductList({ page = 1, pageSize = 10, keyword = '' } = {}) {
  try {
    const res = await fetch(`${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
    if (!res.ok) {
      console.error(`에러 발생: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

// 상품 상세 조회
export async function getProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) {
      console.error(`에러 발생: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

// 상품 생성
export async function createProduct({ name, description, price, tags, images }) {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    if (!res.ok) {
      console.error(`에러 발생: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

// 상품 수정
export async function patchProduct(id, { name, description, price, tags, images }) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    if (!res.ok) {
      console.error(`에러 발생: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

// 상품 삭제
export async function deleteProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      console.error(`에러 발생: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}
