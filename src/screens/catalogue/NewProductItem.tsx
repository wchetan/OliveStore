import {Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import NetworkImage from '../../components/NetworkImage';
const {width} = Dimensions.get('screen');

interface INewProductItemProps {
  source: number | {uri: string};
  placeholder: string;
  onPress: () => {};
}

const s = StyleSheet.create({
  container: {width: width - 1},
  image: {height: 150, width: width - 1, resizeMode: 'cover'},
});

const NewProductItem = ({item}: {item: INewProductItemProps}) => {
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

export default NewProductItem;
