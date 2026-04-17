// [ ]  이외의 코드들은 모두 main.js 파일에 작성해 주세요.
// [ ] import를 활용해 주세요.
// [ ] 각 함수를 실행하는 코드를 작성하고, 제대로 동작하는지 확인해 주세요.
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

// console.log("main.js 연결 완료!");

// //Article
// // 1. 목록 조회해서 존재하는 id들 가져오기
// const list = await getArticleList();

// // 2. 그 중에서 랜덤으로 하나 뽑아서
// const randomArticleId =
//   list.list[Math.floor(Math.random() * list.list.length)].id;

getArticleList(1, 10, "")
  // .then((data) => {
  //   console.log("getArticleList::", data);

  //   const randomId = data.list[Math.floor(Math.random() * data.list.length)].id;
  //   return getArticle(randomId);
  // })
  .then((data) => console.log("getArticleList::", data))
  .catch((err) => console.log("error::", err));

getArticle(6168)
  .then((data) => console.log("getArticle::", data))
  .catch((err) => console.error("error::", err));

createArticle({
  title: "테스트 제목",
  content: "테스트 내용",
  image: "https://example.com/...",
})
  .then((data) => {
    console.log("createArticle::");
    return patchArticle(data.id, {
      title: "수정된 제목",
      content: "수정된 내용",
    });
  })
  .then((data) => {
    console.log("patchArticle::", data);

    return deleteArticle(data.id);
  })
  .then((data) => console.log("deleteArticle::", data))
  .catch((err) => console.error("게시글 생성/수정/삭제 오류:", err));

// Product
async function testProductApi() {
  // // 1. 목록 조회해서 존재하는 id들 가져오기
  // const list = await getProductList();

  // // 2. 그 중에서 랜덤으로 하나 뽑아서
  // const randomId = list.list[Math.floor(Math.random() * list.list.length)].id;

  // // 3. 그 id로 삭제
  // await deleteProduct(randomId);

  const productList = await getProductList(1, 5, "");
  console.log("getProductList::", productList);

  const product = await getProduct(3669);
  console.log("getProduct::", product);

  const createdProduct = await createProduct({
    name: "테스트 상품",
    description: "테스트 상품 설명",
    price: 10000,
    tags: ["테스트"],
    images: ["https://example.com/..."],
  });
  console.log("createProduct::", createdProduct);

  const patchedProduct = await patchProduct(createdProduct.id, {
    name: "수정된 상품",
    price: 20000,
  });
  console.log("patchProduct::", patchedProduct);

  const deletedProduct = await deleteProduct(createdProduct.id);
  console.log("deleteProduct::", deletedProduct);
}

testProductApi();
