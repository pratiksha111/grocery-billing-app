import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center gap-4">
        <div className="bg-white text-green-600 p-3 rounded-full">
          <FaShoppingCart size={28} />
        </div>

        <div>
          <h1 className="text-3xl font-bold">Grocery Billing System</h1>

          <p className="text-green-100 text-sm mt-1">
            Calculate bills with automatic offers and discounts
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
