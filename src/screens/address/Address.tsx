import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Text from '../../components/Text';
import colors from '../../theme/colors';
import {cStyles} from '../../theme/commonstyles';
import {PlusIcon} from '../../components/AppIcon';

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  addressContainer: {
    borderWidth: 1,
    borderColor: colors.gray2,
    marginVertical: 8,
  },
  addressHeadline: {
    borderBottomWidth: 1,
    borderColor: colors.gray2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  addressLine: {
    borderBottomWidth: 1,
    borderColor: colors.gray2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  phoneInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  addAddressBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray2,
    paddingVertical: 16,
  },
  addressActionContainer: {justifyContent: 'center'},
});

type AddressInfoType = {
  id: string;
  name: string;
  address: string;
  phone: string;
};
const AllAddress: Array<AddressInfoType> = [
  {
    id: '111111',
    name: 'Chetan Waghade',
    address:
      '',
    phone: '',
  },
  {
    id: '222222',
    name: 'John Doe',
    address:
      '',
    phone: '',
  },
  {
    id: '333333',
    name: 'Jane Doe',
    address:
      '',
    phone: '',
  },
];

// @todo refactor this later
interface AddressItemProps {
  addressInfo: AddressInfoType;
  addressIndex: number;
  isDefault: boolean;
  makeDefault?: (index: number) => void;
}

const AddressItem = ({
  addressInfo,
  isDefault,
  addressIndex,
  makeDefault,
}: AddressItemProps) => {
  const {id, name, address, phone} = addressInfo;
  //@todo name it better
  let active = isDefault ? (
    <Text variant={'bodySmall'} text={'Default'} style={cStyles.color_gray4} />
  ) : (
    <TouchableOpacity
      onPress={() => {
        console.log(addressIndex);
        makeDefault?.(addressIndex);
      }}>
      <Text
        variant={'bodySmall'}
        text={'Make Default'}
        style={cStyles.color_gray6}
      />
    </TouchableOpacity>
  );

  return (
    <View key={id} style={s.addressContainer}>
      <View style={s.addressHeadline}>
        <Text variant={'bodyMedium'} text={name} />
        {active}
      </View>
      <View style={s.addressLine}>
        <Text
          variant={'bodySmall'}
          text={address}
          style={[cStyles.color_gray4, cStyles.lh16]}
        />
      </View>
      <View style={s.phoneInfo}>
        <Text variant={'bodyMedium'} text={'Phone'} />
        <TouchableOpacity>
          <Text
            variant={'bodySmall'}
            text={phone}
            style={cStyles.color_gray4}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Address = () => {
  const [defaultIndex, setDefaultIndex] = useState<number>(0);
  const onSubmit = () => {};
  return (
    <View style={s.container}>
      <Header />
      <Text variant={'headlineLarge'} text={'Addresses'} />
      <View style={[s.addressActionContainer, cStyles.mv8]}>
        <TouchableOpacity
          onPress={() => {}}
          style={s.addAddressBtn}
          activeOpacity={0.7}>
          <PlusIcon />
          <Text
            variant={'bodyMedium'}
            text={'ADD ADDRESS'}
            style={cStyles.color_gray4}
          />
        </TouchableOpacity>
      </View>
      <View>
        <AddressItem
          addressInfo={AllAddress[defaultIndex]}
          addressIndex={defaultIndex}
          isDefault={true}
        />
        {AllAddress.map((address, index) => {
          if (index !== defaultIndex) {
            return (
              <AddressItem
                addressInfo={address}
                addressIndex={index}
                isDefault={false}
                makeDefault={setDefaultIndex}
              />
            );
          }
          return null;
        })}
      </View>
    </View>
  );
};

export default Address;
