const BASE_URL = "https://panda-market-api-crud.vercel.app";

export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  const url = `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('데이터를 불러오는데 실패했습니다.');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("네트워크 에러가 발생했습니다:", error);
    });
}

export function getArticle(id) {
  const url = `${BASE_URL}/articles/${id}`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("네트워크 에러가 발생했습니다:", error);
    });
}

export function createArticle(newArticle) {
  const url = `${BASE_URL}/articles`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },  
    body: JSON.stringify(newArticle),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('게시글을 생성하는데 실패했습니다.');
    }
    return response.json();
  })
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.error('네트워크 에러가 발생했습니다:', error);
  })
}

export function patchArticle(id, updateData) {
  const url = `${BASE_URL}/articles/${id}`;
  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData)
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('게시글을 수정하는데 실패했습니다.');
    }
    return response.json();
  })
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log('네트워크 에러가 발생했습니다:', error);
  });
}

export function deleteArticle(id) {
  const url = `${BASE_URL}/articles/${id}`;
  return fetch(url, {
    method: 'DELETE'
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('게시글을 삭제하는데 실패했습니다.');
    }
    return response.json();
  })
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log('네트워크 에러가 발생했습니다:', error);
  })
}