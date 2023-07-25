import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../theme/colors';
import Text from './Text';

interface ISelectableProps {
  title: string;
  marked: boolean;
  onSelect(): void;
}

const s = StyleSheet.create({
  selectableTitle: {
    color: colors.gray8,
  },
  container: {
    paddingVertical: 8,
  },
  containerMarked: {
    backgroundColor: colors.gray8,
  },
  title: {
    color: colors.gray8,
  },
  titleMarked: {
    paddingLeft: 8,
    color: colors.gray1,
  },
});

const Selectable = ({
  title,
  marked,
  onSelect,
}: ISelectableProps): JSX.Element => {
  return (
    <TouchableOpacity
      key={title}
      onPress={onSelect}
      style={[s.container, marked ? s.containerMarked : {}]}>
      <Text
        variant={'bodySmall'}
        text={title}
        style={[s.selectableTitle, marked && s.titleMarked]}
      />
    </TouchableOpacity>
  );
};

export default Selectable;
