import { useEffect } from "react";
import "./App.css";
import { getBrands, getProduct } from "./api/api";
import { getBrand } from "./api/api.brand";
import { getProducts } from "./api/api.product";

function App() {
  useEffect(() => {
    const productId = 9587059;
    const brandId = 115;

    getProducts();
    getProduct(productId);
    getBrands();
    getBrand(brandId);
  }, []);

  return <main>Hello world</main>;
}

export default App;
