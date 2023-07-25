import React from 'react';
import NetworkImage from '../../components/NetworkImage';
import {StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../theme/colors';

const s = StyleSheet.create({
  container: {
    width: 90,
    height: 110,
    borderWidth: 1,
    borderColor: colors.gray2,
  },
  image: {
    width: 88,
    height: 108,
  },
});

interface IProductItemProps {
  source: number | {uri: string};
  onPress: () => void;
  placeholder: string;
}

const ProductItem = ({item}: {item: IProductItemProps}) => {
  const {source, placeholder, onPress} = item;
  return (
    <TouchableOpacity style={s.container} onPress={onPress} activeOpacity={0.7}>
      <NetworkImage
        placeholderColor={placeholder}
        source={source}
        style={s.image}
      />
    </TouchableOpacity>
  );
};

export default ProductItem;
