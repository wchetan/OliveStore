import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, StyleSheet, Animated, Easing, FlatList} from 'react-native';
import c from '../../theme/colors';
import {getCatalogue} from '../../db/store';
import {CatalogueItem} from '../../db/store.types';
import Text from '../../components/Text';
import CategoryTitleRow from './CategoryTitleRow';
import ProductItem from './ProductItem';
import BrandItem from './BrandItem';
import NewProductItem from './NewProductItem';
import CategoryItem from './CategoryItem';
import {cStyles} from '../../theme/commonstyles';
import ProductGridItem from './ProductGrid';
import {MOCK_DATA} from '../../db/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: c.background,
    padding: 16,
  },
  text: {
    color: c.gray8,
    marginBottom: 8,
    letterSpacing: 0.65,
  },
  listContainer: {backgroundColor: 'red'},
  catalogueLabel: {marginBottom: 8, fontWeight: '500', fontSize: 18},
  horizontalSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  svContentContainerStyle: {justifyContent: 'space-between'},
  categoryItemAddStyle: {marginRight: 8},
});

const metaList = {
  categoryList: [],
  newProductsList: [],
  categoryProductList: [],
  brandList: [],
  trendingProducts: [],
};

const data = [
  {
    title: 'categoryList',
    data: [
      {
        key: 'categoryList',
        list: [
          {
            categoryTitle: 'New Arrivals',
            categoryImage: MOCK_DATA[0],
          },
          {
            categoryTitle: 'Men',
            categoryImage: MOCK_DATA[1],
          },
          {
            categoryTitle: 'Women',
            categoryImage: MOCK_DATA[2],
          },
          {
            categoryTitle: 'Combos',
            categoryImage: MOCK_DATA[3],
          },
        ],
      },
    ],
  },
  {
    title: 'newProductsList',
    data: [
      {
        key: 'newProductsList',
        list: [
          {
            categoryImage: MOCK_DATA[4],
          },
          {
            categoryImage: MOCK_DATA[5],
          },
          {
            categoryImage: MOCK_DATA[6],
          },
          {
            categoryImage: MOCK_DATA[7],
          },
        ],
      },
    ],
  },
  {
    title: 'categoryProductList',
    data: [
      [
        {
          key: 'categoryProductList',
          categoryName: 'Him',
          categoryProducts: [
            MOCK_DATA[1],
            MOCK_DATA[2],
            MOCK_DATA[9],
            MOCK_DATA[11],
          ],
        },
        {
          key: 'categoryProductList',
          categoryName: 'Her',
          categoryProducts: [
            MOCK_DATA[12],
            MOCK_DATA[13],
            MOCK_DATA[14],
            MOCK_DATA[15],
          ],
        },
      ],
    ],
  },
  {
    title: 'brandList',
    data: [
      {
        key: 'brandList',
        title: 'Brands',
        list: [MOCK_DATA[16], MOCK_DATA[17], MOCK_DATA[18]],
      },
    ],
  },
  {
    title: 'trendingProducts',
    data: [
      {
        key: 'trendingProducts',
        list: [
          {
            title: 'men nike shoe',
            price: '$ 5506',
            image: MOCK_DATA[19],
          },
          {
            title: 'men nike shoe',
            price: '$ 5506',
            image: MOCK_DATA[20],
          },
          {
            title: 'men nike shoe',
            price: '$ 5506',
            image: MOCK_DATA[21],
          },
          {
            title: 'men nike shoe',
            price: '$ 5506',
            image: MOCK_DATA[22],
          },
        ],
      },
    ],
  },
];

const _renderItem = (item, callbacks) => {
  //extract all the callbacks
  const [] = callbacks;
  if (item instanceof Array) {
    return item.map((cItem, index) => {
      return (
        <View style={{gap: 8, marginBottom: index === 0 ? 8 : 0}}>
          <CategoryTitleRow
            title={cItem.categoryName}
            handleSeeAll={() => {}}
          />
          <FlatList
            data={cItem.categoryProducts}
            renderItem={({item, index}) => (
              <ProductItem
                item={{
                  source: {uri: item.imageUri},
                  placeholder: item.averageColor,
                  onPress: () => {},
                }}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={cStyles.gap16}
          />
        </View>
      );
    });
  }

  switch (item.key) {
    case 'categoryList': {
      return (
        <FlatList
          data={item.list}
          renderItem={({item, index}) => (
            <CategoryItem
              item={{
                title: item.categoryTitle,
                source: {uri: item.categoryImage.imageUri},
                placeholder: item.categoryImage.averageColor,
                onPress: () => {},
              }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={cStyles.gap16}
        />
      );
    }
    case 'newProductsList': {
      return (
        <FlatList
          data={item.list}
          renderItem={({item, index}) => {
            return (
              <NewProductItem
                key={index}
                item={{
                  source: {uri: item.categoryImage.imageUri},
                  placeholder: item.categoryImage.averageColor,
                  onPress: () => {},
                }}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={cStyles.gap16}
        />
      );
    }
    case 'brandList': {
      return (
        <View style={cStyles.gap8}>
          <CategoryTitleRow title={item.title} handleSeeAll={() => {}} />
          <FlatList
            data={item.list}
            renderItem={({item, index}) => {
              return (
                <BrandItem
                  item={{
                    source: {uri: item.imageUri},
                    placeholder: item.averageColor,
                    onPress: () => {},
                  }}
                />
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={cStyles.gap16}
          />
        </View>
      );
    }
    case 'trendingProducts': {
      return (
        <View style={cStyles.gap8}>
          <CategoryTitleRow title={'Trending'} handleSeeAll={() => {}} />
          <FlatList
            data={item.list}
            renderItem={({item}) => (
              <ProductGridItem
                item={{
                  source: {uri: item.image.imageUri},
                  title: item.title,
                  price: item.price,
                  placeholder: item.image.averageColor,
                  onPress: () => {},
                }}
              />
            )}
            numColumns={2}
            columnWrapperStyle={[cStyles.gap16, cStyles.mb16]}
            showsVerticalScrollIndicator={false}
          />
        </View>
      );
    }
  }
  return null;
};

function Catalogue(): JSX.Element {
  const [catalogue, setCatalogue] = useState<Array<CatalogueItem> | null>([]);

  const fadeInValue = useRef<Animated.Value>(new Animated.Value(1)).current;

  const fadeInAnimation = useCallback((): void => {
    Animated.timing(fadeInValue, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
    }).start();
  }, [fadeInValue]);

  useEffect(() => {
    const loadCatalogue = async () => {
      const data = await getCatalogue();
      setCatalogue(data);
      fadeInAnimation();
    };
    // loadCatalogue();
  });

  if (catalogue === null) {
    return (
      <View style={styles.container}>
        <Text
          variant={'headlineMedium'}
          text={'Please wait, while we craft catalogues for you.'}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text variant={'headlineLarge'} text={'OliveStore'} />
      </View>
      <Animated.SectionList
        sections={data}
        keyExtractor={item => item.key + Math.random().toString()}
        renderItem={({item}: {item: any}): any => {
          return _renderItem(item, []);
        }}
        renderSectionHeader={() => <View />}
        contentContainerStyle={cStyles.gap4}
        style={[cStyles.pv16, {opacity: fadeInValue}]}
      />
    </View>
  );
}

export default Catalogue;
