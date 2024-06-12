class ProductsAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  // getProducts: 전체 상품 목록을 제공합니다.
  async getProducts() {
    const path = "/products";

    const response = await this.#axios.get(path);
    const result = response.data.result;

    return result;
  }

  // getProduct: 특정 상품의 정보를 제공합니다.
  async getProduct(productId) {
    const path = `/products/${productId}`;

    const response = await this.#axios.get(path);
    const result = response.data.result;

    return result;
  }
}

export default ProductsAPI;
