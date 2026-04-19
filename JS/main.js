import * as ArticleService from './ArticleService.js';
import * as ProductService from './ProductService.js';

async function testAllApis() {
  console.log('========== Article API 테스트 ==========');
  
  // 1. 생성
  const newArticle = await ArticleService.createArticle({
    title: "테스트 게시글",
    content: "테스트 내용입니다.",
    image: "https://example.com/test.png"
  });
  console.log('1. createArticle 결과:', newArticle);
  
  if (newArticle && newArticle.id) {
    const articleId = newArticle.id;

    // 2. 목록 조회
    const articles = await ArticleService.getArticleList(1, 10, '테스트');
    console.log('2. getArticleList 결과:', articles);

    // 3. 상세 조회
    const articleDetail = await ArticleService.getArticle(articleId);
    console.log('3. getArticle 결과:', articleDetail);

    // 4. 수정
    const patchedArticle = await ArticleService.patchArticle(articleId, {
      title: "수정된 테스트 제목"
    });
    console.log('4. patchArticle 결과:', patchedArticle);

    // 5. 삭제
    const deletedArticle = await ArticleService.deleteArticle(articleId);
    console.log('5. deleteArticle 결과:', deletedArticle);
  }

  console.log('\n========== Product API 테스트 ==========');
  
  // 1. 생성
  const newProduct = await ProductService.createProduct({
    name: "새로운 스마트폰",
    description: "최신형 전자기기입니다.",
    price: 1500000,
    tags: ["전자제품", "스마트폰"],
    images: ["https://example.com/phone.png"]
  });
  console.log('1. createProduct 결과:', newProduct);

  if (newProduct && newProduct.id) {
    const productId = newProduct.id;

    // 2. 목록 조회
    const products = await ProductService.getProductList(1, 10, '스마트폰');
    console.log('2. getProductList 결과:', products);

    // 3. 상세 조회
    const productDetail = await ProductService.getProduct(productId);
    console.log('3. getProduct 결과:', productDetail);

    // 4. 수정
    const patchedProduct = await ProductService.patchProduct(productId, {
      price: 1400000 // 가격 인하
    });
    console.log('4. patchProduct 결과:', patchedProduct);

    // 5. 삭제
    const deletedProduct = await ProductService.deleteProduct(productId);
    console.log('5. deleteProduct 결과:', deletedProduct);
  }
}

// 스크립트가 로드되면 바로 테스트 함수 실행
testAllApis();