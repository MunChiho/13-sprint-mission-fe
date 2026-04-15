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

createArticle()
  .then((data) => {
    console.log("생성됨: ", data);
    return getArticle(data.id);
  })
  .then((article) => {
    console.log("조회됨: ", article);
    return patchArticle(article.id);
  })
  .then((updated) => {
    console.log("수정됨: ", updated);
    return deleteArticle(updated.id);
  })
  .then(() => {
    console.log("삭제 완료");
  })
  .catch(console.error);

async function productFlow() {
  try {
    const created = await createProduct();
    console.log("생성됨: ", created);

    const product = await getProduct(created.id);
    console.log("조회됨: ", product);

    const updated = await patchProduct(product.id);
    console.log("수정됨: ", updated);

    await deleteProduct(updated.id);
    console.log("삭제 완료");
  } catch (error) {
    console.error("main 에러: ", error);
  }
}

productFlow();
