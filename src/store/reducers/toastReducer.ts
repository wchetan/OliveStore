import {ToastType} from '../types';
import TOAST_ACTIONS from '../actionTypes/taostActions';

const hideState: ToastType = {
  visible: false,
  description: '',
  subDescription: '',
};

const toastReducer = (state: any, action: any) => {
  switch (action.type) {
    case TOAST_ACTIONS.TOAST_SHOW:
      return {
        visible: true,
        ...action.payload,
      };
    case TOAST_ACTIONS.TOAST_HIDE:
      return hideState;
  }
};

export default toastReducer;
