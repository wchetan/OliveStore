import TOAST_ACTION from './actionTypes/taostActions';
import {ToastType, CatalogueType} from './types';

export const showToast = (payload: ToastType) => ({
  type: TOAST_ACTION.TOAST_SHOW,
  payload: payload,
});

export const hideToast = () => ({
  type: TOAST_ACTION.TOAST_HIDE,
});
