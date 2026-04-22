const BASE_URL = 'https://panda-market-api-crud.vercel.app';

export async function getProductList(page, pageSize, keyword) {
  const params = new URLSearchParams({ page, pageSize, keyword});
  const url = `${BASE_URL}/products?${params.toString()}`;
 try {
  const res = await fetch(url);
  if (!res.ok) {
    console.log("에러 발생", res.status, res.statusText);
    return null;
  }
  const data = await res.json();
  return data;
 } catch (err) {
  console.err(err);
  return null;
 }
}

// GET/products/{productId}
export async function getProduct(productId) {
  const url = `${BASE_URL}/products/${productId}`;

  try {
    const res = await fetch(url);
    if (!res.ok){
      console.error("에러 발생", res.status, res.statusText);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

// POST/products
export async function createProduct(name, description, price, tags, images) {
  const url = `${BASE_URL}/products`;

  try{
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });
    
    if(!res.ok) {
      console.error("에러 발생", res.status, res.statusText);
      return null;
    }
    const data = await res.json();
    console.log(data);
    return data;
    
    } catch(err) {
      console.error(err);
      return null;
    } 
  }
  
// PATCH/products/{productId}
export async function patchProduct(productId, updatedObj) {
    const url = `${BASE_URL}/products/${productId}`;

  try{
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedObj),
    });
    
    if(!res.ok) {
      console.error("에러 발생", res.status, res.statusText);
      return null;
    }
    const data = await res.json();
    console.log(data);
    return data;
    } catch(err) {
      console.error(err);
      return null;
    } 
  }

// DELETE/products/{productId}
export async function deleteProduct(productId) {
  const url = `${BASE_URL}/products/${productId}`;

    try {
    const res = await fetch(url, {
      method: "DELETE"
    });
    
    if (!res.ok) {
       console.error("에러 발생", res.status, res.statusText);
       return null;
    }

    if (res.status === 204) {
      console.log("삭제 성공(204 No Content)");
    } else {
      const data = await res.json();
      console.log(data);
      return data;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}

