const BASE_URL = "https://panda-market-api-crud.vercel.app";

export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  try {
    const url = `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("상품 목록 데이터를 가져오는데 실패했습니다.", error);
  }
}
export async function getProduct(id) {
  try {
    const url = `${BASE_URL}/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("상품을 가져오는데 실패했습니다:", error);
  }
}

export async function createProduct(newProduct) {
  try {
    const url = `${BASE_URL}/products`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error("데이터를 생성하는데 실패했습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("상품 생성 중 오류 발생", error);
  }
}

export async function patchProduct(id, updateData) {
  try {
    const url = `${BASE_URL}/products/${id}`;
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },  
      body: JSON.stringify(updateData),
    });

    if (!response.ok) throw new Error('데이터를 수정하는데 실패했습니다.');

    const data = await response.json();
    return data;
  }
  catch (error) {
    console.log('상품 수정 중 오류 발생', error)
  }  
}

export async function deleteProduct(id) {
  try {
    const url = `${BASE_URL}/products/${id}`
    const response = await fetch(url, {
      method: "DELETE"
    })
    if (!response.ok) throw new Error('데이터를 삭제하는데 실패했습니다.');
    
    const data = await response.json();
    return data;
  }
  catch(error) {
    console.log('상품 삭제 중 오류 발생.');
  }
}