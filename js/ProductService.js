const BASE_URL = "https://panda-market-api-crud.vercel.app";

export const productAPI = {
  getSearch: async (searchParam) => {
    if (!searchParam) {
      throw new Error("검색조건이 없습니다.");
    }
    const param = new URLSearchParams(searchParam);
    const result = await fetchFunction(`/products?${param}`);
    return result;
  },
  getDtail: async (id) => {
    if (id < 0 || id == null) {
      throw new Error("ID값이 없거나 음수입니다. 확인 해주세요.");
    }
    const result = await fetchFunction(`/products/${id}`);
    return result;
  },

  post: async (content) => {
    if (!content) {
      throw new Error("생성할 내용이 없습니다.");
    }
    const result = await fetchFunction(`/products`, {
      method: "POST",
      body: JSON.stringify(content),
    });
    return result;
  },

  patch: async (id, content) => {
    if (id < 0 || id == null) {
      throw new Error("ID값이 없거나 음수입니다. 확인 해주세요.");
    }
    if (!content) {
      throw new Error("변경할 내용이 없습니다.");
    }

    const result = await fetchFunction(`/products/${id}`, {
      method: "PATCH",
      body: JSON.stringify(content),
    });
    return result;
  },

  delete: async (id) => {
    if (id < 0 || id == null) {
      throw new Error("ID값이 없거나 음수입니다. 확인 해주세요.");
    }
    const result = await fetchFunction(`/products/${id}`, {
      method: "DELETE",
    });
    return result;
  },
};

//#region   fetch 요청 보내는 함수
async function fetchFunction(endoint, option) {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    ...option,
  };

  try {
    const respon = await fetch(`${BASE_URL}${endoint}`, config);
    if (respon.status === 204) //응답은 성공적이지만 데이터 없음
    {
      return null;
    }
    const data = await respon.json();
    if (!respon.ok) {
      throw new Error(
        `상태코드 : ${respon.status}, 서버 에러 메세지 : ${data.message}`,
      );
    }
    return data;
  } catch (error) {
    console.error(
      `에러가 발생했습니다. 에러난 method: ${config.method}|`,
      error,
    );
    return null;
  }
}

//#endregion
