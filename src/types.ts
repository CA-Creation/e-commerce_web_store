export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes: string[];
}

export type CartItem = Product & {
  quantity: number;
  selectedSize: string;
};