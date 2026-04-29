const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// 1. 목록 조회 (GET)
export async function getProductList(page = 1, pageSize = 10, keyword = '') {
  try {
    const query = new URLSearchParams({ page, pageSize, keyword }).toString();
    const res = await fetch(`${BASE_URL}/products?${query}`);
    if (!res.ok) throw new Error(`[목록 조회 에러] 상태 코드: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
}

// 2. 상세 조회 (GET)
export async function getProduct(productId) {
  try {
    const res = await fetch(`${BASE_URL}/products/${productId}`);
    if (!res.ok) throw new Error(`[상세 조회 에러] 상태 코드: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
}

// 3. 생성 (POST)
export async function createProduct(data) {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data), // name, description, price, tags, images 포함 객체
    });
    if (!res.ok) throw new Error(`[생성 에러] 상태 코드: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
}

// 4. 수정 (PATCH)
export async function patchProduct(productId, data) {
  try {
    const res = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`[수정 에러] 상태 코드: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
}

// 5. 삭제 (DELETE)
export async function deleteProduct(productId) {
  try {
    const res = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error(`[삭제 에러] 상태 코드: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
}