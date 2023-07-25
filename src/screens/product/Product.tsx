import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useContext} from 'react';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import {scale} from '../../utils/scaling';
import Text from '../../components/Text';
import colors from '../../theme/colors';
import {PressableIcon, PrimaryButton} from '../../components/Buttons';
import {HeartIcon, ShareIcon} from '../../components/AppIcon';
import {onShare} from '../../utils/share';
import {OliveStoreContext} from '../../context/olivecontext';
import {hideToast, showToast} from '../../store/actions';

const {width, height} = Dimensions.get('screen');

const s = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  header: {padding: 16, marginBottom: 8},
  // carousel: {flex: 0.3},
  productInfoContainer: {flex: 0.5, paddingHorizontal: 16},
  sizesContainer: {},
  sizesList: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  productTitle: {marginBottom: 8},
  productDescription: {color: colors.gray4, marginBottom: 8},
  productPriceContainer: {flexDirection: 'row', marginBottom: 8},
  productOriginalPrice: {
    marginLeft: 8,
    color: colors.gray4,
    textDecorationLine: 'line-through',
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.gray1,
  },
  controlLeftContainer: {flex: 0.4, flexDirection: 'row'},
  pressableIconStyle: {
    marginRight: 16,
    backgroundColor: colors.gray1,
    padding: 16,
  },
  controlRightContainer: {flex: 0.58},
});

const c_data = {
  images: [
    'https://images.unsplash.com/photo-1686260194491-4686c7669fea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60',
    'https://plus.unsplash.com/premium_photo-1679816655240-341f19e8027d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1686070166268-d294098f82f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1685998766298-55eb50d947f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ],
  title: 'Long White Mak',
  description:
    'Lorem ipsom dolor simit, white colored maxxed out, on mak special',
  price: 1000,
  discount: 20,
};

const Product = () => {
  const {images, title, description, price, discount} = c_data;

  const {dispatch} = useContext(OliveStoreContext);

  const handleAdd = (): void => {
    dispatch(
      showToast({
        description: 'Added',
        subDescription: `${title} in cart`,
      }),
    );
  };

  const handleWishlist = (): void => {
    dispatch(
      showToast({
        description: 'Added',
        subDescription: `${title} to wishlist`,
      }),
    );
  };

  return (
    <View style={s.container}>
      {/* @todo missing callback */}
      <Header style={s.header} />

      {/* @audit-issue scrollview takes lot of space on larger device, fix it.  */}
      <ScrollView contentContainerStyle={{flex: 1, gap: 16}}>
        <View>
          <Carousel
            data={images}
            renderItem={(item, index) => (
              <Image
                key={index}
                source={{uri: item}}
                style={{
                  height: scale(height * 0.3),
                  width: scale(width * 0.95),
                  backgroundColor: 'green',
                }}
                // resizeMode={'contain'}
              />
            )}
            style={{}}
          />
        </View>
        <View style={s.productInfoContainer}>
          <Text variant="headlineSmall" text={title} style={s.productTitle} />
          <Text
            variant="bodyMedium"
            text={description}
            style={s.productDescription}
          />
          <View style={s.productPriceContainer}>
            <Text
              variant="titleMedium"
              text={`$ ${price - price * (discount / 100)}`}
            />
            <Text
              variant="titleMedium"
              text={`$ ${price}`}
              style={s.productOriginalPrice}
            />
          </View>

          <View style={s.sizesContainer}>
            <Text variant="bodySmall" text={'Sizes'} />
            <View style={s.sizesList}>
              {['28', '30', '32', '34', '36'].map(item => (
                <Pressable
                  key={item}
                  style={{
                    height: 36,
                    width: 36,
                    backgroundColor: colors.gray1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 16,
                  }}>
                  <Text
                    key={item}
                    variant={'bodyMedium'}
                    text={item}
                    style={{
                      color: colors.gray6,
                    }}
                  />
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={s.controlContainer}>
        <View style={s.controlLeftContainer}>
          <PressableIcon
            leftIcon={<ShareIcon />}
            onPress={() => {
              onShare('a string to share');
            }}
            style={s.pressableIconStyle}
          />
          <PressableIcon
            leftIcon={<HeartIcon />}
            onPress={handleWishlist}
            style={s.pressableIconStyle}
          />
        </View>
        <View style={s.controlRightContainer}>
          <PrimaryButton title="Add to Cart" onPress={handleAdd} />
        </View>
      </View>
    </View>
  );
};

export default Product;
