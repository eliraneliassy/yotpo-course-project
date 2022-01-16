export interface Item {
    userId?: number;
    id?: number;
    title: string;
    body: string;
    imageUrl?: string;
    price?: number;
}


export class Item2{
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}
