import type { Offer } from "./Offer";

export interface Bill {
  subtotal: number;
  offers: Offer[];
  totalSavings: number;
  finalTotal: number;
}
