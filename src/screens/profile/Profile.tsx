import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Text from '../../components/Text';
import colors from '../../theme/colors';
import {
  AddressIcon,
  HeartIcon,
  InfoIcon,
  LogoutIcon,
  OrdersIcon,
} from '../../components/AppIcon';
import {cStyles} from '../../theme/commonstyles';
import ProfileOption from './ProfileOption';

const width = Dimensions.get('screen').width;

const PROFILE_URL: string =
  'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60';

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileHeader: {padding: 16},
  profileMain: {
    paddingHorizontal: 16,
    borderColor: colors.gray2,
  },
  profilePhotoAndName: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingBottom: 32,
  },
  profilePhoto: {
    height: 100,
    width: 100,
    borderRadius: 100,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: colors.gray2,
  },
  profileDetails: {gap: 8},
  appVersion: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

enum OPTIONS {
  address = 'address',
  orders = 'orders',
  wishlist = 'wishlist',
  logout = 'logout',
}

const optionList = [
  {
    option: OPTIONS.address,
    component: (
      <>
        <AddressIcon />
        <Text variant={'bodyMedium'} text={'Addresses'} />
      </>
    ),
  },
  {
    option: OPTIONS.orders,
    component: (
      <>
        <OrdersIcon />
        <Text variant={'bodyMedium'} text={'Orders'} />
      </>
    ),
  },
  {
    option: OPTIONS.wishlist,
    component: (
      <>
        <HeartIcon color={colors.gray8} />
        <Text variant={'bodyMedium'} text={'Wishlist'} />
      </>
    ),
  },
  {
    option: OPTIONS.logout,
    component: (
      <>
        <LogoutIcon />
        <Text variant={'bodyMedium'} text={'Logout'} />
      </>
    ),
  },
];

const handlePress = (option: OPTIONS) => {
  //
  if (option === OPTIONS.logout) {
  }
};

const Profile = () => {
  return (
    <View style={s.container}>
      <View style={s.profileHeader}>
        <Header />
        <Text variant={'headlineLarge'} text={'Profile'} />
      </View>
      <View style={s.profileMain}>
        <View style={s.profilePhotoAndName}>
          <Image source={{uri: PROFILE_URL}} style={s.profilePhoto} />
          <View style={s.profileDetails}>
            <Text variant={'titleMedium'} text={'Chetan Waghade'} />
            <Text variant={'bodySmall'} text={'Balance: $330'} />
          </View>
        </View>
        <View style={{}}>
          {optionList.map(
            (item: {option: OPTIONS; component: JSX.Element}, _idx: number) => (
              <ProfileOption
                onPress={() => {
                  handlePress(item.option);
                }}
                isLast={_idx + 1 === optionList.length}>
                {item.component}
              </ProfileOption>
            ),
          )}
        </View>
      </View>
      <View style={s.appVersion}>
        <InfoIcon size={18} />
        <Text
          variant={'bodySmall'}
          text={'App Version 0.0.1'}
          style={[cStyles.color_gray3]}
        />
      </View>
    </View>
  );
};

export default Profile;
