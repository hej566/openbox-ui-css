import React, { useState } from 'react';
import Button from './components/Button/index';

function App() {
  const [disabled, setDisabled] = useState(false);

  function clickHandler() {
    console.log('click');
    setDisabled(true);
  }

  return (
    <Button disabled={disabled} onClick={clickHandler}>
      primary
    </Button>
  );
}

export default App;
