import type { Product } from "../types/Product";

import { increment, decrement } from "../features/cart/cartSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

import QuantityButton from "./QuantityButton";
import { formatCurrency } from "../utils/currency";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const quantity = useAppSelector((state) => state.cart.items[product.name]);

  const handleIncrease = () => {
    dispatch(increment(product.name));
  };

  const handleDecrease = () => {
    dispatch(decrement(product.name));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{product.name}</h2>

        <p className="text-gray-600">Price : {formatCurrency(product.price)}</p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <QuantityButton onClick={handleDecrease} disabled={quantity === 0}>
          -
        </QuantityButton>

        <span className="text-2xl font-bold">{quantity}</span>

        <QuantityButton onClick={handleIncrease}>+</QuantityButton>
      </div>
    </div>
  );
};

export default ProductCard;
