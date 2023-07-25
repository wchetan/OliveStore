import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ChevronRight} from '../../components/AppIcon';
import colors from '../../theme/colors';
import {cStyles} from '../../theme/commonstyles';

const s = StyleSheet.create({
  contaienr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.gray2,
    padding: 16,
    gap: 16,
  },
  childContainer: {gap: 16, flexDirection: 'row', alignItems: 'center'},
});

interface IProfileOption {
  children: JSX.Element;
  onPress: () => void;
  isLast: boolean;
}

const ProfileOption = ({children, onPress, isLast}: IProfileOption) => {
  return (
    <TouchableOpacity
      style={[s.contaienr, isLast ? cStyles.bbw1 : {}]}
      onPress={onPress}>
      <View style={s.childContainer}>{children}</View>
      <ChevronRight />
    </TouchableOpacity>
  );
};

export default ProfileOption;
