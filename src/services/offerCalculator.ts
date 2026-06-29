import type { Bill } from "../types/Bill";
import type { Offer } from "../types/Offer";

export interface CartItems {
  Bread: number;
  Milk: number;
  Cheese: number;
  Soup: number;
  Butter: number;
}

const PRICE = {
  Bread: 1.1,
  Milk: 0.5,
  Cheese: 0.9,
  Soup: 0.6,
  Butter: 1.2,
};

export const calculateBill = (items: CartItems): Bill => {
  // Calculate subtotal
  const subtotal =
    items.Bread * PRICE.Bread +
    items.Milk * PRICE.Milk +
    items.Cheese * PRICE.Cheese +
    items.Soup * PRICE.Soup +
    items.Butter * PRICE.Butter;

  const offers: Offer[] = [];

  // -----------------------------
  // Offer 1: Buy One Get One Free Cheese
  // -----------------------------
  const freeCheese = Math.floor(items.Cheese / 2);
  const cheeseSaving = freeCheese * PRICE.Cheese;

  if (cheeseSaving > 0) {
    offers.push({
      title: "Buy One Get One Cheese",
      saving: cheeseSaving,
    });
  }

  // -----------------------------
  // Offer 2: Buy Soup, Get Bread Half Price
  // -----------------------------
  const eligibleBread = Math.min(items.Soup, items.Bread);
  const breadSaving = eligibleBread * (PRICE.Bread / 2);

  if (breadSaving > 0) {
    offers.push({
      title: "Soup + Bread Offer",
      saving: breadSaving,
    });
  }

  // -----------------------------
  // Offer 3: One Third Off Butter
  // -----------------------------
  const butterSaving = items.Butter * (PRICE.Butter / 3);

  if (butterSaving > 0) {
    offers.push({
      title: "Butter Discount (33% Off)",
      saving: butterSaving,
    });
  }

  // Total Savings
  const totalSavings = offers.reduce((total, offer) => total + offer.saving, 0);

  // Final Total
  const finalTotal = subtotal - totalSavings;

  return {
    subtotal,
    offers,
    totalSavings,
    finalTotal,
  };
};
