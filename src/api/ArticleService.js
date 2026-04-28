import { api } from "./api.js";

export const articleService = {
  getArticleList: (page, pageSize, keyword) => {
    return api
      .get(`/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`)
      .then((data) => {
        console.log(`✅ 게시글 목록 조회 성공`);
        return data;
      })
      .catch((error) => {
        console.error(`❌ 게시글 목록 조회 실패: ${error.message}`);
      });
  },
  getArticle: (id) => {
    return api
      .get(`/articles/${id}`)
      .then((data) => {
        console.log(`✅ 게시글 상세 조회 성공`);
        return data;
      })
      .catch((error) => {
        console.error(`❌ 게시글 상세 조회 실패: ${error.message}`);
      });
  },
  createArticle: (newArticle) => {
    return api
      .post(`/articles`, newArticle)
      .then((data) => {
        console.log(`✅ 게시글 생성 성공`);
        return data;
      })
      .catch((error) => {
        console.error(`❌ 게시글 생성 실패: ${error.message}`);
      });
  },
  patchArticle: (id, updates) => {
    return api
      .patch(`/articles/${id}`, updates)
      .then((data) => {
        console.log(`✅ 게시글 수정 성공`);
        return data;
      })
      .catch((error) => {
        console.error(`❌ 게시글 수정 실패: ${error.message}`);
      });
  },
  deleteArticle: (id) => {
    return api
      .delete(`/articles/${id}`)
      .then((data) => {
        console.log(`✅ 게시글 삭제 성공`);
        return data;
      })
      .catch((error) => {
        console.error(`❌ 게시글 삭제 실패: ${error.message}`);
      });
  },
};
