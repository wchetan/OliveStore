export const meta: {} = {
  showcaseCategories: ['M', 'W', 'NA', 'C'],
  showcaseNewLaunch: [],
  showcaseProductData: [
    {
      id: 1334,
      category: 'M',
      data: {},
    },
  ],
  showcaseBrands: [],
  showcaseTrendingProducts: [],
};

const getMeta = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(meta);
    }, 3000);
  });
};
