import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Text from '../../components/Text';
import colors from '../../theme/colors';
import {cStyles} from '../../theme/commonstyles';
import {
  PressableText,
  PrimaryButton,
  RadioButton,
} from '../../components/Buttons';
import {Collapsible} from './PaymentComponents';

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  svContainer: {marginVertical: 16},
  deliveryAddressContainer: {
    borderWidth: 1,
    borderColor: colors.gray2,
    padding: 16,
    marginBottom: 16,
  },
  deliveryAddressHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  paymentDetailsContainer: {
    borderWidth: 1,
    borderColor: colors.gray2,
    marginBottom: 16,
  },
  paymentDetailsHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  paymentDetailsFooter: {
    borderTopColor: colors.gray2,
    borderTopWidth: 1,
  },
  paymentMethodsContainer: {
    borderWidth: 1,
    borderColor: colors.gray2,
    padding: 16,
    marginBottom: 16,
  },
  paymentMethodsHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  paymentMethodsMain: {gap: 10},
  codContainer: {padding: 16, borderWidth: 1, borderColor: colors.gray2},
  paymentActionContainer: {
    backgroundColor: 'white',
    paddingTop: 8,
  },
  upiMethodsContainer: {paddingVertical: 16, gap: 10},
});

enum PaymentModes {
  COD = 'Cash on Delivery',
  UPI_GPAY = 'GPay',
  UPI_PHONEPE = 'PhonePe',
  UPI_CREDPAY = 'CRED Pay UPI',
  UPI_AMAZON = 'Amazon Pay UPI',
}

const Payment = () => {
  const [paymentMode, setPaymentMode] = useState<PaymentModes | null>(null);

  const primaryButtonTitle =
    paymentMode === PaymentModes.COD ? 'Place Order' : 'Pay Now';

  const handleConfirm = () => {
    if (paymentMode === PaymentModes.COD) {
    }
  };

  return (
    <View style={s.container}>
      <Header />
      <Text variant={'headlineLarge'} text={'Payment'} />
      <ScrollView style={s.svContainer}>
        <View style={s.deliveryAddressContainer}>
          <View style={s.deliveryAddressHeading}>
            <Text variant="titleMedium" text={'Delivery Address'} />
            <PressableText onPress={() => {}} title="Change" />
          </View>
          <View>
            <Text
              variant="bodyMedium"
              text={'Chetan Waghade'}
              style={[cStyles.mb8, cStyles.color_gray6]}
            />
            <Text
              variant="bodySmall"
              text={
                '4th Floor, Harshal Park, Shahu Colony, Lane 1, Mitra Vikas Mandal, Pune, Maharashtra - 411052'
              }
              style={[cStyles.mb8, cStyles.color_gray6]}
            />
            <Text
              variant="bodySmall"
              text={'Phone : 917559279778'}
              style={[cStyles.mb8, cStyles.color_gray6]}
            />
          </View>
        </View>
        <View style={s.paymentDetailsContainer}>
          <View style={s.paymentDetailsHeading}>
            <Text variant="titleMedium" text={'Payment Details'} />
          </View>
          <View>
            <View style={cStyles.p16}>
              <View style={[cStyles.frow, cStyles.jcsb]}>
                <Text
                  variant="bodySmall"
                  text={'Bag Total'}
                  style={[cStyles.mb8, cStyles.color_gray6]}
                />
                <Text
                  variant="bodySmall"
                  text={'$ 1123'}
                  style={[cStyles.mb8, cStyles.color_gray6]}
                />
              </View>
              <View style={[cStyles.frow, cStyles.jcsb]}>
                <Text
                  variant="bodySmall"
                  text={'Bag Savings'}
                  style={[cStyles.mb8, cStyles.color_gray6]}
                />
                <Text
                  variant="bodySmall"
                  text={'- $123'}
                  style={[cStyles.mb8, cStyles.color_gray6]}
                />
              </View>
              <View style={[cStyles.frow, cStyles.jcsb]}>
                <Text
                  variant="bodySmall"
                  text={'Order Total'}
                  style={[cStyles.color_gray6]}
                />
                <Text
                  variant="bodySmall"
                  text={'$ 1123'}
                  style={[cStyles.color_gray6]}
                />
              </View>
            </View>
            <View
              style={[
                cStyles.frow,
                cStyles.jcsb,
                cStyles.p16,
                s.paymentDetailsFooter,
              ]}>
              <Text
                variant="bodyMedium"
                text={'You Pay'}
                style={[cStyles.color_gray8]}
              />
              <Text
                variant="bodyMedium"
                text={'$ 1123'}
                style={[cStyles.color_gray8]}
              />
            </View>
          </View>
        </View>
        <View style={s.paymentMethodsContainer}>
          <View style={s.paymentMethodsHeading}>
            <Text variant="titleMedium" text={'Payment Methods'} />
          </View>
          <View style={s.paymentMethodsMain}>
            <Collapsible collapseTitle={'UPI'}>
              <View style={s.upiMethodsContainer}>
                {Object.values(PaymentModes).map(upiOption => {
                  if (upiOption !== PaymentModes.COD) {
                    return (
                      <RadioButton
                        key={upiOption}
                        title={upiOption}
                        active={upiOption === paymentMode}
                        setActive={title => {
                          setPaymentMode(title);
                        }}
                      />
                    );
                  }
                })}
              </View>
            </Collapsible>
          </View>
        </View>
        <View style={s.codContainer}>
          <RadioButton
            title={PaymentModes.COD}
            active={paymentMode === PaymentModes.COD}
            setActive={() => {
              setPaymentMode(PaymentModes.COD);
            }}
          />
        </View>
      </ScrollView>
      <View style={s.paymentActionContainer}>
        <PrimaryButton title={primaryButtonTitle} onPress={handleConfirm} />
      </View>
    </View>
  );
};

export default Payment;
