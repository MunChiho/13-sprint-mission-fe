import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle} from './ArticleService.js';
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct} from './ProductService.js';

getArticleList().then((data) => {
  console.log('서버에서 가져온 게시글 목록 데이터입니다:', data);
});
// getArticle(9).then((data) => {
//   console.log('서버에서 가져온 게시글 1개의 데이터입니다:', data);
// });

getProductList().then((data) => {
  console.log('서버에서 가져온 상품 목록 데이터입니다.', data)
});
// getProduct(9).then((data) => {
//   console.log('서버에서 가져온 상품 1개의 데이터입니다.', data)
// });

const myNewArticle = {
  title: 'PandaMarket',
  image: "https://example.com/...",
  content: '중고마켓'
}

const updateArticleData = {
  title: '판다마켓',
  content: '중고거래마켓',
};

async function testArticleAPI() {
  try {
    const createdArticle = await createArticle(myNewArticle);
    console.log('게시글이 성공적으로 생성되었습니다.', createdArticle);
    if (createdArticle && createdArticle.id) {
      const targetId = createdArticle.id;
      const patchedArticle = await patchArticle(targetId, updateArticleData);
      console.log('게시글이 성공적으로 수정되었습니다.', patchedArticle);
      const deletedArticle = await deleteArticle(targetId);
      console.log('게시글이 성공적으로 삭제되었습니다.', deletedArticle)
    }
  }
  catch (error) {
    console.log('게시글 테스트 중 에러가 발생했습니다:', error);
  }
}

testArticleAPI();  

const myNewProduct = {
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
};

const updateData = {
  price: 999999,
  name: '0',
};

// patchProduct(9, updateData).then((data) => {
//   console.log('상품이 성공적으로 수정되었습니다.', data);
// })

// deleteProduct(9).then((data) => {
//   console.log('상품이 성공적으로 삭제되었습니다.', data);
// });

async function testMyCode() {
  try {
    const createdProduct = await createProduct(myNewProduct);
    console.log('새로운 상품이 성공적으로 등록되었습니다.', createdProduct)
      if (createdProduct && createdProduct.id) {
        const targetId = createdProduct.id;
      

    const patchedData = await patchProduct(targetId, updateData);
    if (patchedData) {
      console.log('상품이 성공적으로 수정되었습니다.', targetId, patchedData);
    }

    const deletedData = await deleteProduct(targetId);
    if (deletedData) {
      console.log('상품이 성공적으로 삭제되었습니다.', deletedData);
    }}
  }
  catch (error) {
    console.log('테스트 중 에러가 발생했습니다:', error);
  }
}

testMyCode();

