export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imgUrl: string;
  type: string;
  onSale: boolean;
  flavor: string;
  discountPercentage: number;
}
