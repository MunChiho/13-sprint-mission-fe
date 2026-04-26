function getArticleList(page, pageSize, keyword) {
  return fetch(
    "https://panda-market-api-crud.vercel.app/articles?page=" +
      page +
      "&pageSize=" +
      pageSize +
      "&keyword=" +
      keyword,
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error("에러 발생! 상태코드: " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(function (error) {
      console.error("에러 발생!", error);
    });
}

function getArticle(id) {
  return fetch("https://panda-market-api-crud.vercel.app/articles/" + id)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("에러 발생! 상태코드:" + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(function (error) {
      console.error("에러 발생!", error);
    });
}

function createArticle(title, content, image) {
  return fetch("https://panda-market-api-crud.vercel.app/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, image }),
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("에러 발생! 상태코드:" + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(function (error) {
      console.error("에러 발생!", error);
    });
}

function patchArticle(id, title, content, image) {
  return fetch("https://panda-market-api-crud.vercel.app/articles/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, image }),
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("에러 발생! 상태코드:" + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(function (error) {
      console.error("에러 발생!", error);
    });
}

function deleteArticle(id) {
  return fetch("https://panda-market-api-crud.vercel.app/articles/" + id, {
    method: "DELETE",
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("에러 발생! 상태코드:" + response.status);
      }
    })
    .then(function () {
      console.log("게시글이 삭제되었습니다.");
    })
    .catch(function (error) {
      console.error("에러 발생!", error);
    });
}

export {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
};
