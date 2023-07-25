import toastReducer from './reducers/toastReducer';
import catalogueReducer from './reducers/catalogueReducer';
import {CatalogueType, ToastType} from './types';

export type InitialStateType = {
  catalogue: Array<CatalogueType> | [];
  toast: ToastType;
};

export const initialState: InitialStateType = {
  catalogue: [],
  toast: {
    visible: false,
    description: '',
    subDescription: '',
  },
};

/*
 reducer (arg:argType,action:actionType) = {
  return {
    reducerOne:reducerOneFunction(reducerState,reducerAction)
    ...restOfTheReducers
  }
 }
}
*/
export const storeReducer = (
  {catalogue, toast}: InitialStateType,
  action: any,
) => ({
  toast: toastReducer(toast, action),
  catalogue: catalogueReducer(catalogue, action),
});
