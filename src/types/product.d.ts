type Product = {
  id: string;
  title: string;
  description: string;
  images: Array<string>;
  stockStatus: boolean;
};

type Size = {
  title: number;
  stockStatus: boolean;
  availableQuantity: number;
};

type ProductShirt = Product & {
  sizes: Array<Size>;
};
