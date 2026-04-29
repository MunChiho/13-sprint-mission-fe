const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// GET/articles
export function getArticleList(page, pageSize, keyword) {
  const params = new URLSearchParams({ page, pageSize, keyword});
  const url = `${BASE_URL}/articles?${params.toString()}}`;//url 만들기

  return fetch(url)  // fetch로 요청
    .then(res => {
      if (res.status < 200 || res.status >= 300) {
        console.error('에러 발생', res.status, res.statusText);
        return null;
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
 }

// GET/articles/{articleId}
export function getArticle(articleId) {
 const url = `${BASE_URL}/articles/${articleId}`;

    fetch(url)
     .then(res => {
      if (res.status < 200 || res.status >= 300) {
        console.error('에러 발생');
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
  }

// POST/articles
export function createArticle(image, content, title) {
const url = `${BASE_URL}/articles`;

return fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title,
    content,
    image,
  })
})
.then(data => {
  console.log(data);
  return data;
})
.catch(err => {
  console.error(err);
  return null;
});
}

// PATCH/articles/{articleId}
export function patchArticle(articleId, title, conetnet, image){
return fetch (`${BASE_URL}/articles/${articleId}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title,
    content,
    image,
  })
})
.then(data => {
  console.log(data);
  return data;
})
.catch(err => {
  console.error.apply(err);
  return null;
  });
}

// DELETE/articles/{articleId} 
export function deleteArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
  method: "DELETE"
})
.then(res => {
  if (res.status < 200 || res.status >= 300) {
    console.error("에러 발생", res.status, res.statusText);
    return null;
  }
  if (res.status === 204) {
    console.log("삭제 성공(204 No Content)");
    return null;
  }
  return res.json();
})
.then(data => {
  if (data) {
    console.log(data);
  }
  return data;
})
.catch(err => {
  console.error(err);
  return null;
});
}
