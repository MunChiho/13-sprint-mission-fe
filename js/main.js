import {
  getArticleList,
  createArticle,
  deletePost,
  getArticle,
  patchArticle,
} from "./ArticleService.js";

import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductList,
  patchProduct,
} from "./ProductService.js";

// ArticleService.js

getArticleList(1, 10, "");
getArticle(6252);
createArticle();
patchArticle(6252);
deletePost(6289);

// ProductService.js

getProductList(1, 10, "");
getProduct(3763);
createProduct();
patchProduct(3763);
deleteProduct(3764);
