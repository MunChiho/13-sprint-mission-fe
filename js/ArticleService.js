const BASE_URL = "https://panda-market-api-crud.vercel.app";

//#region GET을 사용하는 함수들
export function getArticleList(searchParam) {
  if (!searchParam) {
    console.log("매개변수에 값이 없습니다.");
    return;
  }
  const param = new URLSearchParams(searchParam);
  fetchFunction(`${BASE_URL}/articles?${param}`).then((result) => {
    return result;
  });
  return fetchFunction(`${BASE_URL}/articles?${param}`);
}

export function getArticle(id) {
  if (id < 0 || !id) {
    console.log("ID값이 없거나 음수입니다.. 확인 해주세요.");
    return;
  }
  return fetchFunction(`${BASE_URL}/articles/${id}`);
}
//#endregion

//#region POST 생성 함수
export function createArticle(content) {
  if (!content) {
    console.log("매개변수에 값이 없습니다.");
    return;
  }

  return fetchFunction(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(content),
  });
}
//#endregion

//#region PATCH 수정함수
export function patchArticle(id, content) {
  if (id < 0 || !id) {
    console.log("ID값이 없거나 음수입니다.. 확인 해주세요.");
    return;
  }

  return fetchFunction(`${BASE_URL}/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(content),
  });
}
//#endregion

//#region DELETE 삭제함수
export function deleteArticle(id) {
  if (id < 0 || !id) {
    console.log("ID값이 없거나 음수입니다.. 확인 해주세요.");
    return;
  }
  return fetchFunction(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  });
}
//#endregion

//#region fetch 보내는 함수
export function fetchFunction(url, type) {
  return fetch(url, type)
    .then((respon) => {
      if (!respon.ok) {
        return respon.json().then((error) => {
          throw new Error(
            `상태코드 : ${respon.status}, 메세지 : ${error.message}`,
          );
        });
      } else {
        return respon.json();
      }
    })
    .catch((e) => {
      console.error(`에러가 발생했습니다.`, e);
    });
}
//#endregion
