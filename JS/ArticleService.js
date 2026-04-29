const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// 1. 목록 조회 (GET) - 쿼리 파라미터 사용
export function getArticleList(page = 1, pageSize = 10, keyword = '') {
  // URLSearchParams를 쓰면 쿼리 파라미터를 안전하게 URL에 붙일 수 있습니다.
  const query = new URLSearchParams({ page, pageSize, keyword }).toString();
  return fetch(`${BASE_URL}/articles?${query}`)
    .then(res => {
      if (!res.ok) throw new Error(`[목록 조회 에러] 상태 코드: ${res.status}`);
      return res.json();
    })
    .catch(err => console.error(err.message));
}

// 2. 상세 조회 (GET)
export function getArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`)
    .then(res => {
      if (!res.ok) throw new Error(`[상세 조회 에러] 상태 코드: ${res.status}`);
      return res.json();
    })
    .catch(err => console.error(err.message));
}

// 3. 생성 (POST)
export function createArticle(data) {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(res => {
      if (!res.ok) throw new Error(`[생성 에러] 상태 코드: ${res.status}`);
      return res.json();
    })
    .catch(err => console.error(err.message));
}

// 4. 수정 (PATCH)
export function patchArticle(articleId, data) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(res => {
      if (!res.ok) throw new Error(`[수정 에러] 상태 코드: ${res.status}`);
      return res.json();
    })
    .catch(err => console.error(err.message));
}

// 5. 삭제 (DELETE)
export function deleteArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'DELETE',
  })
    .then(res => {
      if (!res.ok) throw new Error(`[삭제 에러] 상태 코드: ${res.status}`);
      return res.json();
    })
    .catch(err => console.error(err.message));
}