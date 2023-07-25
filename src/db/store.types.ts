export type CatalogueItem = {
  readonly id: string;
  imageUri: string;
  averageColor: string;
  title: string;
};

export type ProductSize = {
  readonly id: string;
  label: string;
  stockStatus: boolean;
};

export type Rating = {
  label: string;
  count: number;
};

export type ProductType = {
  readonly id: string;
  images: Array<string>;
  title: string;
  description: string;
  sizes?: Array<ProductSize>;
  price: number;
  discount?: number;
  ratings: Array<Rating>;
};
