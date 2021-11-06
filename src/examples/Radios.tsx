import React, { useState } from 'react';
import Radio from '../components/Radio';

function Radios() {
  function changeHandler(e: any) {
    console.log(e.target.value);
  }

  return (
    <div className="rc-navbars">
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic toast</div>
        <div className="rc-group">
          <div className="rc-item" onChange={changeHandler}>
            <Radio label="Default checkbox" name="test" value="1" checked />
            <Radio label="Default checkbox" name="test" value="2" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Radios;
