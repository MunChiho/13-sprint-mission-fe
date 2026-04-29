import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from './ArticleService.js';
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from './ProductService.js';

// ===== Article 테스트 =====

// 게시글 목록 조회
getArticleList({ page: 1, pageSize: 5 })
  .then((data) => console.log('게시글 목록:', data));

// 게시글 생성
createArticle({ title: '테스트 제목', content: '테스트 내용', image: 'https://picsum.photos/200' })
  .then((data) => {
    console.log('게시글 생성:', data);

    const id = data.id;

    // 게시글 상세 조회
    getArticle(id)
      .then((data) => console.log('게시글 상세:', data));

    // 게시글 수정
    patchArticle(id, { title: '수정된 제목', content: '수정된 내용', image: 'https://picsum.photos/200' })
      .then((data) => console.log('게시글 수정:', data));

    // 게시글 삭제
    deleteArticle(id)
      .then((data) => console.log('게시글 삭제:', data));
  });

// ===== Product 테스트 =====

// 상품 목록 조회
const productList = await getProductList({ page: 1, pageSize: 5 });
console.log('상품 목록:', productList);

// 상품 생성
const newProduct = await createProduct({
  name: '테스트 상품',
  description: '테스트 설명',
  price: 10000,
  tags: ['태그1'],
  images: [],
});
console.log('상품 생성:', newProduct);

const productId = newProduct.id;

// 상품 상세 조회
const product = await getProduct(productId);
console.log('상품 상세:', product);

// 상품 수정
const updated = await patchProduct(productId, { name: '수정된 상품명', description: '수정된 설명', price: 20000, tags: [], images: [] });
console.log('상품 수정:', updated);

// 상품 삭제
const deleted = await deleteProduct(productId);
console.log('상품 삭제:', deleted);
