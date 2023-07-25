export type ImageSourceType = {source: number | {uri: string}};
export type ImageSourceURLType = {source: string};
export type CategoryItemType = ImageSourceURLType & {title: string};
export type GridProductType = ImageSourceURLType & {
  title: string;
  price: string;
};
export type BrandItemType = ImageSourceURLType;
