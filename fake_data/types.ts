//base product
type BaseProductType = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  size: number | string;
};

//product rating type
type ProductRatingType = {
  label: string;
  count: number;
};

//product type with extra types
export type ProductType = BaseProductType & {
  discount: number;
  ratings: Array<ProductRatingType>;
  averageColor: string;
};

//cart product type
export type CartProductType = BaseProductType & {
  quantity: number;
  size: number | string;
};

//wishlist product type
export type WishlistProductType = BaseProductType;

//Payment types

export type BasePaymentType = {
  amout: number;
  paymentMode: string;
};

export type RequestUPIPaymentType = BasePaymentType & {
  merchantId: string;
  merchantTransactionId: string;
  merchantUserId: string;
  callbackUrl: string;
  mobileNumber: number;
  deviceContext: {
    deviceOS: 'ANDROID' | 'IOS';
  };
  paymentInstrument: {
    type: string;
    targetApp: string;
    accountConstraints: [
      {
        accountNumber: number;
        ifsc: string;
      },
    ];
  };
};

// refer later
