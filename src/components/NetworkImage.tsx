import React, {Fragment, useRef, useState, useMemo} from 'react';
import {Image, ImageProps, StyleSheet, Animated, Easing} from 'react-native';
import {convertToFlat} from '../utils/helpers';
const s = StyleSheet.create({
  placeholder: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});

interface NetworkImageProps extends ImageProps {
  placeholderColor: string;
}

const NetworkImage = (props: NetworkImageProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);
  const fadeInValue = useRef<Animated.Value>(new Animated.Value(1)).current;
  const {placeholderColor, style: placeholderStyle, borderRadius} = props;
  const placeholderValue = useMemo(() => {
    return convertToFlat(placeholderColor);
  }, [placeholderColor]);
  const fadeIn = () => {
    Animated.timing(fadeInValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
      useNativeDriver: true,
    }).start(e => {
      if (e.finished) {
        setLoaded(true);
      }
    });
  };
  return (
    <Fragment>
      <Image
        {...props}
        onLoadEnd={() => {
          setTimeout(() => {
            fadeIn();
          }, 3000);
        }}
      />
      {!loaded && (
        <Animated.View
          style={[
            s.placeholder,
            placeholderStyle,
            {
              backgroundColor: placeholderValue,
              borderRadius,
              opacity: fadeInValue,
            },
          ]}
        />
      )}
    </Fragment>
  );
};

export default NetworkImage;
