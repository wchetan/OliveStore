import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../theme/colors';
import {cStyles} from '../theme/commonstyles';
import Text from './Text';
import {HITSLOP} from '../constants';

const s = StyleSheet.create({
  pressableIconContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  pressableIconTitle: {
    marginLeft: 4,
    color: colors.gray6,
  },
  primaryButtonContainer: {
    width: '100%',
    padding: 18,
    backgroundColor: colors.gray8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryText: {color: colors.gray1, textTransform: 'capitalize'},
  pressableTextTitle: {
    color: colors.gray8,
  },
  radioContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  radioOuter: {
    backgroundColor: 'white',
    height: 18,
    width: 18,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  radioInner: {
    borderRadius: 10,
    height: 10,
    width: 10,
    backgroundColor: 'black',
  },
});

interface IPressableIconProps {
  onPress(): void;
  title?: string;
  leftIcon?: JSX.Element;
  style?: StyleProp<object>;
}

export const PressableIcon = ({
  onPress,
  title,
  leftIcon,
  style,
}: IPressableIconProps): JSX.Element => {
  return (
    <Pressable
      style={[s.pressableIconContainer, title ? cStyles.jcsb : {}, style]}
      onPress={onPress}>
      {leftIcon && leftIcon}
      {title && (
        <Text variant={'bodySmall'} style={s.pressableIconTitle} text={title} />
      )}
    </Pressable>
  );
};

interface IPressableTextProps {
  onPress(): void;
  title?: string;
  style?: StyleProp<object>;
  variant?: string;
}

export const PressableText = ({
  onPress,
  title,
  style,
  variant = 'bodySmall',
}: IPressableTextProps): JSX.Element => {
  if (!title) {
    throw new Error('title not provide');
  }
  return (
    <TouchableOpacity
      hitSlop={HITSLOP}
      style={[s.pressableIconContainer, title ? cStyles.jcsb : {}, style]}
      onPress={onPress}>
      {title && (
        <Text variant={variant} style={s.pressableTextTitle} text={title} />
      )}
    </TouchableOpacity>
  );
};

interface IPrimaryButtonProps {
  title: string;
  onPress(): void;
  buttonStyle?: StyleProp<object>;
  textStyle?: StyleProp<object>;
}

export const PrimaryButton = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
}: IPrimaryButtonProps) => {
  if (!title || !onPress) {
    throw new Error('title or onPress is undefined');
  }

  return (
    <Pressable
      onPressIn={onPress}
      style={[s.primaryButtonContainer, buttonStyle]}>
      <Text
        variant="bodyMedium"
        text={title}
        style={[s.primaryText, textStyle]}
      />
    </Pressable>
  );
};

interface RadioButtonProps {
  title: string;
  active: boolean;
  setActive: (title: any) => void;
}

export const RadioButton = ({title, active, setActive}: RadioButtonProps) => {
  return (
    <TouchableOpacity
      style={s.radioContainer}
      onPress={() => {
        setActive(title);
      }}>
      <View style={s.radioOuter}>
        {active && <View style={s.radioInner} />}
      </View>
      <Text variant="bodyMedium" text={title} />
    </TouchableOpacity>
  );
};
