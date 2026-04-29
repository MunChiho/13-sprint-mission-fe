const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

// 게시글 리스트 불러오기

export async function getProductList(page, pageSize, keyword) {
  try {
    const response = await fetch(
      `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );
    if (!response.ok) {
      throw new Error(`에러 발생: ${response.status}`);
    }
    const data = await response.json();
    console.log("게시글 리스트 내용:", data);
    return data;
  } catch (error) {
    console.log("게시글 리스트 불러오기 오류!!!", error.message);
    return false;
  }
}

// 특정 게시글 불러오기

export async function getProduct(articleId) {
  try {
    const response = await fetch(`${BASE_URL}/${articleId}`);
    if (!response.ok) {
      throw new Error(`에러 발생: ${response.status}`);
    }
    const data = await response.json();
    console.log("특정 게시글 내용:", data);
    return data;
  } catch (error) {
    console.log("특정 게시글 불러오기 오류!!!", error.message);
    return false;
  }
}

// 새로운 게시글 작성하기

export async function createProduct() {
  const newPost = {
    name: "상품 이름",
    description: "string",
    price: 2147483647,
    tags: ["전자제품"],
    images: ["https://example.com/..."],
  };
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    if (!response.ok) {
      throw new Error(`에러 발생: ${response.status}`);
    }

    const data = await response.json();
    console.log("새로운 글 작성 성공 :", data);
    return data;
  } catch (error) {
    console.log("새로운 글작성 오류!!!", error.message);
    throw false;
  }
}

// 게시글 수정하기

export async function patchProduct(postId) {
  const updates = {
    images: ["https://example.com/..."],
    tags: ["수정전자제품"],
    price: 2100000000,
    description: "string",
    name: "수정 상품 이름",
  };
  try {
    const response = await fetch(`${BASE_URL}/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      throw new Error(`에러 발생: ${response.status}`);
    }
    const data = await response.json();
    console.log("수정된 게시물:", data);
    return data;
  } catch (error) {
    console.log("수정할 게시물이 없습니다!!!", error.message);
    return false;
  }
}

// 특정 게시글 삭제하기

export async function deleteProduct(postId) {
  try {
    const response = await fetch(`${BASE_URL}/${postId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`에러 발생: ${response.status}`);
    }
    const data = await response.json();
    console.log("게시물 삭제 성공");
    return true;
  } catch (error) {
    console.error("삭제 오류!!!", error.message);
    return false;
  }
}
