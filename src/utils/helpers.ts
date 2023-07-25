import {FilterType} from './utils.types';
export const convertToFlat = (originalColor: string): string => {
  /*
  flat colors are more pretty & east to eyes, which can be used as placeholder for average color in an image
  replace e at 0,2,4 index, converts the originalColor to flatColor
  you can experiment same thing by playing around with hex color picker
  */
  // const newColor: Array<string> = originalColor.split('');
  // newColor[1] = 'd';
  // newColor[3] = 'd';
  // newColor[5] = 'd';
  // return newColor.join('');
};

export const processFilters = <T>(
  originalArray: Array<any>,
  filtersArray: Array<FilterType>,
): Array<T> => {
  const filteredArray: Array<T> = [];
  originalArray.forEach(dItem => {
    filtersArray.forEach(fItem => {
      const {key, value, condition} = fItem;
      switch (condition) {
        case '<': {
          type ObjectKey = keyof typeof dItem;
          const originalValue = dItem[key as ObjectKey];
          if (typeof originalValue === 'number') {
            if (originalValue < value) {
              filteredArray.push(dItem);
            }
          }
        }
      }
    });
  });
  return filteredArray;
};

/*
  "What's New",
  'Price - high to low',
  'Popularity',
  'Discount',
  'Price - low to high',
  'Customer Rating',
*/

const sorter = (sortBy: string, a: any, b: any): number => {
  switch (sortBy) {
    case "What's New": {
      if (a.createdAt > b.createdAt) {
        return 1;
      }

      if (a.createdAt < b.createdAt) {
        return -1;
      }
      return 0;
    }
    case 'Price - high to low': {
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }
      return 0;
    }
    case 'Price - low to high': {
      if (a.discount < b.discount) {
        return -1;
      }
      if (a.discount > b.discount) {
        return 1;
      }
      return 0;
    }
    case 'Popularity': {
      if (a.ratings.count > b.ratings.count) {
        return 1;
      }
      if (a.ratings.count < b.ratings.count) {
        return -1;
      }
      return 0;
    }
    case 'Discount': {
      if (a.discount > b.discount) {
        return 1;
      }
      if (a.discount < b.discount) {
        return -1;
      }
      return 0;
    }

    case 'Customer Rating': {
      if (a.ratings.count > b.ratings.count) {
        return 1;
      }
      if (a.ratings.count < b.ratings.count) {
        return -1;
      }
      return 0;
    }
    default:
      return 0;
  }
};

export const processSortBy = <T>(
  originalArray: Array<any>,
  sortBy: string,
): Array<T> => {
  const tempArray = originalArray;
  return tempArray.sort((a, b) => sorter(sortBy, a, b));
};

export function debounce(func: () => {}, timeout = 300) {
  let timer: number;
  return (...args: Array<any>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
