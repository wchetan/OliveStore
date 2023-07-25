import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import NetworkImage from '../../components/NetworkImage';
import Text from '../../components/Text';
import colors from '../../theme/colors';

const {width, height} = Dimensions.get('screen');

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productContainer: {
    borderWidth: 1,
    borderColor: colors.gray2,
  },
  image: {
    height: height * 0.25,
    width: width * 0.5 - 26,
  },
  productDescription: {padding: 8, gap: 2},
});

type ProductType = {
  source: number | {uri: string};
  title: string;
  price: string;
  placeholder: string;
  onPress: () => {};
};

const ProductGridItem = ({item}: {item: ProductType}) => {
  const {source, title, price, placeholder, onPress} = item;
  return (
    <TouchableOpacity
      style={s.productContainer}
      onPress={onPress}
      activeOpacity={0.7}>
      <NetworkImage
        placeholderColor={placeholder}
        source={source}
        style={s.image}
      />
      <View style={s.productDescription}>
        <Text variant={'bodyMedium'} text={title} />
        <Text variant={'bodySmall'} text={price} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductGridItem;
