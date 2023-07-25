import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import NetworkImage from '../../components/NetworkImage';

const s = StyleSheet.create({
  container: {
    width: 190,
    height: 110,
    borderWidth: 1,
    borderColor: colors.gray2,
  },
  image: {
    width: 188,
    height: 108,
  },
});

interface IBrandItemProps {
  source: number | {uri: string};
  placeholder: string;
  onPress: () => void;
}

const BrandItem = ({item}: {item: IBrandItemProps}) => {
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

export default BrandItem;
