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

async function handleArticle() {
  try {
    // 리스트 조회
    const list = await getArticleList(1, 10, "");
    console.log("[getArticleList]", list);

    // 1. 생성
    const article = await createArticle(
      "제목",
      "내용",
      "https://example.com/image.png",
    );
    console.log("[createArticle]", article);

    // 2. 조회 (생성이 확실히 완료된 후 실행)
    const detail = await getArticle(article.id);
    console.log("[getArticle]", detail);

    // 3. 수정 (조회가 완료된 후 실행)
    const patched = await patchArticle(article.id, { title: "수정된 제목" });
    console.log("[patchArticle]", patched);

    // 4. 삭제 (수정이 완료된 후 실행)
    await deleteArticle(article.id);
    console.log("[deleteArticle] id:", article.id);
  } catch (error) {
    console.error("Article 작업 중 오류:", error);
  }
}

async function handleProduct() {
  try {
    const list = await getProductList(1, 10, "");
    console.log("[getProductList]", list);
    const product = await createProduct(
      "상품",
      "설명",
      10000,
      ["샘플"],
      ["https://example.com/product.png"],
    );
    console.log("[createProduct]", product);
    console.log("[getProduct]", await getProduct(product.id));
    console.log(
      "[patchProduct]",
      await patchProduct(product.id, { price: 12000 }),
    );
    await deleteProduct(product.id);
    console.log("[deleteProduct] id:", product.id);
  } catch (error) {
    console.error("Product 작업 중 오류:", error);
  }
}

handleArticle();
handleProduct();
