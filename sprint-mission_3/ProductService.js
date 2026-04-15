const PRODUCT_URL = "https://panda-market-api-crud.vercel.app/products";

// TODO: getProductList() : GET 메서드를 사용해 주세요.
// page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
export async function getProductList(page, pageSize, keyword) {
  try {
    const response = await fetch(
      `${PRODUCT_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.status}`);
    }

    const data = await response.json();
    console.log("상품 리스트:", data);
    return data;
  } catch (error) {
    console.error("getProductList 에러:", error);
  }
}

// TODO: getProduct() : GET 메서드를 사용해 주세요.
export async function getProduct(productId) {
  try {
    const response = await fetch(`${PRODUCT_URL}/${productId}`);

    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.status}`);
    }

    const data = await response.json();
    console.log("상품 항목: ", data);
    return data;
  } catch (error) {
    console.error("getProduct 에러: ", error);
  }
}

// TODO: createProduct() : POST 메서드를 사용해 주세요.
// request body에 name, description, price, tags, images를 포함해 주세요.
export async function createProduct() {
  const data = {
    images: ["https://picsum.photos/200"],
    tags: ["전자제품"],
    price: 25000,
    description: "최신 휴대폰",
    name: "아이폰",
  };

  try {
    const response = await fetch(`${PRODUCT_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태: ${response.status}`);
    }

    const newproduct = await response.json();
    console.log("제품 생산 성공: ", newproduct);

    return newproduct;
  } catch (error) {
    console.error("createProduct 에러: ", error);
  }
}

// TODO: patchProduct() : PATCH 메서드를 사용해 주세요.
export async function patchProduct(productId) {
  const updates = {
    description: "중고폰",
  };
  try {
    const response = await fetch(`${PRODUCT_URL}/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태: ${response.status}`);
    }

    const updateproduct = await response.json();
    console.log("제품 수정 성공: ", updateproduct);

    return updateproduct;
  } catch (error) {
    console.error("patchProduct 에러: ", error);
  }
}

// TODO: deleteProduct() : DELETE 메서드를 사용해 주세요.
export async function deleteProduct(productId) {
  try {
    const response = await fetch(`${PRODUCT_URL}/${productId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태: ${response.status}`);
    }

    console.log("삭제 완료");
  } catch (error) {
    console.error("deleteProduct 에러: ", error);
  }
}

// fetch를 이용해 주세요.
// 응답의 상태 코드가 2xx가 아닐 경우, 에러메시지를 콘솔에 출력해 주세요.
// async/await을 이용하여 비동기 처리를 해주세요.
// try/catch를 이용하여 오류 처리를 해주세요.
