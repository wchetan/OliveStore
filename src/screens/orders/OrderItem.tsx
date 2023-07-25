import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {cStyles} from '../../theme/commonstyles';
import Text from '../../components/Text';
import colors from '../../theme/colors';
import {ChevronRight} from '../../components/AppIcon';

const s = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.gray2,
    backgroundColor: 'white',
  },
  orderIdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.gray2,
  },
  orderTrackingTag: {
    marginBottom: 8,
    // maxWidth: 100,
    paddingVertical: 2,
    paddingHorizontal: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
  orderTrackingTagGreen: {backgroundColor: 'green'},
  orderTrackingTagOrange: {backgroundColor: 'orange'},
  orderTrackingTagGray: {backgroundColor: colors.gray4},
  orderDetailsContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.gray2,
  },
  scrollViewContentContainer: {gap: 10},
  orderProductImage: {height: 100, width: 100},
  orderActionContainer: {
    padding: 16,
  },
  trackOrderButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

interface OrderProductCard {
  productData: any;
}

const getOrderTrackingColor = status => {
  if (status === 'IN-PROGRESS') {
    return s.orderTrackingTagOrange;
  }
  if (status === 'DELIVERED') {
    return s.orderTrackingTagGreen;
  }
  return s.orderTrackingTagGray;
};

const OrderItem = ({productData}: OrderProductCard) => {
  const {
    orderId,
    orderStatus,
    orderQuantity,
    orderExpectedDeliveryDate,
    orderProducts,
  } = productData;

  return (
    <View style={s.container}>
      <View style={s.orderIdContainer}>
        <View>
          <Text variant={'titleMedium'} text={'Order Number'} />
          <Text
            variant={'bodySmall'}
            text={orderId}
            style={cStyles.color_gray6}
          />
        </View>
        <Text
          variant={'bodyMedium'}
          text={orderStatus}
          style={[s.orderTrackingTag, getOrderTrackingColor(orderStatus)]}
        />
      </View>
      <View style={s.orderDetailsContainer}>
        <View style={cStyles.mb8}>
          <Text variant={'titleMedium'} text={`${orderQuantity} Items`} />
          <Text
            variant={'bodySmall'}
            text={`Delivery Expected, ${orderExpectedDeliveryDate}`}
            style={cStyles.color_gray6}
          />
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={s.scrollViewContentContainer}>
          {orderProducts.map((product: any) => (
            <TouchableOpacity>
              <Image
                source={{uri: product.productUrl}}
                style={s.orderProductImage}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={s.orderActionContainer}>
        <TouchableOpacity style={s.trackOrderButton}>
          <Text variant={'titleMedium'} text={'Track Order'} />
          <ChevronRight />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
