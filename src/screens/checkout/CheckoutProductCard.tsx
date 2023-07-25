import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import QuantitySelector from '../../components/QuantitySelector';
import Text from '../../components/Text';
import {cStyles} from '../../theme/commonstyles';
import colors from '../../theme/colors';
import {CloseIcon} from '../../components/AppIcon';

const s = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 12,
    borderColor: colors.gray2,
    flexDirection: 'row',
    marginVertical: 4,
    justifyContent: 'flex-start',
  },
  productImage: {height: 100, width: '30%', marginRight: 16},
  productContainer: {justifyContent: 'space-between'},
  closeContainer: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
});

interface CheckoutProductCardProps {
  item: {
    id: string;
    image: string;
    title: string;
    price: number;
    quantity: number;
  };
  onQuantityIncrease: () => void;
  onQuantityDecrease: () => void;
  removeProduct: () => void;
}

const CheckoutProductCard = ({
  item,
  onQuantityIncrease,
  onQuantityDecrease,
  removeProduct,
}: CheckoutProductCardProps) => {
  const {id, image, title, price, quantity} = item;
  return (
    <View key={id} style={s.container}>
      <Image source={{uri: image}} style={s.productImage} />
      <View style={s.productContainer}>
        <Text variant={'bodyLarge'} text={title} style={cStyles.color_gray6} />
        <Text
          variant={'bodyMedium'}
          text={`$ ${price}`}
          style={[cStyles.color_gray6]}
        />
        <QuantitySelector
          onIncrease={onQuantityIncrease}
          onDecrease={onQuantityDecrease}
          quantity={quantity}
        />
      </View>
      <View style={s.closeContainer}>
        <TouchableOpacity onPress={removeProduct} activeOpacity={0.8}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutProductCard;
