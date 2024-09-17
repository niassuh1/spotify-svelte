export interface CategoriesResponse {
  categories: Categories;
}

export interface Categories {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Item[];
}

export interface Item {
  href: string;
  icons: Icon[];
  id: string;
  name: string;
}

export interface Icon {
  url: string;
  height: number;
  width: number;
}
