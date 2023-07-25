import React from 'react';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../theme/colors';

type IconType = {
  size?: number;
  color?: string;
};

export const BackIcon = ({size = 24}: {size?: number}) => (
  <MCI name="keyboard-backspace" size={size} color={colors.gray8} />
);
export const SortIcon = () => (
  <MCI name="sort" size={14} color={colors.gray8} />
);
export const FilterIcon = () => (
  <MCI name="filter" size={14} color={colors.gray8} />
);

export const CloseIcon = ({size = 23, color = colors.gray3}: IconType) => (
  <MCI name="close" size={size} color={color} />
);

export const HeartIcon = ({size = 24, color = colors.gray3}: IconType) => (
  <MCI name="heart" size={size} color={color} />
);

export const ShareIcon = () => (
  <MCI name="share-variant" size={24} color={colors.gray3} />
);

export const InfoIcon = ({
  size = 24,
  color = colors.gray3,
}: {
  size?: number;
  color?: string;
}) => <MCI name="information-outline" size={size} color={color} />;

export const EmptyCart = () => (
  <MCI name="inbox" size={48} color={colors.gray3} />
);

export const AngleDown = () => (
  <MCI name="chevron-down" size={24} color={colors.gray3} />
);

export const ChevronRight = () => (
  <MCI name="chevron-right" size={24} color={colors.gray3} />
);

export const Checklist = ({size, color}: {size?: number; color?: string}) => (
  <MCI
    name="clipboard-list"
    size={size ? size : 24}
    color={color ? color : colors.gray3}
  />
);

export const PlusIcon = () => (
  <MCI name="plus" size={16} color={colors.gray4} />
);

export const MinusIcon = () => (
  <MCI name="minus" size={16} color={colors.gray4} />
);

export const CheckIcon = () => (
  <MCI name="check" size={24} color={colors.gray1} />
);

export const AddressIcon = () => (
  <MCI name="sort" size={24} color={colors.gray8} />
);

export const OrdersIcon = () => (
  <MCI name="inbox" size={24} color={colors.gray8} />
);

export const LogoutIcon = () => (
  <MCI name="logout" size={24} color={colors.gray8} />
);
