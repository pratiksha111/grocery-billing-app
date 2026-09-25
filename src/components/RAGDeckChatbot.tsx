
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
 
