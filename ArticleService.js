const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// 게시글 목록 조회
export function getArticleList({ page = 1, pageSize = 10, keyword = '' } = {}) {
  return fetch(`${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`)
    .then((res) => {
      if (!res.ok) {
        console.error(`에러 발생: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => console.error(err));
}

// 게시글 상세 조회
export function getArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`)
    .then((res) => {
      if (!res.ok) {
        console.error(`에러 발생: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => console.error(err));
}

// 게시글 생성
export function createArticle({ title, content, image }) {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, image }),
  })
    .then((res) => {
      if (!res.ok) {
        console.error(`에러 발생: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => console.error(err));
}

// 게시글 수정
export function patchArticle(id, { title, content, image }) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, image }),
  })
    .then((res) => {
      if (!res.ok) {
        console.error(`에러 발생: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => console.error(err));
}

// 게시글 삭제
export function deleteArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (!res.ok) {
        console.error(`에러 발생: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => console.error(err));
}
