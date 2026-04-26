const BASE_URL = "https://panda-market-api-crud.vercel.app";
// 상품 목록 조회
export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  try {
    const params = new URLSearchParams({ page, pageSize, keyword });
    const res = await fetch(`${BASE_URL}/products?/${params}`);
    if (!res.ok) throw new Error(`상품 목록 조회 실패 ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
// 상품 상세 조회
export async function getProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error(`상품을 찾을 수 없습니다. ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
// 상품 등록
export async function createProduct({
  name,
  description,
  price,
  tags,
  images,
}) {
  const bodyData = { name, description, price, tags, images };

  try {
    const res = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    });
    if (!res.ok) throw new Error("상품 등록 실패");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

//상품 수정
export async function patchProduct(id, bodyData) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    });
    if (!res.ok) throw new Error(`상품 수정 실패 ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
//상품 삭제
export async function deleteProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(`상품 삭제 실패 ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
