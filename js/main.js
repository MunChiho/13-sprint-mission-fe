import * as articleService from "./ArticleService.js";
import * as productService from "./ProductService.js";

const search = {
  page: 1,
  pageSize: 3,
  keyword: "",
};

async function callArticleService() {
  const postArticle = {
    image: "https://example.com/...",
    content: "생성한 게시글의 내용",
    title: "생성한 게시글",
  };

  const getList = await articleService.getArticleList(search);
  console.log("게시글 조회 결과들 : ", getList);

  const create = await articleService.createArticle(postArticle);
  const id = create.id;
  console.log("게시글 생성 결과 : ", create);

  const getPost = await articleService.getArticle(id);
  console.log("게시글 상세 조회 결과 : ", getPost);

  const patch = await articleService.patchArticle(id, {
    title: "수정한 게시글",
  });
  console.log("게시글 수정 결과 : ", patch);
  const deleteArticle = await articleService.deleteArticle(id);
  console.log("게시글 삭제 결과 : ", deleteArticle);
}

async function callProductService() {
  const postProduct = {
    images: ["https://example.com/..."],
    tags: ["전자제품"],
    price: 0,
    description: "string",
    name: "상품 이름",
  };

  const getList = await productService.getProductList(search);
  console.log("상품 조회 결과들 : ", getList);

  const create = await productService.createProduct(postProduct);
  const id = create.id;
  console.log("상품 생성 결과 : ", create);

  const getPost = await productService.getProduct(id);
  console.log("상품 상세 조회 결과 : ", getPost);

  const patch = await productService.patchProduct(id, {
    name: "수정한 상품이름",
    price: 1000,
  });
  console.log("상품 수정 결과 : ", patch);
  const deleteArticle = await productService.deleteProduct(id);
  console.log("상품 삭제 결과 : ", deleteArticle);
}
callArticleService();
callProductService();
