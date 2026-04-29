// -------------------------------------------------     선언부     -------------------------------------------------
import * as product from "./ProductService.js";
import * as article from "./ArticleService.js";

// -------------------------------------------------     product     -------------------------------------------------
//createProduct() 예시
product.createProduct(
  "방민재",
  "방민재가만든 상품",
  100000,
  ["ㅈㅂㄷㅈㄷㅂㅈ", "ㅂㄷㅂㅈㄷㅂㅈㄷ"],
  [
    "https://i.namu.wiki/i/d1A_wD4kuLHmOOFqJdVlOXVt1TWA9NfNt_HA0CS0Y_N0zayUAX8olMuv7odG2FiDLDQZIRBqbPQwBSArXfEJlQ.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kVwY6E3UkmCgzAWgtGomGiRCMrGr8ZeYqsWeQUCCgEcPTwYvWzjBTEZljwOScmdW0PuSYcVD5CWmP8WEY5MS_0g9ISItFLhQNXgDMx9XSw&s=10",
  ],
);

//patchProduct() 예시
product.patchProduct(3421, {
  name: "김민재",
  tags: ["정상적으로", "정상적으로ssss"],
});

//getProduct() 예시
product.getProduct(3421);

// //getProductList() 예시
product.getProductList(1, 10, "방민재");

//deleteProduct() 수정예시
product.deleteProduct();

// -------------------------------------------------     article     -------------------------------------------------

//createArticle() 예시
article.createArticle(
  "방민재가 만든 기사 타이틀",
  "방민재가 만든 기사 콘텐츠",
  "https://i.namu.wiki/i/d1A_wD4kuLHmOOFqJdVlOXVt1TWA9NfNt_HA0CS0Y_N0zayUAX8olMuv7odG2FiDLDQZIRBqbPQwBSArXfEJlQ.webp",
);

//getArticle() 예시
article.getArticle(5990);

//getArticleList() 예시
article.getArticleList(1, 5, "방민재");

//deleteArticle() 예시
article.deleteArticle(5990);

//getArtipatchArticlecle() 예시
article.patchArticle(5989, { title: "방민재가 수정한 기사 타이틀" });
