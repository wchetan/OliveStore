import {View, Dimensions, Animated, Easing, StyleSheet} from 'react-native';
import React, {useContext, useEffect, useRef} from 'react';
import Text from './Text';
import colors from '../theme/colors';
import {CloseIcon, InfoIcon} from './AppIcon';
import {PressableIcon} from './Buttons';
import {OliveStoreContext} from '../context/olivecontext';
import {hideToast} from '../store/actions';
import {cStyles} from '../theme/commonstyles';

const {width, height} = Dimensions.get('screen');

export const SHORT = 2000;
export const LONG = 5000;
// const enum POSITION {
//   TOP,
//   RIGHT,
//   BOTTOM,
//   LEFT,
// }

/*
@todo 
    Make this more dynamic
    Add Warning / Error / Info / Danger variant
*/

const s = StyleSheet.create({
  container: {
    height: height * 0.15,
    width: width,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  toastContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.gray3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 14,
  },
  textContent: {flex: 0.9},
  toastTitle: {color: colors.gray8, marginBottom: 4},
});

const Toast = (): JSX.Element | null => {
  const tY = useRef<Animated.Value>(new Animated.Value(50)).current;
  const opacity = useRef<Animated.Value>(new Animated.Value(0)).current;

  const {state, dispatch} = useContext(OliveStoreContext);
  const {visible, description, subDescription} = {
    visible: true,
    description: 'tewt',
    subDescription: 'testr',
  };

  const showUp = Animated.timing(tY, {
    toValue: 0,
    duration: 400,
    useNativeDriver: true,
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const opacityUp = Animated.timing(opacity, {
    toValue: 1,
    duration: 400,
    useNativeDriver: true,
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const appear = (onEnd: Function) => {
    Animated.parallel([showUp, opacityUp]).start(r => {
      if (r.finished) {
        setTimeout(() => {
          onEnd();
        }, 3000);
      }
    });
  };

  const showDown = Animated.timing(tY, {
    toValue: 100,
    duration: 450,
    useNativeDriver: true,
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const opacityDown = Animated.timing(opacity, {
    toValue: 0,
    duration: 350,
    useNativeDriver: true,
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const disappear = () => {
    Animated.parallel([showDown, opacityDown]).start(ev => {
      if (ev.finished) {
        dispatch(hideToast());
      }
    });
  };

  useEffect(() => {
    if (visible) {
      appear(disappear);
    }
  });

  if (!visible) {
    return null;
  }

  return (
    <Animated.View style={s.container}>
      <Animated.View
        style={[
          s.toastContainer,
          {transform: [{translateY: tY}], opacity: opacity},
        ]}>
        <InfoIcon />
        <View style={s.textContent}>
          <Text variant="titleMedium" text={description} style={s.toastTitle} />
          <Text
            variant="bodySmall"
            text={subDescription}
            style={cStyles.color_gray4}
          />
        </View>
        <PressableIcon onPress={disappear} leftIcon={<CloseIcon />} />
      </Animated.View>
    </Animated.View>
  );
};

export default Toast;
