import {StyleSheet} from 'react-native';
import colors from './colors';

const common_colors = {
  color_gray1: {
    color: colors.gray1,
  },
  color_gray2: {
    color: colors.gray2,
  },
  color_gray3: {
    color: colors.gray3,
  },
  color_gray4: {
    color: colors.gray4,
  },
  color_gray5: {
    color: colors.gray5,
  },
  color_gray6: {
    color: colors.gray6,
  },
  color_gray7: {
    color: colors.gray7,
  },
  color_gray8: {
    color: colors.gray8,
  },
  color_red: {
    color: 'red',
  },
};

export const cStyles = StyleSheet.create({
  ...common_colors,
  jcsb: {
    justifyContent: 'space-between',
  },
  p16: {
    padding: 16,
  },
  pt8: {paddingTop: 8},
  pb16: {
    paddingBottom: 16,
  },
  pv16: {
    paddingVertical: 16,
  },
  ph8: {
    paddingHorizontal: 8,
  },
  ph16: {
    paddingHorizontal: 16,
  },
  mh8: {
    marginHorizontal: 8,
  },
  mh6: {
    marginHorizontal: 8,
  },
  mh4: {
    marginHorizontal: 2,
  },
  mh2: {
    marginHorizontal: 2,
  },
  mv8: {
    marginVertical: 8,
  },
  mv16: {
    marginVertical: 16,
  },
  mv6: {
    marginVertical: 8,
  },
  mv4: {
    marginVertical: 2,
  },
  mv2: {
    marginVertical: 2,
  },
  mb16: {
    marginBottom: 16,
  },
  mb8: {
    marginBottom: 8,
  },
  mb6: {
    marginBottom: 8,
  },
  mb4: {
    marginBottom: 2,
  },
  mb2: {
    marginBottom: 2,
  },
  mt8: {
    marginTop: 8,
  },
  mt6: {
    marginTop: 8,
  },
  mt4: {
    marginTop: 2,
  },
  mt2: {
    marginTop: 2,
  },
  ml8: {
    marginLeft: 8,
  },
  ml6: {
    marginLeft: 8,
  },
  ml4: {
    marginLeft: 2,
  },
  ml2: {
    marginLeft: 2,
  },
  lh16: {
    lineHeight: 16,
  },
  fg1: {
    flexGrow: 1,
  },
  fs1: {
    flexShrink: 1,
  },
  fontSize10: {
    fontSize: 10,
  },
  frow: {
    flexDirection: 'row',
  },
  bbw1: {
    borderBottomWidth: 1,
  },
  gap4: {gap: 4},
  gap8: {gap: 8},
  gap16: {gap: 16},
});
