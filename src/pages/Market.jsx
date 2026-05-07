import { useState, useEffect, use } from 'react';
import BestSection from '../components/Market/BestSection';
import ProductListSection from '../components/Market/ProductListSection';
import '../css/Market.css';

function Market() {
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) setPageSize(10);
      else if (width >= 768) setPageSize(6);
      else setPageSize(4);

      if (width >= 1200) setBestpageSize(4);
      else if (width >= 768) setBestpageSize(2);
      else setBestpageSize(1);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
      orderBy: orderBy
    });

    if (keyword) {params.append('keyword', keyword);
    }

    fetch(`http://panda-market-api-vercel.app/products?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.list);
        setTotalCount(data.totalCount);
      })
      .catch(err => console.error('상품 목록 로드 실패:', err));
  }, [page, pageSize, orderBy, keyword]);

  return (
    <main className="market-container">
      <BestSection products={bestProducts} />
      
      <ProductListSection 
        products={products}
        page={page}
        onPageChange={setPage}
        totalPages={Math.ceil(totalCount / pageSize)} // 전체 페이지 계산 유지
        keyword={keyword}
        onKeywordChange={(val) => { setKeyword(val); setPage(1); }}
        orderBy={orderBy}
        onOrderChange={(val) => { setOrderBy(val); setPage(1); }}
      />
    </main>
  );
}

export default Market;