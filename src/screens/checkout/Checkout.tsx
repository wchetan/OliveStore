import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Header from '../../components/Header';
import Text from '../../components/Text';
import {PrimaryButton} from '../../components/Buttons';
import {cStyles} from '../../theme/commonstyles';
import colors from '../../theme/colors';
import CheckoutProductCard from './CheckoutProductCard';
import {EmptyCart} from '../../components/AppIcon';
const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.gray2,
  },
  checkoutDetails: {
    justifyContent: 'center',
  },
  priceContainer: {marginVertical: 16},
  priceDetailsText: {marginBottom: 8},
  subPriceDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  proceedButton: {maxWidth: 200},
  emptyCartContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  emptyCartText: {marginTop: 16},
});

const Checkout = () => {
  const [checkoutProducts, setCheckoutProducts] = useState([
    {
      id: 1111,
      image:
        'https://images.unsplash.com/photo-1685356197017-2be13bd08747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      title: 'Apple SmartWatch',
      price: 450,
      quantity: 1,
    },
    {
      id: 2221,
      image:
        'https://images.unsplash.com/photo-1685356197017-2be13bd08747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      title: 'Apple SmartTV',
      price: 450,
      quantity: 1,
    },
  ]);

  useLayoutEffect(() => {
    // setCheckoutProducts();
  }, []);

  if (checkoutProducts.length === 0) {
    return (
      <View style={s.container}>
        <Header />
        <View style={s.emptyCartContainer}>
          <EmptyCart />
          <Text
            variant={'bodySmall'}
            text={'Oops! Please go back & add something in cart'}
            style={[cStyles.color_gray4, s.emptyCartText]}
          />
        </View>
      </View>
    );
  }

  const handleQuantityDecrease = (productId: number) => {
    const newCheckoutProducts = checkoutProducts.map(productItem => {
      if (productItem.id === productId) {
        if (productItem.quantity > 1) {
          return {
            ...productItem,
            quantity: productItem.quantity - 1,
          };
        }
        return productItem;
      }
      return productItem;
    });
    setCheckoutProducts(newCheckoutProducts);
  };

  const handleQuantityIncrease = (productId: number) => {
    const newCheckoutProducts = checkoutProducts.map(productItem => {
      if (productItem.id === productId) {
        return {
          ...productItem,
          quantity: productItem.quantity + 1,
        };
      }
      return productItem;
    });
    setCheckoutProducts(newCheckoutProducts);
  };

  const removeProduct = (productId: number) => {
    const newCheckoutProducts = checkoutProducts.filter(
      productItem => productItem.id === productId,
    );
    setCheckoutProducts(newCheckoutProducts);
  };

  const totalAmount = checkoutProducts.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  );

  return (
    <View style={s.container}>
      <Header />
      <Text variant={'headlineLarge'} text={'Checkout'} />
      <ScrollView style={{}} nestedScrollEnabled>
        {checkoutProducts.map((item: any, index) => {
          return (
            <CheckoutProductCard
              key={index}
              item={item}
              onQuantityDecrease={() => {
                handleQuantityDecrease(item.id);
              }}
              onQuantityIncrease={() => {
                handleQuantityIncrease(item.id);
              }}
              removeProduct={() => {
                removeProduct(item.id);
              }}
            />
          );
        })}
        <View style={s.priceContainer}>
          <Text
            variant={'titleMedium'}
            text={'Price Details'}
            style={[cStyles.color_gray5, s.priceDetailsText]}
          />
          <View style={s.subPriceDetailsContainer}>
            <Text
              variant={'bodySmall'}
              text={'Sub Total'}
              style={[cStyles.color_gray5]}
            />
            <Text
              variant={'bodyMedium'}
              text={'$ 170'}
              style={[cStyles.color_gray4]}
            />
          </View>
        </View>
      </ScrollView>
      <View style={s.actions}>
        <View style={s.checkoutDetails}>
          <Text
            variant={'titleMedium'}
            text={`$ ${totalAmount}`}
            style={cStyles.mb4}
          />
          <Text
            variant={'bodySmall'}
            text={'Grand Total'}
            style={cStyles.color_gray4}
          />
        </View>
        <PrimaryButton
          title="Proceed"
          onPress={() => {}}
          buttonStyle={s.proceedButton}
        />
      </View>
    </View>
  );
};

export default Checkout;
