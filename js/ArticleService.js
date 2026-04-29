const BASE_URL = "https://panda-market-api-crud.vercel.app";

export const articleAPI = {
  getSearch: (searchParam) => {
    if (!searchParam) {
      throw new Error("검색조건이 없습니다.");
    }
    const param = new URLSearchParams(searchParam);
    return fetchFunction(`/articles?${param}`);
  },
  getDtail: (id) => {
    if (id < 0 || id == null) {
      throw new Error("ID값이 없거나 음수입니다. 확인 해주세요.");
    }
    return fetchFunction(`/articles/${id}`);
  },

  post: (content) => {
    if (!content) {
      throw new Error("생성할 내용이 없습니다.");
    }
    return fetchFunction(`/articles`, {
      method: "POST",
      body: JSON.stringify(content),
    });
  },

  patch: (id, content) => {
    if (id < 0 || id == null) {
      throw new Error("ID값이 없거나 음수입니다. 확인 해주세요.");
    }
    if (!content) {
      throw new Error("변경할 내용이 없습니다.");
    }

    return fetchFunction(`/articles/${id}`, {
      method: "PATCH",
      body: JSON.stringify(content),
    });
  },

  delete: (id) => {
    if (id < 0 || id == null) {
      throw new Error("ID값이 없거나 음수입니다. 확인 해주세요.");
    }
    return fetchFunction(`/articles/${id}`, {
      method: "DELETE",
    });
  },
};

//#region fetch 보내는 함수
export function fetchFunction(endoint, option) {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    ...option,
  };

  return fetch(`${BASE_URL}${endoint}`, config)
    .then((respon) => {
      if (respon.status === 204) {
        return null;
      }
      return respon.json().then((data) => {
        if (!respon.ok) {
          throw new Error(
            `상태코드 : ${respon.status}, 서버 에러 메세지 : ${data.message}`,
          );
        }
        return data;
      });
    })
    .catch((error) => {
      console.error(
        `에러가 발생했습니다. 에러난 method: ${config.method}|`,
        error,
      );
    });
}
//#endregion
