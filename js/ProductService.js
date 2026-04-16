const BASE_URL = "https://panda-market-api-crud.vercel.app";

//#region  GET 조회 함수들
export async function getProductList(searchParam) {
  if (!searchParam) {
    console.log("매개변수에 값이 없습니다.");
    return;
  }
  const param = new URLSearchParams(searchParam);
  const result = await fetchFunction(`${BASE_URL}/products?${param}`);
  return result;
}

export async function getProduct(id = BASE_ID) {
  if (id < 0 || !id) {
    console.log("ID값이 없거나 음수입니다.. 확인 해주세요.");
    return;
  }
  const result = await fetchFunction(`${BASE_URL}/products/${id}`);
  return result;
}
//#endregion

//#region POST 생성함수
export async function createProduct(content) {
  const result = await fetchFunction(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });
  return result;
}
//#endregion

//#region PATCH 수정함수
export async function patchProduct(id, content) {
  if (id < 0 || !id) {
    console.log("ID값이 없거나 음수입니다.. 확인 해주세요.");
    return;
  }
  const result = await fetchFunction(`${BASE_URL}/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });
  return result;
}
//#endregion

//#region DELETE 삭제함수
export async function deleteProduct(id) {
  if (id < 0 || !id) {
    console.log("ID값이 없거나 음수입니다.. 확인 해주세요.");
    return;
  }
  const result = await fetchFunction(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  return result;
}
//#endregion

//#region fetch 보내는 함수
export async function fetchFunction(url, type) {
  try {
    const respon = await fetch(url, type);
    if (!respon.ok) {
      const errorData = await respon.json();
      throw new Error(
        `상태코드 : ${respon.status}, 메세지 : ${errorData.message}`,
      );
    }
    const result = await respon.json();
    return result;
  } catch (error) {
    console.error(`에러가 발생했습니다.`, error);
    return null;
  }
}
//#endregion
