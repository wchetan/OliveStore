import React from 'react';
import {TextProps} from 'react-native';
import {Text as RNText} from 'react-native';
import {getVariantStyle} from '../theme/fonts';

interface TextType extends TextProps {
  text: string | number;
  variant: string;
}

const Text = (props: TextType): JSX.Element => {
  const variantStyle = getVariantStyle(props.variant);
  return (
    <RNText {...props} style={[variantStyle, props.style]}>
      {props.text}
    </RNText>
  );
};

export default Text;
