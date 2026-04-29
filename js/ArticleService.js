const BASE_URL = "https://panda-market-api-crud.vercel.app/articles";

// 게시글 리스트 불러오기

export function getArticleList(page, pageSize, keyword) {
  fetch(`${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`에러 발생: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("게시글 리스트 내용:", data);
      return data;
    })
    .catch((error) => {
      console.log("게시글 리스트 불러오기 오류!!!", error.message);
      return error;
    });
}

// 특정 게시글 불러오기

export function getArticle(articleId) {
  fetch(`${BASE_URL}/${articleId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`에러 발생: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("특정 게시글 내용:", data);
      return data;
    })
    .catch((error) => {
      console.log("특정 게시글 불러오기 오류!!!", error.message);
      return error;
    });
}

// 새로운 게시글 작성하기

export function createArticle() {
  const newPost = {
    image: "https://example.com/...",
    content: "게시글 내용입니다.",
    title: "게시글 제목입니다.",
  };

  fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`에러 발생: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("새로운 글 작성 성공 :", data);
      return data;
    })
    .catch((error) => {
      console.log("새로운 글작성 오류!!!", error.message);
      return error;
    });
}

// 게시글 수정하기

export function patchArticle(postId) {
  const updates = {
    content: "수정된 내용입니다.",
    title: "수정된 제목입니다.",
  };

  fetch(`${BASE_URL}/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`에러 발생: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("수정된 게시물:", data);
      return data;
    })
    .catch((error) => {
      console.log("수정할 게시물이 없습니다!!!", error.message);
      return error;
    });
}

// 특정 게시글 삭제하기

export function deletePost(postId) {
  fetch(`${BASE_URL}/${postId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`에러 발생: ${response.status}`);
      }
      console.log("게시물 삭제 성공");
      return true;
    })
    .catch((error) => {
      console.error("삭제 오류!!!", error.message);
      return error;
    });
}
