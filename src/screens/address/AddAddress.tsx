import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Text from '../../components/Text';
import colors from '../../theme/colors';
import {cStyles} from '../../theme/commonstyles';
import Header from '../../components/Header';
import {PrimaryButton} from '../../components/Buttons';

const width = Dimensions.get('window').width;

const s = StyleSheet.create({
  container: {flex: 1, padding: 16},
  formContainer: {paddingVertical: 8, gap: 16},
  textInputCommon: {
    borderWidth: 1,
    borderColor: colors.gray2,
    color: colors.gray8,
    fontWeight: 'bold',
    padding: 16,
  },
  textInputName: {
    width: width / 2 - (16 + 5), //16 - horizontal padding, 5 is gap between two inputs
    overflow: 'scroll',
  },
  twoInputContainer: {
    gap: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  addressActionContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    padding: 16,
  },
  addressTypeBtn: {
    width: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: colors.gray2,
  },
  addressTypeSection: {flexDirection: 'row', gap: 10},
  addressTypeContainer: {gap: 10},
});

type AddressType = 'Home' | 'Office' | 'Other';

type FormType = {
  firstName: string;
  lastName: string;
  phone: string;
  addressType: AddressType;
  pincode: string;
  city: string;
  state: string;
  locality: {
    main: string;
    sub: string;
  };
};

const getError = (inputType: 'pincode' | 'phone', value: string) => {
  switch (inputType) {
    case 'pincode':
      if (typeof value === 'string') {
        if (value.length < 6) {
          return 'Invalid pincode';
        }
      }
      break;
    case 'phone':
      if (typeof value === 'string') {
        if (value.length < 10) {
          return 'Invalid phone';
        }
      }
      break;
  }
};

const AddressType = ({
  type,
  isActive,
  onPress,
}: {
  type: AddressType;
  isActive: boolean;
  onPress: (type: AddressType) => void;
}) => {
  const touchableStyle = [
    s.addressTypeBtn,
    isActive ? {backgroundColor: colors.gray8, borderWidth: 0} : {},
  ];
  const touchableTextStyle = [isActive ? {color: 'white'} : {}];
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={touchableStyle}
      onPress={() => {
        onPress(type);
      }}>
      <Text variant={'bodySmall'} text={type} style={touchableTextStyle} />
    </TouchableOpacity>
  );
};

const addressTypeArray: Array<AddressType> = ['Home', 'Office', 'Other'];

const getIfEmpty = (form: FormType) => {
  let empty: boolean = false;
  if (form.firstName.length === 0) {
    empty = true;
  }
  if (form.lastName.length === 0) {
    empty = true;
  }
  if (form.city.length === 0) {
    empty = true;
  }
  if (form.state.length === 0) {
    empty = true;
  }
  if (form.locality.main.length === 0) {
    empty = true;
  }
  if (form.locality.sub.length === 0) {
    empty = true;
  }
  return empty;
};

const AddAddress = () => {
  const [form, setForm] = useState<FormType>({
    firstName: '',
    lastName: '',
    phone: '',
    addressType: 'Home',
    pincode: '',
    city: '',
    state: '',
    locality: {
      main: '',
      sub: '',
    },
  });
  const [error, setError] = useState<{phone?: string; pincode?: string}>();

  const enableSubmit =
    error?.phone === undefined &&
    error?.pincode === undefined &&
    !getIfEmpty(form);

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <KeyboardAvoidingView
      style={s.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <Header />
          <Text variant={'headlineLarge'} text={'New Address'} />
          <View style={s.formContainer}>
            <View style={s.twoInputContainer}>
              <TextInput
                value={form.firstName}
                onChangeText={newValue => {
                  const newForm = {...form, firstName: newValue};
                  setForm(newForm);
                }}
                style={[s.textInputCommon, s.textInputName]}
                placeholder="First Name"
              />
              <TextInput
                value={form.lastName}
                onChangeText={newValue => {
                  const newForm = {...form, lastName: newValue};
                  setForm(newForm);
                }}
                style={[s.textInputCommon, s.textInputName]}
                placeholder="Last Name"
              />
            </View>
            <View>
              <TextInput
                keyboardType={'phone-pad'}
                value={form.phone}
                onChangeText={newValue => {
                  const newForm = {...form, phone: newValue};
                  setForm(newForm);
                }}
                onFocus={() => {
                  const newError = {...error, phone: ''};
                  setError(newError);
                }}
                onBlur={() => {
                  const newError = {
                    ...error,
                    phone: getError('phone', form.phone),
                  };
                  setError(newError);
                }}
                style={[s.textInputCommon]}
                placeholder="Phone"
              />
              {error?.phone && (
                <Text
                  variant={'bodySmall'}
                  text={`* ${error?.phone}`}
                  style={[cStyles.mt8, cStyles.color_red]}
                />
              )}
            </View>
            <View style={s.twoInputContainer}>
              <View>
                <TextInput
                  keyboardType={'number-pad'}
                  value={form.pincode}
                  onChangeText={newValue => {
                    const newForm = {...form, pincode: newValue};
                    setForm(newForm);
                  }}
                  style={[s.textInputCommon, s.textInputName]}
                  placeholder="Pincode"
                  maxLength={6}
                  onFocus={() => {
                    const newError = {...error, pincode: ''};
                    setError(newError);
                  }}
                  onBlur={() => {
                    const newError = {
                      phone: error?.phone,
                      pincode: getError('pincode', form.pincode),
                    };
                    setError(newError);
                  }}
                />
                {error?.pincode && (
                  <Text
                    variant={'bodySmall'}
                    text={`* ${error?.pincode}`}
                    style={[cStyles.mt8, cStyles.color_red]}
                  />
                )}
              </View>
              <View>
                <TextInput
                  value={form.city}
                  onChangeText={newValue => {
                    const newForm = {...form, city: newValue};
                    setForm(newForm);
                  }}
                  style={[s.textInputCommon, s.textInputName]}
                  placeholder="City"
                />
              </View>
            </View>
            <TextInput
              value={form.state}
              onChangeText={newValue => {
                const newForm = {...form, state: newValue};
                setForm(newForm);
              }}
              style={[s.textInputCommon]}
              placeholder="State"
            />
            <TextInput
              value={form.locality.main}
              onChangeText={newValue => {
                const newForm = {
                  ...form,
                  locality: {...form.locality, main: newValue},
                };
                setForm(newForm);
              }}
              style={[s.textInputCommon]}
              placeholder="Flat House, Building, Apartment"
            />
            <TextInput
              value={form.locality.sub}
              onChangeText={newValue => {
                const newForm = {
                  ...form,
                  locality: {...form.locality, sub: newValue},
                };
                setForm(newForm);
              }}
              style={[s.textInputCommon]}
              placeholder="Steet Name, Sector, Area"
            />
          </View>
          <View style={[cStyles.mv8, s.addressTypeContainer]}>
            <Text variant={'bodyLarge'} text={'Address Type'} style={{}} />
            <View style={s.addressTypeSection}>
              {addressTypeArray.map(type => {
                return (
                  <AddressType
                    type={type}
                    onPress={selectedType => {
                      const newForm = {...form, addressType: selectedType};
                      setForm(newForm);
                    }}
                    isActive={type === form.addressType}
                  />
                );
              })}
            </View>
          </View>
          <View style={s.addressActionContainer}>
            {enableSubmit && (
              <PrimaryButton title="Save Address" onPress={handleSubmit} />
            )}
          </View>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddAddress;
