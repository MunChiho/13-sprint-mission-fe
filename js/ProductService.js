const product_URL = "https://panda-market-api-crud.vercel.app/products";

async function getProductList(params) {
  try {
    const query = new URLSearchParams(params);
    const response = await fetch(`${product_URL}?${query}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`ERROR ${error.message}`);
  }
}

async function getProduct(productId) {
  try {
    const response = await fetch(`${product_URL}/${productId}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`ERROR ${error.message}: 상품을 찾을 수 없습니다.`);
  }
}

async function createProduct(bodyPaper) {
  try {
    const response = await fetch(`${product_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyPaper),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`ERROR ${error.message}`);
  }
}

async function patchProduct(productId, bodyPaper) {
  try {
    const response = await fetch(`${product_URL}/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyPaper),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`ERROR ${error.message}: 상품을 찾을 수 없습니다.`);
  }
}

async function deleteProduct(productId) {
  try {
    const response = await fetch(`${product_URL}/${productId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("삭제 완료");
    } else {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`ERROR ${error.message}: 상품을 찾을 수 없습니다.`);
  }
}

export {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};
