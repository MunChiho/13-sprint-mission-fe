import { api } from "./src/api/api.js";

import { articleService } from "./src/api/ArticleService.js";
import { productService } from "./src/api/ProductService.js";

const articleId = 6204;
const productId = 3700;

/*Article 관련 API 함수 실행*/

articleService
  .getArticleList(1, 10, "")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("❌ 조회 실패", error);
  });

articleService
  .getArticle(articleId)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("❌ 조회 실패", error);
  });

const newArticle = {
  image: "https://example.com/...",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
};

articleService
  .createArticle(newArticle)
  .then((createData) => {
    console.log(createData);
    return articleService.deleteArticle(createData.id);
  })
  .then((deletedData) => {
    if (deletedData) {
      console.log(`게시글 id = ${deletedData.id} 삭제`);
    }
  })
  .catch((error) => {
    console.log("❌ 삭제 실패", error);
  });

const articleUpdates = {
  image: "https://example.com/...",
  content: "게시글 내용이 수정되었습니다.",
  title: "수정된 게시글 제목입니다.",
};

articleService
  .patchArticle(articleId, articleUpdates)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("❌ 수정 실패", error);
  });

/*Product 관련 API 함수 실행*/

const productsList = await productService.getProductList(1, 10, "");
console.log(productsList);

const product = await productService.getProduct(productId);
console.log(product);

const newProduct = {
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
};

const newCreatedProduct = await productService.createProduct(newProduct);
console.log(newCreatedProduct);

const productUpdates = {
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
};

const updatedProduct = await productService.patchProduct(
  newCreatedProduct.id,
  productUpdates,
);
console.log(updatedProduct);

const deletedProduct = await productService.deleteProduct(newCreatedProduct.id);
if (deletedProduct) {
  console.log(`상품 id = ${deletedProduct.id} 삭제 완료`);
} else {
  console.log("❌ 삭제 실패");
}
