import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Text from '../../components/Text';
import {cStyles} from '../../theme/commonstyles';
import WishlistItem from './WishlistItem';

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {paddingHorizontal: 16, paddingTop: 16},
  totalItems: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  listContainer: {paddingVertical: 16},
  wlContainer: {},
});

const list = [];

list.length = 10;

const Wishlist = () => {
  return (
    <View style={s.container}>
      <View style={s.headerContainer}>
        <Header />
        <Text variant={'headlineLarge'} text={'Wishlist'} />
      </View>
      <View style={s.totalItems}>
        <Text
          variant={'bodyMedium'}
          text={'123 Items'}
          style={cStyles.color_gray6}
        />
      </View>
      <View style={s.listContainer}>
        <FlatList
          data={list}
          renderItem={({item, index}) => <WishlistItem />}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 8,
            paddingBottom: 100,
          }}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </View>
    </View>
  );
};

export default Wishlist;
