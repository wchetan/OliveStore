import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {
  PressableIcon,
  PressableText,
  PrimaryButton,
} from '../../components/Buttons';
import Text from '../../components/Text';
import {cStyles} from '../../theme/commonstyles';
import colors from '../../theme/colors';
import {CloseIcon} from '../../components/AppIcon';
const {height, width} = Dimensions.get('screen');
const url =
  'https://images.pexels.com/photos/17412404/pexels-photo-17412404/free-photo-of-light-city-architecture-airport.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load';

const s = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 16,
    borderWidth: 1,
    borderColor: colors.gray2,
    width: width / 2 - 24,
  },
  closeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    padding: 8,
  },
  image: {
    height: height * 0.2,
    width: '100%',
    resizeMode: 'contain',
    backgroundColor: colors.gray1,
    borderWidth: 1,
    borderColor: colors.gray2,
  },
  productDetails: {paddingTop: 16, paddingHorizontal: 16, gap: 8},
  wishlistItemActions: {
    borderTopWidth: 1,
    borderColor: colors.gray2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

const WishlistItem = () => {
  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={s.container}>
        <View style={{}}>
          <View style={s.closeContainer}>
            <PressableIcon
              leftIcon={<CloseIcon color={colors.gray3} />}
              onPress={() => {}}
            />
          </View>
          <Image source={{uri: url}} style={s.image} />
          <View style={s.productDetails}>
            <Text variant={'bodyMedium'} text={'Full sleeve tshirt'} />
            <Text variant={'bodySmall'} text={'$ 450'} />
          </View>
        </View>
        <View style={s.wishlistItemActions}>
          <PressableText
            title="ADD TO CART"
            variant="bodyMedium"
            onPress={() => {}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WishlistItem;
