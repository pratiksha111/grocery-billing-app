import { products } from "../data/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-bold text-gray-800">Products</h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
