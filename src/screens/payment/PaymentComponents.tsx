import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Text from '../../components/Text';
import {MinusIcon, PlusIcon} from '../../components/AppIcon';

const s = StyleSheet.create({
  collapseHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

interface CollapsibleProps {
  collapseTitle: string;
  children: JSX.Element;
}

export const Collapsible = ({collapseTitle, children}: CollapsibleProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <TouchableOpacity onPress={handleCollapse} activeOpacity={0.7}>
      <View style={s.collapseHeading}>
        <Text variant="titleSmall" text={collapseTitle} />
        {collapsed ? <MinusIcon /> : <PlusIcon />}
      </View>
      {collapsed && children}
    </TouchableOpacity>
  );
};
