import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Text from '../../components/Text';
import {ChevronRight} from '../../components/AppIcon';
import {cStyles} from '../../theme/commonstyles';

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

type CategoryTitleRowType = {
  title: string;
  handleSeeAll: () => void;
};

const CategoryTitleRow = ({title, handleSeeAll}: CategoryTitleRowType) => {
  return (
    <View style={s.container}>
      <Text variant="bodyMedium" text={title} />
      <TouchableOpacity
        style={s.pressable}
        onPress={handleSeeAll}
        activeOpacity={0.7}>
        <Text
          variant="bodySmall"
          text={'See all'}
          style={cStyles.color_gray4}
        />
        <ChevronRight />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryTitleRow;
