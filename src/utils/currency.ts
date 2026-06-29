/**
 * Formats a number into British Pound (£) currency.
 *
 * Example:
 * formatCurrency(1.2) => £1.20
 * formatCurrency(15) => £15.00
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
