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

import { useEffect } from 'react';
 
export default function RAGDeckChatbot() {
  useEffect(() => {
    if (!document.querySelector('script[data-api-key="rag_3b2ef14c675c459c"]')) {
      const script = document.createElement('script');
      script.src = 'https://app.ragdeck.in/widget.js';
      script.setAttribute('data-api-key', 'rag_3b2ef14c675c459c');
      script.async = true;
      document.body.appendChild(script);
    } else if (window.RAGDeck) {
      window.RAGDeck.init({ apiKey: 'rag_3b2ef14c675c459c' });
    }
 
    return () => {
      if (window.RAGDeck) window.RAGDeck.destroy();
    };
  }, []);
 
  return null;
}
 
