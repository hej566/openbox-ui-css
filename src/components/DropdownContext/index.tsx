import React from 'react';

const DropdownContext = React.createContext<propsType>({
  onClick: () => () => {},
  onESC: () => {},
  activeStateMap: {},
  disabledStateMap: {},
});

type propsType = {
  onClick: (key: string, type: string) => (e: any) => void;
  onESC: (e: any) => void;
  activeStateMap: { [key: string]: boolean };
  disabledStateMap: { [key: string]: boolean };
};

export default DropdownContext;
