import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../components/Text';
import {Checklist} from '../../components/AppIcon';
import colors from '../../theme/colors';
import {cStyles} from '../../theme/commonstyles';

const statusStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  progressIndicator: {alignItems: 'center'},
  progressLine: {
    flexGrow: 1,
    width: 4,
    backgroundColor: colors.gray2,
  },
  progressDot: {
    height: 20,
    width: 20,
    backgroundColor: 'green',
    borderRadius: 50,
  },
  statusDetails: {paddingVertical: 8},
  statusIconContainer: {
    height: 32,
    width: 32,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgTransparent: {backgroundColor: 'transparent'},
});

const getBackground = (progress: 'PENDING' | 'IN-PROGRESS' | 'COMPLETED') => {
  return {backgroundColor: getColorByProgress(progress)};
};

const getColorByProgress = (
  progress: 'PENDING' | 'IN-PROGRESS' | 'COMPLETED',
) => {
  if (progress === 'PENDING') {
    return colors.gray2;
  }
  if (progress === 'IN-PROGRESS') {
    return 'orange';
  }
  if (progress === 'COMPLETED') {
    return 'green';
  }
};

const OrderStatus = ({
  item,
  order,
  first,
  last,
}: {
  item: any;
  order: number;
  first: number;
  last: number;
}) => {
  const {status, description, date, progress} = item;
  return (
    <View style={statusStyle.container}>
      <View style={statusStyle.progressIndicator}>
        <View
          style={[
            statusStyle.progressLine,
            order === first
              ? statusStyle.bgTransparent
              : progress === 'IN-PROGRESS'
              ? getBackground('COMPLETED') //if current item progress is IN-PROGRESS, set background color of line to previous status i.e. completed
              : getBackground(progress),
          ]}
        />
        <View style={[statusStyle.progressDot, getBackground(progress)]} />
        <View
          style={[
            statusStyle.progressLine,
            order === last
              ? statusStyle.bgTransparent
              : progress !== 'IN-PROGRESS'
              ? getBackground(progress)
              : {},
          ]}
        />
      </View>
      <View style={[statusStyle.statusIconContainer, getBackground(progress)]}>
        <Checklist size={18} color="white" />
      </View>
      <View style={statusStyle.statusDetails}>
        <Text
          variant={'titleMedium'}
          text={status}
          style={[cStyles.color_gray6, cStyles.mb4]}
        />
        <Text
          variant={'bodySmall'}
          text={description}
          style={[cStyles.color_gray4, cStyles.mb4]}
        />
        <Text variant={'bodySmall'} text={date} style={cStyles.color_gray4} />
      </View>
    </View>
  );
};

export default OrderStatus;
