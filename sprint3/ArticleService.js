const BASE_URL = "https://panda-market-api-crud.vercel.app";

//게시글 목록 조회
export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  const params = new URLSearchParams({
    page,
    pageSize,
    keyword,
  });

  const url = `${BASE_URL}/articles?${params}`;
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`게시글 목록 조회 실패 ${res.status}`);
      return res.json();
    })
    .catch((error) => console.error(error.message));
}
//게시글 상세 조회
export function getArticle(ArticleId) {
  return fetch(`${BASE_URL}/articles/${ArticleId}`)
    .then((res) => {
      if (!res.ok) throw new Error(`게시글 상세 조회 실패 ${res.status}`);
      return res.json();
    })
    .catch((error) => console.error(error.message));
}
// 게시글 등록
export function createArticle({ title, content, image }) {
  const ArticlebodyData = { title, content, image };

  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ArticlebodyData),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`게시글 등록 실패 ${res.status}`);
      return res.json();
    })
    .catch((error) => console.error(error.message));
}
//게시글 수정
export function patchArticle(ArticleId, ArticlebodyData) {
  return fetch(`${BASE_URL}/articles/${ArticleId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ArticlebodyData),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`게시글 수정 실패 ${res.status}`);
      return res.json();
    })
    .catch((error) => console.error(error.message));
}
//게시글 삭제
export function deleteArticle(ArticleId) {
  return fetch(`${BASE_URL}/articles/${ArticleId}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) throw new Error(`게시글 삭제 실패 ${res.status}`);
      return res.json();
    })
    .catch((error) => console.error(error.message));
}
