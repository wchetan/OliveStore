import {Rating} from '../../db/store.types';
export type ListItemProps = {
  readonly id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  discount?: number;
  ratings: Array<Rating>;
  averageColor: string;
  createdAt: Date;
};
