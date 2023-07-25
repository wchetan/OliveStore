import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {cStyles} from '../../theme/commonstyles';
import Text from '../../components/Text';
import colors from '../../theme/colors';

const s = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 8,
    borderColor: colors.gray2,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  productImage: {height: 100, width: 80},
  productDetailsContainer: {justifyContent: 'space-evenly'},
  productDetailsRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});

interface OrderDetailsProductCardProps {
  productData: any;
}

const OrderDetailsProductCard = ({
  productData,
}: OrderDetailsProductCardProps) => {
  const {image, title, quantity, price} = productData;
  return (
    <View style={s.container}>
      <Image source={{uri: image}} style={s.productImage} />
      <View style={s.productDetailsContainer}>
        <Text
          variant={'bodyLarge'}
          text={title}
          style={[cStyles.color_gray6]}
        />
        <View style={s.productDetailsRow}>
          <Text
            variant={'bodySmall'}
            text={'Quantity'}
            style={[cStyles.color_gray4]}
          />
          <Text
            variant={'bodySmall'}
            text={quantity}
            style={[cStyles.color_gray4]}
          />
        </View>
        <View style={s.productDetailsRow}>
          <Text
            variant={'bodySmall'}
            text={'Total Price '}
            style={[cStyles.color_gray4]}
          />
          <Text
            variant={'bodySmall'}
            text={`$ ${quantity * price}`}
            style={[cStyles.color_gray4]}
          />
        </View>
        <View style={s.productDetailsRow}>
          <Text
            variant={'bodySmall'}
            text={'Delivered On'}
            style={[cStyles.color_gray4]}
          />
          <Text
            variant={'bodySmall'}
            text={new Date().toDateString()}
            style={[cStyles.color_gray4]}
          />
        </View>
      </View>
    </View>
  );
};

export default OrderDetailsProductCard;
