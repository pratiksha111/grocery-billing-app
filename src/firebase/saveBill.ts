import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "./firebase";
import type { Bill } from "../types/Bill";
import type { CartState } from "../features/cart/cartSlice";

export const saveBill = async (bill: Bill, items: CartState["items"]) => {
  try {
    await addDoc(collection(db, "bills"), {
      products: items,
      subtotal: bill.subtotal,
      offers: bill.offers,
      totalSavings: bill.totalSavings,
      finalTotal: bill.finalTotal,
      createdAt: serverTimestamp(),
    });

    console.log("✅ Bill saved successfully!");
  } catch (error) {
    console.error("❌ Error saving bill:", error);
    throw error;
  }
};
