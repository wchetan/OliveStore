import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Header from '../../components/Header';
import Text from '../../components/Text';
import OrderProductCard from './OrderItem';
import OliveModal from '../../components/Modal';
import {ChevronRight, CloseIcon} from '../../components/AppIcon';
import {PressableIcon} from '../../components/Buttons';
import OrderStatus from './OrderStatus';
import colors from '../../theme/colors';
import {cStyles} from '../../theme/commonstyles';
import OrderItem from './OrderItem';

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {marginVertical: 8},
  orderTrackingTag: {
    marginBottom: 8,
    maxWidth: 100,
    paddingVertical: 2,
    paddingHorizontal: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
  orderTrackingTagGreen: {
    backgroundColor: 'green',
  },
  scrollViewStyle: {marginVertical: 8},
  scrollViewContentContainer: {
    gap: 10,
  },
});

const data = [
  {
    orderId: '#123e29302423',
    orderStatus: 'DELIVERED',
    orderQuantity: 2,
    orderExpectedDeliveryDate: '17 July 2023',
    orderProducts: [
      {
        productId: 'image111',
        productUrl:
          'https://images.unsplash.com/photo-1685356197017-2be13bd08747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      },
      {
        productId: 'image222',
        productUrl:
          'https://images.unsplash.com/photo-1685356197017-2be13bd08747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      },
    ],
  },
  {
    orderId: '#123e29302423',
    orderStatus: 'IN-PROGRESS',
    orderQuantity: 2,
    orderExpectedDeliveryDate: '17 July 2023',
    orderProducts: [
      {
        productId: 'image111',
        productUrl:
          'https://images.unsplash.com/photo-1685356197017-2be13bd08747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      },
      {
        productId: 'image222',
        productUrl:
          'https://images.unsplash.com/photo-1685356197017-2be13bd08747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      },
    ],
  },
];

const Orders = () => {
  const [loaded, setLoaded] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [loaded]);
  return (
    <View style={s.container}>
      <Header />
      <Text variant={'headlineLarge'} text={'Orders'} />
      {loaded ? (
        <ScrollView
          style={s.scrollViewStyle}
          contentContainerStyle={s.scrollViewContentContainer}>
          {data.map(product => (
            <OrderItem productData={product} />
          ))}
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={colors.gray4} size={'large'} />
        </View>
      )}
    </View>
  );
};

export default Orders;
