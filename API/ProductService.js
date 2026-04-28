const BASE_URL = "https://panda-market-api-crud.vercel.app";

export function getProductList(page, pageSize, keyword) {
  const params = new URLSearchParams({ page, pageSize, keyword });
  const url = `${BASE_URL}/products?${params}`;
  return fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        console.error(`에러 발생: 상태 코드 ${res.status}`);
        throw new Error(`HTTP Error: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      if (data) console.log("성공:", data);
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
}

export function getProduct(productId) {
  const params = new URLSearchParams({ productId });
  const url = `${BASE_URL}/products?${params}`;
  fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        console.error(`에러 발생: 상태 코드 ${res.status}`);
        throw new Error(`HTTP Error: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      if (data) console.log("성공:", data);
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function createProduct(name, description, price, tags, images) {
  const url = `${BASE_URL}/products`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    if (response < 200 || response > 300) {
      console.error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("생성된 게시물:", data);
    return data;
  } catch (err) {
    console.error("제품 생성 중 오류가 발생했습니다:", err);
  }
}

export async function patchProduct(productId, updatedObj) {
  const url = `${BASE_URL}/products/${productId}`;
  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedObj),
    });

    if (!res.ok) {
      console.error("에러 발생", res.status, res.statusText);
      return null;
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function deleteProduct(productId) {
  const url = `${BASE_URL}/products/${productId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`삭제실패: ${response.status}`);
    }
    const isNoContent = response.status === 204;
    const data = isNoContent ? { message: "삭제 성공" } : await response.json();
    console.log("삭제 결과:", data);
    return data;
  } catch (err) {
    console.error("에러 발생:", err);
    return null;
  }
}
