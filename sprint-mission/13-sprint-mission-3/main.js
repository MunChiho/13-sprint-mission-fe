import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

// Article
getArticleList(1, 10, "");
getArticle(6421);
createArticle(
  "게시글 제목입니다.",
  "게시글 내용입니다.",
  "https://example.com/...",
).then(function (data) {
  deleteArticle(data.id);
});
patchArticle(
  6423,
  "수정된 게시글 제목입니다.",
  "수정된 게시글 내용입니다.",
  "https://example.com/...",
);

// Product
getProductList(1, 10, "");
getProduct(3864);
createProduct(
  "상품 이름입니다.",
  "상품 설명입니다.",
  10000,
  ["태그1", "태그2"],
  ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
).then(function (data) {
  deleteProduct(data.id);
});
patchProduct(
  3864,
  "수정된 상품 이름입니다.",
  "수정된 상품 설명입니다.",
  15000,
  ["태그3", "태그4"],
  ["https://example.com/..."],
);
