import React, { useState } from 'react';
import Button from './components/Button/index';

function App() {
  const [btnState, setBtnState] = useState({
    loading: false,
    size: 'normal',
    type: 'button',
    variant: 'primary',
    prefix: '',
    suffix: '',
    disabled: false,
    icon: '',
  });

  function clickHandler() {
    setBtnState((preState) => ({
      ...preState,
      loading: true,
    }));
  }

  return (
    <Button {...btnState} onClick={clickHandler}>
      Button
    </Button>
  );
}

export default App;
