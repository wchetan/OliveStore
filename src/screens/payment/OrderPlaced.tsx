import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../../components/Text';
import {PressableIcon} from '../../components/Buttons';
import {BackIcon, CheckIcon} from '../../components/AppIcon';
import colors from '../../theme/colors';

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    gap: 50,
    alignItems: 'center',
  },
  orderConfirmedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  orderOuterMost: {
    padding: 16,
    backgroundColor: colors.gray2,
    borderRadius: 100,
  },
  orderOuterIn: {
    padding: 16,
    backgroundColor: colors.gray4,
    borderRadius: 100,
  },
  orderInner: {
    padding: 16,
    backgroundColor: colors.gray6,
    borderRadius: 100,
  },
  continueShoppingBtn: {alignItems: 'center', gap: 10},
});

const OrderPlaced = () => {
  return (
    <View style={s.container}>
      <View style={s.main}>
        <View style={s.orderConfirmedContainer}>
          <View style={s.orderOuterMost}>
            <View style={s.orderOuterIn}>
              <View style={s.orderInner}>
                <CheckIcon />
              </View>
            </View>
          </View>
          <Text variant={'headlineLarge'} text={'Order Confirmed'} />
          <Text
            variant={'bodySmall'}
            text={'Your order was placed successfully.'}
          />
        </View>
        <PressableIcon
          title="Continue Shopping"
          onPress={() => {}}
          leftIcon={<BackIcon size={16} />}
          style={s.continueShoppingBtn}
        />
      </View>
    </View>
  );
};

export default OrderPlaced;
