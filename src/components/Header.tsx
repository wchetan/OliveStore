import React from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BackIcon} from './AppIcon';
import {HITSLOP24} from '../constants';

const s = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // paddingVertical: 4,
  },
  toContainer: {height: 24, width: 24},
});

type HeaderProps = {
  style?: StyleProp<{}>;
};

// @todo add back button behaviour
const Header = ({style}: HeaderProps) => {
  return (
    <View style={[s.container, style]}>
      <TouchableOpacity
        activeOpacity={0.7}
        hitSlop={HITSLOP24}
        style={s.toContainer}>
        <BackIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
