class ProductsAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async getProducts() {
    const response = await this.#client.get("/products");
    const data = response.data;
    const result = data.result;

    return result;
  }

  async getProduct(productId) {
    const response = await this.#client.get(`/products/${productId}`);
    const data = response.data;
    const result = data.result;

    return result;
  }
}

export const getProducts = () => {};

export default ProductsAPI;
