
import '../css/ProductCreatePage.css';

const ProductCreate = () => {
  return (
    <div className="product-container">
      {/* 상품명 섹션 */}
      <div className="form-group">
        <label className="form-label">상품명</label>
        <input 
          type="text" 
          className="form-input" 
          placeholder="상품명을 입력해주세요" 
        />
      </div>

      {/* 상품 소개 섹션 */}
      <div className="form-group">
        <label className="form-label">상품 소개</label>
        <textarea 
          className="form-input text-area" 
          placeholder="상품 소개를 입력해주세요" 
        />
      </div>

      {/* 판매가격 섹션 */}
      <div className="form-group">
        <label className="form-label">판매가격</label>
        <input 
          className="form-input" 
          placeholder="판매 가격을 입력해주세요" 
        />
      </div>

      {/* 태그 섹션 */}
      <div className="form-group">
        <label className="form-label">태그</label>
        <input 
          type="text" 
          className="form-input" 
          placeholder="태그를 입력해주세요" 
        />
        <div className="tag-container">
          <span className="tag">#티셔츠 <button className="tag-del">×</button></span>
          <span className="tag">#상의 <button className="tag-del">×</button></span>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;