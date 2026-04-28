const BASE_URL = "https://panda-market-api-crud.vercel.app";

export async function getArticleList(page, pageSize, keyword) {
  const params = new URLSearchParams({ page, pageSize, keyword });
  const url = `${BASE_URL}/articles?${params}`;
  return fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        console.error(`에러 발생: 상태 코드 ${res.status}`);
        throw new Error(`HTTP Error: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      if (data) console.log("성공:", data);
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
}

export function getArticle(articleId) {
  const url = `${BASE_URL}/articles/${articleId}`;
  fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        console.error(`에러 발생: 상태 코드 ${res.status}`);
        throw new Error(`HTTP Error: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      if (data) console.log("성공:", data);
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function createArticle(title, content, image) {
  const url = `${BASE_URL}/articles`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        image: image,
      }),
    });
    const data = await response.json();
    console.log("생성된 게시물:", data);
    return data;
  } catch (err) {
    console.error("에러 발생:", err);
  }
}

export async function patchArticle(articleId, updates) {
  const url = `${BASE_URL}/articles/${articleId}`;
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("에러 발생:", err);
  }
}

export async function deleteArticle(articleId) {
  const url = `${BASE_URL}/articles/${articleId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error(`삭제 실패: ${response.status}`);
    }
    const isNoContent = response.status === 204;
    const data = isNoContent ? { message: "삭제 성공" } : await response.json();
    console.log("삭제 결과:", data);
    return data;
  } catch (err) {
    console.error("에러 발생:", err);
    return null;
  }
}
