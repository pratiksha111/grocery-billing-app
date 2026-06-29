export type ProductName =
  | "Bread"
  | "Milk"
  | "Cheese"
  | "Soup"
  | "Butter";

export interface Product {
  id: number;
  name: ProductName;
  price: number;
}