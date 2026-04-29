import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";
import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";
console.log("★Article★");
console.log("========== 1 =========");
await getArticleList({ page: 1, pageSize: 1, keyword: "" });
console.log("========== 2 =========");
await getArticle(1);
console.log("========== 3 =========");
await createArticle({
  image: "https://example.com/...",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
});
console.log("========== 4 =========");
await patchArticle(1, {
  image: "https://example.com/...",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
});
console.log("========== 5 =========");
await deleteArticle(1);

console.log("");
console.log("");
console.log("");
console.log("★product★");
console.log("========== 1 =========");
await getProductList({ page: 1, pageSize: 1, keyword: "" });

console.log("========== 2 =========");
await getProduct(1);

console.log("========== 3 =========");
await createProduct({
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
});

console.log("========== 4 =========");
await patchProduct(1, {
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
});

console.log("========== 5 =========");
await deleteProduct(1);
