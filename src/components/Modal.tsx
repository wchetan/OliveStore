import React, {useRef, useCallback, useEffect, PropsWithChildren} from 'react';
import {StyleSheet, Modal, Animated, Easing, Platform} from 'react-native';
const ss = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'white',
    padding: 16,
    width: '100%',
  },
});

interface IOliveModalProps extends PropsWithChildren {
  visible: boolean;
  setVisible(arg: boolean): void;
}

const OliveModal = ({
  visible,
  setVisible,
  children,
}: IOliveModalProps): JSX.Element => {
  const animatedTranslateY = useRef<Animated.Value>(
    new Animated.Value(10),
  ).current;

  const fadeOutAnimation = useCallback(() => {
    Animated.timing(animatedTranslateY, {
      toValue: 200,
      delay: 0,
      duration: 150,
      easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
      useNativeDriver: true,
    }).start(event => {
      if (event.finished) {
        setVisible(false);
      }
    });
  }, [animatedTranslateY, setVisible]);

  const fadeInAnimation = useCallback(() => {
    Animated.timing(animatedTranslateY, {
      toValue: 0,
      delay: 0,
      duration: 150,
      easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
      useNativeDriver: true,
    }).start();
  }, [animatedTranslateY]);

  useEffect(() => {
    if (visible) {
      fadeInAnimation();
    } else {
      fadeOutAnimation();
    }
  }, [visible, fadeInAnimation, fadeOutAnimation]);

  return (
    <Modal
      statusBarTranslucent
      animationType="fade"
      visible={visible}
      hardwareAccelerated={Platform.OS === 'android' ? true : false}
      transparent>
      <Animated.View style={ss.main}>
        <Animated.View
          style={[
            ss.body,
            {transform: [{translateY: animatedTranslateY}, {perspective: 100}]},
          ]}>
          {children}
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

export default OliveModal;
