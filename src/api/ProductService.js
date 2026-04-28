import { api } from "./api.js";

export const productService = {
  getProductList: async (page, pageSize, keyword) => {
    try {
      const data = await api.get(
        `/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
      );
      console.log(`✅ 상품 목록 조회 성공`);
      return data;
    } catch (error) {
      console.error(`❌ 상품 목록 조회 실패: ${error.message}`);
    }
  },
  getProduct: async (id) => {
    try {
      const data = await api.get(`/products/${id}`);
      console.log(`✅ 상품 ${id} 상세 조회 성공`);
      return data;
    } catch (error) {
      console.error(`❌ 상품 상세 조회 실패: ${error.message}`);
    }
  },
  createProduct: async (newProduct) => {
    try {
      const data = await api.post(`/products`, newProduct);
      console.log(`✅ 상품 생성 성공`);
      return data;
    } catch (error) {
      console.error(`❌ 상품 생성 실패: ${error.message}`);
    }
  },
  patchProduct: async (id, updates) => {
    try {
      const data = await api.patch(`/products/${id}`, updates);
      console.log(`✅ 상품 ${id} 수정 성공`);
      return data;
    } catch (error) {
      console.error(`❌ 상품 수정 실패: ${error.message}`);
    }
  },
  deleteProduct: async (id) => {
    try {
      const data = await api.delete(`/products/${id}`);
      console.log(`✅ 상품 ${id} 삭제 성공`);
      return data;
    } catch (error) {
      console.error(`❌ 상품 삭제 실패: ${error.message}`);
    }
  },
};
