export interface Dish {
  name: string;
  ingredients: string;
  veggie: boolean;
  price: number;
}

export interface Dishes {
  [id: string]: Dish[];
}
