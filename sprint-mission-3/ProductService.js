const BASE_URL = `https://panda-market-api-crud.vercel.app/products`;

//단일 조회
export async function getProduct(productId) {
  if (!productId) {
    throw new Error("productId가 없습니다.");
  }
  try {
    const response = await fetch(`${BASE_URL}/${productId}`);
    if (!response.ok) {
      throw new Error("조회실패");
    }
    const data = await response.json();
    console.log("data : ", data);
  } catch (error) {
    console.error("error 코드 : " + error.message);
  } finally {
    console.log("getProduct() 실행 끝!");
  }
}

//리스트 조회
export async function getProductList(page, pageSize, keyword) {
  const params = new URLSearchParams({
    page,
    pageSize,
    keyword,
  });

  try {
    const response = await fetch(`${BASE_URL}?${params}`);
    if (!response.ok) {
      throw new Error("조회실패");
    }
    const data = await response.json();

    console.log("data : ", data);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("getProductList() 실행 끝!");
  }
}

//생성
export async function createProduct(name, description, price, tags, images) {
  //생성할 상품 내용
  const product = {
    name,
    description,
    price,
    tags: [...tags],
    images: [...images],
  };

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const result = await response.json();
    console.log("Response 코드 : ", response.status);
    console.log("result : ", result);
  } catch (error) {
    console.error("Response 코드 : ", error.status);
  } finally {
    console.log("createProduct() 실행 끝!");
  }
}

//수정
export async function patchProduct(productId, data) {
  if (!productId) {
    throw new Error("productId 값 오류");
  }

  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Response 코드 : ", response.status);
    console.log("result : ", result);
  } catch (error) {
    console.error("Response 코드 : ", error.status);
  } finally {
    console.log("patchProduct() 실행 끝!");
  }
}

//삭제
export async function deleteProduct(productId) {
  if (!productId) {
    throw new Error("productId에 오류");
  }
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    });

    const result = await response.json();
    console.log("Response 코드 : ", response.status);
    console.log("result : ", result);
  } catch (error) {
    console.error("Response 코드 : ", error.status);
  } finally {
    console.log("deleteProduct() 실행 끝!");
  }
}

// createProduct(
//   "방민재",
//   "방민재가 만든 상품",
//   20000,
//   ["응애", "응응애"],
//   [
//     "https://i.namu.wiki/i/d1A_wD4kuLHmOOFqJdVlOXVt1TWA9NfNt_HA0CS0Y_N0zayUAX8olMuv7odG2FiDLDQZIRBqbPQwBSArXfEJlQ.webp",
//   ],
// );

// getProduct(3340);

// getProductList(1, 10, "방민재");

// deleteProduct("asdasd");
