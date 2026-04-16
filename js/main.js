import ArticleApi from "./api/ArticleService.js";
import ProductApi from "./api/ProductService.js";

const article = new ArticleApi();
const products = new ProductApi();

const btn = document.getElementById("test-btn");

const listParams = new URLSearchParams({
  page: 1,
  pageSize: 10,
  orderBy: "recent",
  keyword: "",
});

test();

async function test() {
  btn.addEventListener("click", async () => {
    // ArticleList
    article.getArticleList(listParams).then((result) => {
      const list = result.list;
      console.log(list);
    });

    //Article{id}
    article.getArticle(3001).then((result) => {
      console.log(result);
    });

    const articleData = {
      image: "https://example.com/articlePost",
      content: "김대영의 스프린트3",
      title: "Article Post~",
    };

    //ArticlePost
    article.createArticle(articleData).then((result) => {
      console.log(result);
    });

    //ArticlePatch
    article.patchArticle(3001, articleData).then((result) => {
      console.log(result);
    });

    // //ArticleDelete
    // article.deleteArticle(1231).then((result) => {
    //   console.log(result);
    // });

    // ================ProcutApi========================
    //Product List
    try {
      const result = await products.getProductList(listParams);
      console.log("============Products=================");
      const list = result.list;

      console.log(list);
    } catch (error) {
      console.error(error.message);
    }

    //Product{id}
    try {
      const result = await products.getProductList(listParams);
      console.log("============Products=================");
      const list = result.list;

      console.log(list);
    } catch (error) {
      console.error(error.message);
    }
    //Product Post

    try {
      const result = await products.getProductList(listParams);
      console.log("============Products=================");
      const list = result.list;

      console.log(list);
    } catch (error) {
      console.error(error.message);
    }
    //Product PATCH

    try {
      const result = await products.getProductList(listParams);
      console.log("============Products=================");
      const list = result.list;

      console.log(list);
    } catch (error) {
      console.error(error.message);
    }

    //Product DELETE

    try {
      const result = await products.getProductList(listParams);
      console.log("============Products=================");
      const list = result.list;

      console.log(list);
    } catch (error) {
      console.error(error.message);
    }
  });
}
