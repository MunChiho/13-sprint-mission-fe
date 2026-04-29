const ARTICLE_URL = "https://panda-market-api-crud.vercel.app/articles";

// TODO: getArticleList(): GET 메서드를 사용해 주세요.
// page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
export function getArticleList(page, pageSize, keyword) {
  return fetch(
    `${ARTICLE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러! 상태 : ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("리스트", data);
      return data;
    })
    .catch((error) => {
      console.error("getArticleList 에러: ", error);
    });
}

// TODO: getArticle() : GET 메서드를 사용해 주세요.
export function getArticle(articleId) {
  return fetch(`${ARTICLE_URL}/${articleId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("getArticle 에러: ", error);
    });
}

// TODO: createArticle() : POST 메서드를 사용해 주세요.
// request body에 title, content, image를 포함해 주세요.
export function createArticle() {
  const newPost = {
    image: "https://picsum.photos/200",
    content: "새로운 게시물 내용입니다용.",
    title: "새로운 게시물 작성",
  };

  return fetch(`${ARTICLE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("생성: ", data);
      return data;
    })
    .catch((error) => {
      console.error("createArticle 에러: ", error);
    });
}
// TODO: patchArticle() : PATCH 메서드를 사용해 주세요.
export function patchArticle(articleId) {
  const updates = {
    title: "새로운 제목으로 수정합니다.",
  };

  return fetch(`${ARTICLE_URL}/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("수정: ", data);
      return data;
    })
    .catch((error) => {
      console.error("patchArticle 에러: ", error);
    });
}

// TODO: deleteArticle() : DELETE 메서드를 사용해 주세요.
export function deleteArticle(articleId) {
  return fetch(`${ARTICLE_URL}/${articleId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.status}`);
      }
      console.log("삭제 완료");
    })
    .catch((error) => {
      console.error("deleteArticle 에러: ", error);
    });
}

// fetch를 이용해 주세요.
// 응답의 상태 코드가 2xx가 아닐 경우, 에러메시지를 콘솔에 출력해 주세요.
// .then() 메서드를 이용하여 비동기 처리를 해주세요.
// .catch()를 이용하여 오류 처리를 해주세요.
