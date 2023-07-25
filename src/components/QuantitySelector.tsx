import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewProps,
  StyleSheet,
} from 'react-native';

interface IQuantitySelectorProps extends ViewProps {
  quantity: number;
  limit?: number;
  onIncrease(): void;
  onDecrease(): void;
}

const s = StyleSheet.create({
  container: {
    width: 100,
    height: 32,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  operatorContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: 'rgba(0,0,0,0.2)',
    borderRightColor: 'rgba(0,0,0,0.2)',
  },
  quantityLabel: {fontWeight: '600'},
});

const QuantitySelector = ({
  onDecrease,
  onIncrease,
  quantity,
  limit,
}: IQuantitySelectorProps): JSX.Element => {
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={onDecrease} style={s.operatorContainer}>
        <Text>-</Text>
      </TouchableOpacity>
      <View style={s.quantityContainer}>
        <Text style={s.quantityLabel}>{quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={onIncrease}
        disabled={quantity === limit}
        style={s.operatorContainer}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuantitySelector;
