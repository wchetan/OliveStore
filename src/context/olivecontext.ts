import {createContext} from 'react';

export type OliveStoreContextType = {
  state: any;
  dispatch: React.Dispatch<any>;
};

export const OliveStoreContext = createContext<OliveStoreContextType>({
  state: {},
  dispatch: () => null,
});
