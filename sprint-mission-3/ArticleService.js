const BASE_URL = `https://panda-market-api-crud.vercel.app/articles`;

//단일 조회
export async function getArticle(articleId) {
  if (!articleId) {
    throw new Error("articleId 없습니다.");
  }
  try {
    const response = await fetch(`${BASE_URL}/${articleId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("조회실패");
        }
        return res.json();
      })
      .then((data) => {
        console.log("data : ", data);
      });
  } catch (error) {
    console.error("error 코드 : " + error.message);
  } finally {
    console.log("getArticle() 실행 끝!");
  }
}

//리스트 조회
export async function getArticleList(page, pageSize, keyword) {
  const params = new URLSearchParams({
    page,
    pageSize,
    keyword,
  });

  try {
    const response = await fetch(`${BASE_URL}?${params}`)
      .then((res) => {
        if (!res.ok) throw new Error("조회실패");
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("getArticleList() 실행 끝!");
  }
}

//생성
export async function createArticle(title, content, image) {
  //생성할 상품 내용
  const article = {
    title,
    content,
    image,
  };

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    })
      .then((res) => {
        if (!res.ok) throw new Error("생성 실패");
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.error("Response 코드 : ", error.status);
  } finally {
    console.log("createArticle() 실행 끝!");
  }
}

//수정
export async function patchArticle(articleId, data) {
  if (!articleId) {
    throw new Error("articleId 값 오류");
  }

  try {
    const response = await fetch(`${BASE_URL}/${articleId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw new Error("수정오류");
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.error("Response 코드 : ", error.status);
  } finally {
    console.log("patchArticle() 실행 끝!");
  }
}

//삭제
export async function deleteArticle(articleId) {
  if (!articleId) {
    throw new Error("articleId 오류");
  }
  try {
    const response = await fetch(`${BASE_URL}/${articleId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("삭제오류");
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.error("Response 코드 : ", error.status);
  } finally {
    console.log("deleteArticle() 실행 끝!");
  }
}

// getArticle(5990);

// createArticle(
//   "방민재가 만든 기사 타이틀",
//   "방민재가 만든 기사 콘텐츠",
//   "https://i.namu.wiki/i/d1A_wD4kuLHmOOFqJdVlOXVt1TWA9NfNt_HA0CS0Y_N0zayUAX8olMuv7odG2FiDLDQZIRBqbPQwBSArXfEJlQ.webp",
// );

// getArticleList(1, 5, "방민재");

// deleteArticle(5990);
// patchArticle(5989, { title: "방민재가 수정한 기사 타이틀" });
