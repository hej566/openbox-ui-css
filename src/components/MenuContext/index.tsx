import React from 'react';

const MenuContext = React.createContext<propsType>({
  onClick: () => () => {},
  activeStateMap: {},
  disabledStateMap: {},
  openStateMap: {},
  collapsed: false,
  hideTippy: false,
  resetHideTippy: () => {},
});

type propsType = {
  onClick: (key: string, type: string) => (e: any) => void;
  activeStateMap: { [key: string]: boolean };
  disabledStateMap: { [key: string]: boolean };
  openStateMap: { [key: string]: boolean };
  collapsed: boolean;
  hideTippy: boolean;
  resetHideTippy: () => void;
};

export default MenuContext;
