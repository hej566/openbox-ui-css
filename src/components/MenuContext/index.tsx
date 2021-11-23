import React from 'react';

const activeStateMap: { [key: string]: boolean } = {};
const disabledStateMap: { [key: string]: boolean } = {};
const openStateMap: { [key: string]: boolean } = {};

const MenuContext = React.createContext({
  onClick: (key: string, type: string): any => {},
  activeStateMap,
  disabledStateMap,
  openStateMap,
  collapsed: false,
  hideTippy: false,
  resetHideTippy: () => {},
});

export default MenuContext;
