import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle }  from "./ArticleService.js";
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct }  from "./ProductService.js"; 

// Product
async function testProduct(){
 try {
  // 생성
  const product = await createProduct(
    '상품 이름',
    '이것은 설명입니다',
    10000,
    ['전자제품'],
    ["https://example.com/이미지.jpg"]
  );
  console.log('생성:', product);

  //  목록 조회
  const list = await getProductList(1, 10, '');
  console.log('목록', list);

  // 단일 조회 (생성 상품 id 사용)
  const productDetail = await getProduct(product.id);
  console.log('상세:', productDetail);

  // 수정
  const updated = await patchProduct(product.id, {price: 15000});
  console.log('수정', updated);

  // 삭제
  await deleteProduct(product.id);
  console.log('삭제 완료!');

} catch (error) {
  console.error('에러 발생:', error.message);
 }
}
testProduct();


Article

createArticle('제목', '내용', '이미지주소')
.then(newArticle => {
  // 생성
  console.log('생성', newArticle);

  //목록
  return getArticleList(1, 10, '');  
})

.then(list => {
  console.log('목록', list);

  // id 상세조회
  const fristId = list[0].id;
  return getArticle(fristId)
})

.then(detail => {
  console.log('상세:', detail);
  
  // 상세 조회 => 수정
  return patchArticle(detail.id, { title: '수정제목'});
})

.then(updated => {
  console.log('수정', updated);

  // 수정 후 삭제
  return deleteArticle(updated.id);
})

.then(() => {
  console.log('삭제 완료!');
})

.catch(error => {
  console.log('에러:', error.message);
});