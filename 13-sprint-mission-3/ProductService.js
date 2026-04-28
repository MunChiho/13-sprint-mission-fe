async function getProductList(page, pageSize, keyword) {
  try {
    const response = await fetch(
      "https://panda-market-api-crud.vercel.app/products?page=" +
        page +
        "&pageSize=" +
        pageSize +
        "&keyword=" +
        keyword,
    );
    if (!response.ok) {
      throw new Error("에러 발생! 상태코드:" + response.status);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("에러 발생!", error);
  }
}

async function getProduct(id) {
  try {
    const response = await fetch(
      "https://panda-market-api-crud.vercel.app/products/" + id,
    );
    if (!response.ok) {
      throw new Error("에러 발생! 상태코드:" + response.status);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("에러 발생!", error);
  }
}

async function createProduct(name, description, price, tags, images) {
  try {
    const response = await fetch(
      "https://panda-market-api-crud.vercel.app/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, price, tags, images }),
      },
    );
    if (!response.ok) {
      throw new Error("에러 발생! 상태코드:" + response.status);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("에러 발생!", error);
  }
}

async function patchProduct(id, name, description, price, tags, images) {
  try {
    const response = await fetch(
      "https://panda-market-api-crud.vercel.app/products/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, price, tags, images }),
      },
    );
    if (!response.ok) {
      throw new Error("에러 발생! 상태코드:" + response.status);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("에러 발생!", error);
  }
}

async function deleteProduct(id) {
  try {
    const response = await fetch(
      "https://panda-market-api-crud.vercel.app/products/" + id,
      {
        method: "DELETE",
      },
    );
    if (!response.ok) {
      throw new Error("에러 발생! 상태코드:" + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("에러 발생!", error);
  }
}

export {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};
