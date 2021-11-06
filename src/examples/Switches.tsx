import React, { useState } from 'react';
import Switch from '../components/Switch';

function Switches() {
  const [isChecked, setChecked] = useState(false);

  function changeHandler(e: any) {
    if (e.currentTarget.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }

  return (
    <div className="rc-navbars">
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic toast</div>
        <div className="rc-group">
          <Switch label="Default checkbox" checked={isChecked} onChange={changeHandler} />
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic toast</div>
        <div className="rc-group">
          <Switch label="Default checkbox" checked={isChecked} onChange={changeHandler} disabled />
          <Switch label="Default checkbox" checked onChange={changeHandler} disabled />
        </div>
      </section>
    </div>
  );
}

export default Switches;
