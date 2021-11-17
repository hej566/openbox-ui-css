import React from 'react';

const activeStateMap: { [key: string]: boolean } = {};
const disabledStateMap: { [key: string]: boolean } = {};

const MenuContext = React.createContext({
  onClick: (key: any): any => {},
  activeStateMap,
  disabledStateMap,
});

export default MenuContext;
