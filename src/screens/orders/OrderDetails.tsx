import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Text from '../../components/Text';
import {cStyles} from '../../theme/commonstyles';
import colors from '../../theme/colors';
import OrderStatus from './OrderStatus';
import OrderDetailsProductCard from './OrderDetailsItem';

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headingContainer: {paddingHorizontal: 16},
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderHeadline: {flexDirection: 'row', gap: 10, alignItems: 'baseline'},
  scrollViewContentContainer: {
    backgroundColor: 'white',
    paddingVertical: 8,
  },
  orderProductsContainer: {
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.gray2,
    gap: 10,
  },
  orderTrackingTag: {
    marginBottom: 8,
    maxWidth: 100,
    paddingVertical: 2,
    paddingHorizontal: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
  orderTrackingContainer: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.gray2,
  },
  orderTrackingTagGreen: {backgroundColor: 'green'},
  orderTrackingTagOrange: {backgroundColor: 'orange'},
  orderTrackingTagGray: {backgroundColor: colors.gray4},
  orderSummaryRow: {flexDirection: 'row', justifyContent: 'space-between'},
  orderAddressContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.gray2,
  },
  orderSummaryContainer: {
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.gray2,
  },
});

const data = {
  id: 1111,
  image:
    'https://images.unsplash.com/photo-1685356197017-2be13bd08747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  title: 'Apple SmartWatch',
  price: 450,
  quantity: 1,
  date: new Date().toDateString().slice(4, -1),
};

const allStatuses: Array<{
  status: string;
  description: string;
  date: string;
  progress: 'PENDING' | 'IN-PROGRESS' | 'COMPLETED';
}> = [
  {
    status: 'Order Placed',
    description: 'We have received your order',
    date: new Date().toDateString(),
    progress: 'COMPLETED',
  },
  {
    status: 'Order Confirmed',
    description: 'Order has been confirmed',
    date: new Date().toDateString(),
    progress: 'COMPLETED',
  },
  {
    status: 'Order Processed',
    description: 'We are processig your order',
    date: new Date().toDateString(),
    progress: 'COMPLETED',
  },
  {
    status: 'Ready To Ship',
    description: 'Your order is ready for shipping',
    date: new Date().toDateString(),
    progress: 'COMPLETED',
  },
  {
    status: 'Out For Delivery',
    description: 'Your order is out for delivery',
    date: new Date().toDateString(),
    progress: 'COMPLETED',
  },
];

const getOrderTrackingTag = (
  orderStatus: 'DELIVERED' | 'IN-PROGRESS' | 'PENDING',
) => {
  if (orderStatus === 'DELIVERED') {
    return (
      <Text
        variant={'titleSmall'}
        text={'DELIVERED'}
        style={[s.orderTrackingTag, s.orderTrackingTagGreen]}
      />
    );
  }
};

const OrderDetails = () => {
  return (
    <View style={s.container}>
      <View style={s.headingContainer}>
        <Header />
        <View style={s.orderContainer}>
          <View style={s.orderHeadline}>
            <Text variant={'headlineLarge'} text={'Order'} />
            <Text
              variant={'bodySmall'}
              text={'#id 12345667'}
              style={cStyles.color_gray4}
            />
          </View>
          {getOrderTrackingTag('DELIVERED')}
        </View>
      </View>
      <ScrollView contentContainerStyle={s.scrollViewContentContainer}>
        <View style={s.orderProductsContainer}>
          {[data, data].map(product => (
            <OrderDetailsProductCard productData={product} />
          ))}
        </View>
        <View style={s.orderTrackingContainer}>
          <Text
            variant={'titleMedium'}
            text={'Order Tracking'}
            style={[cStyles.color_gray6, cStyles.mb8]}
          />
          {allStatuses.map((statusItem, order) => (
            <OrderStatus
              item={statusItem}
              order={order}
              first={0}
              last={allStatuses.length - 1}
            />
          ))}
        </View>
        <View style={s.orderAddressContainer}>
          <Text
            variant={'titleMedium'}
            text={'Address Details'}
            style={[cStyles.color_gray6, cStyles.mb8]}
          />
          <View>
            <Text
              variant={'bodySmall'}
              text={
                'Flat no 7, 4th Floor, Harshal Park Wing B, Dnyandeep Colony, Near Lane No 1, Karve Nagar, Pune 411052'
              }
              style={[cStyles.color_gray6, cStyles.mb8]}
            />
            <Text
              variant={'bodySmall'}
              text={'Phone no - +91 - 7559279778'}
              style={[cStyles.color_gray6, cStyles.mb8]}
            />
          </View>
        </View>

        <View style={s.orderSummaryContainer}>
          <Text
            variant={'titleMedium'}
            text={'Order Summary'}
            style={[cStyles.color_gray6, cStyles.mb8]}
          />
          <View style={s.orderSummaryRow}>
            <Text
              variant={'bodySmall'}
              text={'MRP'}
              style={[cStyles.color_gray6, cStyles.mb8]}
            />
            <Text
              variant={'bodySmall'}
              text={'$1999'}
              style={[cStyles.color_gray6, cStyles.mb8]}
            />
          </View>
          <View style={s.orderSummaryRow}>
            <Text
              variant={'bodySmall'}
              text={'Total Item'}
              style={[cStyles.color_gray6, cStyles.mb8]}
            />
            <Text
              variant={'bodySmall'}
              text={'3'}
              style={[cStyles.color_gray6, cStyles.mb8]}
            />
          </View>
          <View style={s.orderSummaryRow}>
            <Text
              variant={'bodySmall'}
              text={'Delivery Charges'}
              style={[cStyles.color_gray6, cStyles.mb8]}
            />
            <Text
              variant={'bodySmall'}
              text={'$40'}
              style={[cStyles.color_gray6, cStyles.mb8]}
            />
          </View>
          <View style={s.orderSummaryRow}>
            <Text
              variant={'bodySmall'}
              text={'Payment Method'}
              style={[cStyles.color_gray6, cStyles.mb8]}
            />
            <Text
              variant={'bodySmall'}
              text={'UPI'}
              style={[cStyles.color_gray6, cStyles.mb8]}
            />
          </View>
          <View style={s.orderSummaryRow}>
            <Text
              variant={'bodySmall'}
              text={'Total Order Amount'}
              style={[cStyles.color_gray6, cStyles.mb8]}
            />
            <Text
              variant={'bodySmall'}
              text={'$2500'}
              style={[cStyles.color_gray6, cStyles.mb8]}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetails;
