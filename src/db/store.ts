import {CatalogueItem} from './store.types';

const CATALOGUE = [
  {
    id: 'photo-1609709295948-17d77cb2a69b',
    imageUri:
      'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhzfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60',
    title: 'Men',
    averageColor: '#FF5733',
  },
  {
    id: 'photo-1517472292914-9570a594783b',
    imageUri:
      'https://images.unsplash.com/photo-1517472292914-9570a594783b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhzfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60',
    title: 'Women',
    averageColor: '#FFBD33',
  },
  {
    id: 'photo-1558171813-4c088753af8f',
    imageUri:
      'https://images.unsplash.com/photo-1558171813-4c088753af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhzfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60',
    title: 'Kids',
    averageColor: '#DBFF33',
  },
  {
    id: 'photo-1613387945987-2d5f05a1ab8b',
    imageUri:
      'https://images.unsplash.com/photo-1613387945987-2d5f05a1ab8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
    title: 'Footwear',
    averageColor: '#75FF33',
  },
  {
    id: 'photo-1432712641917-22ce322ab531',
    imageUri:
      'https://images.unsplash.com/photo-1432712641917-22ce322ab531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
    title: 'New Graphic',
    averageColor: '#33FF57',
  },
  {
    id: 'photo-1630329273801-8f629dba0a72',
    imageUri:
      'https://images.unsplash.com/photo-1630329273801-8f629dba0a72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
    title: 'Vinyls',
    averageColor: '#33FFBD',
  },
  {
    id: 'premium_photo-1678697844527-a090ad16eb8b',
    imageUri:
      'https://plus.unsplash.com/premium_photo-1678697844527-a090ad16eb8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhzfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60',
    title: '50% off',
    averageColor: '#33D9FF',
  },
  {
    id: 'photo-1587725943749-3d475c15c983',
    imageUri:
      'https://images.unsplash.com/photo-1587725943749-3d475c15c983?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
    title: '60% off',
    averageColor: '#3373FF',
  },
];

export const MOCK_DATA = [...CATALOGUE, ...CATALOGUE, ...CATALOGUE];

export const getCatalogue = (): Promise<Array<CatalogueItem>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATALOGUE);
    }, 2000);
    if (false) {
      reject();
    }
  });
};
