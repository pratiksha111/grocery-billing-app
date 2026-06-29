import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { clearCart } from "../features/cart/cartSlice";
import { calculateBill } from "../services/offerCalculator";
import { saveBill } from "../firebase/saveBill";
import { formatCurrency } from "../utils/currency";
import OfferList from "./OfferList";
import { products } from "../data/products";
import toast from "react-hot-toast";

const Summary = () => {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => state.cart.items);

  const bill = calculateBill(items);

  const handleSaveBill = async () => {
    const hasItems = Object.values(items).some((quantity) => quantity > 0);

    if (!hasItems) {
      toast.error("Please add at least one product.");
      return;
    }

    try {
      await saveBill(bill, items);

      dispatch(clearCart());

      toast.success("Bill saved successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save bill.");
    }
  };

  return (
    <div className="sticky top-5 rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold border-b pb-3">Order Summary</h2>

      {/* Items Purchased */}
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold">Items Purchased</h3>

        {products.filter((product) => items[product.name] > 0).length === 0 ? (
          <p className="text-gray-500">No items selected.</p>
        ) : (
          <div className="space-y-3">
            {products
              .filter((product) => items[product.name] > 0)
              .map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-semibold">{product.name}</p>

                    <p className="text-sm text-gray-500">
                      {items[product.name]} × {formatCurrency(product.price)}
                    </p>
                  </div>

                  <span className="font-semibold">
                    {formatCurrency(items[product.name] * product.price)}
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Subtotal */}
      <div className="flex justify-between border-t pt-4">
        <span className="font-medium">Subtotal</span>

        <span className="font-semibold">{formatCurrency(bill.subtotal)}</span>
      </div>

      {/* Offers */}
      <div className="mt-6">
        <h3 className="mb-3 text-lg font-semibold">Offers Applied</h3>

        <OfferList offers={bill.offers} />
      </div>

      {/* Savings */}
      <div className="mt-6 flex justify-between border-t pt-4">
        <span className="font-semibold">Total Savings</span>

        <span className="font-bold text-green-600">
          -{formatCurrency(bill.totalSavings)}
        </span>
      </div>

      {/* Final Total */}
      <div className="mt-4 flex justify-between border-t pt-4 text-xl font-bold">
        <span>Final Total</span>

        <span className="text-blue-600">{formatCurrency(bill.finalTotal)}</span>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSaveBill}
        className="mt-8 w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Save Bill
      </button>
    </div>
  );
};

export default Summary;
