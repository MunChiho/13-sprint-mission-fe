import { articleAPI } from "./ArticleService.js";
import { productAPI } from "./ProductService.js";

const search = {
  page: 1,
  pageSize: 3,
  keyword: "",
};

function callArticleService() {
  const postArticle = {
    image: "https://example.com/...",
    content: "생성한 게시글의 내용",
    title: "생성한 게시글",
  };
  let id = -1;
  return articleAPI
    .getSearch(search)
    .then((searchResult) => {
      console.log("게시글 조회 결과들 : ", searchResult);
      return articleAPI.post(postArticle);
    })
    .then((postResult) => {
      console.log("게시글 생성 결과 : ", postResult);
      if (!postResult) //생성에 실패해서 값이 없다.
      {
        throw new Error("생성에 실패했습니다.");
      }
      id = postResult.id;
      return articleAPI.getDtail(id);
    })
    .then((detailResult) => {
      console.log("게시글 상세 조회 결과 : ", detailResult);
      return articleAPI.patch(id, { title: "수정한 게시글" });
    })
    .then((patchResult) => {
      console.log("게시글 삭제 결과 : ", patchResult);
      return articleAPI.delete(id);
    })
    .then((deleteResult) => {
      console.log("게시글 삭제 결과 : ", deleteResult);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function callProductService() {
  const postProduct = {
    images: ["https://example.com/..."],
    tags: ["전자제품"],
    price: 0,
    description: "string",
    name: "상품 이름",
  };

  try {
    const getList = await productAPI.getSearch(search);
    console.log("상품 조회 결과들 : ", getList);

    const create = await productAPI.post(postProduct);
    if (!create) //생성에 실패해서 값이 없다.
    {
      throw new Error("생성에 실패했습니다.");
    }
    const id = create.id;
    console.log("상품 생성 결과 : ", create);

    const getPost = await productAPI.getDtail(id);
    console.log("상품 상세 조회 결과 : ", getPost);

    const patch = await productAPI.patch(id, {
      name: "수정한 상품이름",
      price: 1000,
    });
    console.log("상품 수정 결과 : ", patch);

    const deleteProduct = await productAPI.delete(id);
    console.log("상품 삭제 결과 : ", deleteProduct);
  } catch (error) {
    console.log(error);
  }
}
console.log("===ArticleService API 호출 =====");
await callArticleService();
console.log("================================");
console.log("===ProductService API 호출 =====");
callProductService();
console.log("================================");
