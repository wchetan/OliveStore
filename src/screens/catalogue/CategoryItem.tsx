import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import NetworkImage from '../../components/NetworkImage';
import Text from '../../components/Text';

interface ICategoryItemProps {
  source: number | {uri: string};
  title: string;
  onPress: () => void;
  placeholder: string;
}

const s = StyleSheet.create({
  container: {
    width: 80,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
  },
  title: {fontSize: 10},
});

const CategoryItem = ({item}: {item: ICategoryItemProps}) => {
  const {source, title, placeholder, onPress} = item;
  return (
    <TouchableOpacity style={s.container} onPress={onPress}>
      <NetworkImage
        placeholderColor={placeholder}
        source={source}
        style={s.image}
      />
      <Text variant="bodySmall" text={title} style={s.title} />
    </TouchableOpacity>
  );
};

export default CategoryItem;
