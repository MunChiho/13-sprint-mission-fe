import {
  getArticleList,
  createArticle,
  getArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

import {
  getProductList,
  createProduct,
  getProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

//===Articlelist test===

// getArticleList(1, 10, "").then((Articlelist) => {
//   console.log("[getArticleList: 게시글 리스트 확인]", Articlelist);
// });

//===createArticle test===

// createArticle({
//   title: "테스트 제목",
//   content: "테스트 내용",
//   image: "https://example.com/...",
// }).then((article) => {
//   console.log("[createArticle: 게시글 등록 확인]", article);
// });

// //===patchArticle test===
// patchArticle(6423, {
//   title: "수정 테스트 제목",
//   content: "수정 테스트 내용",
// }).then((updatedArticle) => {
//   console.log("[patchArticle: 게시글 수정 확인]", updatedArticle);
// });

// //===getArticleById test===
// getArticle(6431).then((ArticleId) => {
//   console.log("[getArticle: 게시글 상세 조회 확인]", ArticleId);
// });

// //===deleteArticle test===
// deleteArticle(6436).then((deleteArticle) => {
//   console.log("[deleteArticle: 게시글 삭제 확인]", deleteArticle);
// });

// ===Product All test===

// async function testProduct() {
//===getProductlist (상품 리스트)===
// const productList = await getProductList(1, 10, "");
// console.log("[상품 리스트 확인]", productList);
// ===createProduct (상품 등록)===
// const newProduct = await createProduct({
//   name: "치이카와",
//   description: "먼작귀 캐릭터 랜덤 피규어",
//   price: 12000,
//   tags: [],
//   images: [],
// });
// console.log("[상품 등록 확인]", newProduct);
// //===patchProduct (상품 수정)===
// const updatedProduct = await patchProduct(3865, {
//   name: "우사기",
//   description: "먼작귀 캐릭터 랜덤 피규어",
//   price: 12000,
// });
// console.log("[상품 수정 확인]", updatedProduct);
// // ===getProductById===
// const product = await getProduct(3865);
// console.log("[상품 상세 조회 확인]", product);
// // ===deleteProduct===
// const deletedProduct = await deleteProduct(3850);
// console.log("[상품 삭제 확인]", deletedProduct);
// }
// testProduct();
