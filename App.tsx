import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import React from 'react';
import Catalogue from './src/screens/catalogue';
import OrderDetails from './src/screens/orders/OrderDetails';
import Orders from './src/screens/orders/Orders';
import colors from './src/theme/colors';
import Address from './src/screens/address/Address';
import AddAddress from './src/screens/address/AddAddress';
import Product from './src/screens/product/Product';
import Profile from './src/screens/profile/Profile';
import Search from './src/screens/search/Search';
import Wishlist from './src/screens/wishlist/Wishlist';
import Checkout from './src/screens/checkout/Checkout';
import List from './src/screens/list/List';

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

const App = () => {
  return (
    <SafeAreaView style={s.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.background}
      />
      <Catalogue />
      {/* <OrderDetails /> */}
      {/* <Orders /> */}
      {/* <Address /> */}
      {/* <AddAddress /> */}
      {/* <Product /> */}
      {/* <Profile /> */}
      {/* <Search /> */}
      {/* <Wishlist /> */}
      {/* <List /> */}
      {/* <Checkout /> */}
    </SafeAreaView>
  );
};

export default App;
