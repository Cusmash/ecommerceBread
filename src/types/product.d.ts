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

export type Filters = {
  type?: string[];   
  flavor?: string[]; 
  onSale?: boolean;
  priceFrom?: number;
  priceTo?: number; 
};
