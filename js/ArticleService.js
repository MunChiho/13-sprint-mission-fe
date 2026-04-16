const article_URL = "https://panda-market-api-crud.vercel.app/articles";
async function getArticleList(params) {
  try {
    const query = new URLSearchParams(params);
    const response = await fetch(`${article_URL}?${query}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`ERROR ${error.message}`);
  }
}

async function getArticle(articleId) {
  try {
    const response = await fetch(`${article_URL}/${articleId}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`ERROR ${error.message}: 게시글을 찾을 수 없습니다.`);
  }
}

async function createArticle(bodyPaper) {
  try {
    const response = await fetch("${article_URL}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyPaper),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`ERROR ${error.message}`);
  }
}

async function patchArticle(articleId, bodyPaper) {
  try {
    const response = await fetch(`${article_URL}/${articleId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyPaper),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`ERROR ${error.message}: 게시글을 찾을 수 없습니다.`);
  }
}

async function deleteArticle(articleId) {
  try {
    const response = await fetch(`${article_URL}/${articleId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("삭제 완료");
    } else {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`ERROR ${error.message}: 게시글을 찾을 수 없습니다.`);
  }
}
export {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
};
