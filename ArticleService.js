// [ ]  'https://panda-market-api-crud.vercel.app/docs/#/Article' API를 이용하여 아래 함수들을 구현해 주세요.
const BASE_URL = "https://panda-market-api-crud.vercel.app/api";
// [ ] getArticleList() : GET 메서드를 사용해 주세요.
// [ ] page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
export const getArticleList = (page = 1, pageSize = 10, keyword = "") => {
  const url = `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`에러 발생: ${res.status}`);
      return res.json();
    })
    .catch((err) => console.error(err.message));
};
// [ ] getArticle() : GET 메서드를 사용해 주세요.
export const getArticle = (id) => {
  return fetch(`${BASE_URL}/articles/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error(`에러 발생: ${res.status}`);
      return res.json();
    })
    .catch((err) => console.error(err.message));
};
// [ ] createArticle() : POST 메서드를 사용해 주세요.
// [ ] request body에 title, content, image 를 포함해 주세요.
export const createArticle = (data) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data), // title, content, image 포함
  })
    .then((res) => {
      if (!res.ok) throw new Error(`에러 발생: ${res.status}`);
      return res.json();
    })
    .catch((err) => console.error(err.message));
};
// [ ] patchArticle() : PATCH 메서드를 사용해 주세요.
export const patchArticle = (id, data) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`에러 발생: ${res.status}`);
      return res.json();
    })
    .catch((err) => console.error(err.message));
};
// [ ] deleteArticle() : DELETE 메서드를 사용해 주세요.
// [ ]  fetch 혹은 axios 를 이용해 주세요.
export const deleteArticle = (id) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) throw new Error(`에러 발생: ${res.status}`);
      return res.json();
    })
    .catch((err) => console.error(err.message));
};
// [ ] 응답의 상태 코드가 2XX가 아닐 경우, 에러메시지를 콘솔에 출력해 주세요.
// [ ]  .then() 메서드를 이용하여 비동기 처리를 해주세요.
// [ ]  .catch() 를 이용하여 오류 처리를 해주세요.
