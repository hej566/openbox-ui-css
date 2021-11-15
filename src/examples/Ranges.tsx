import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Label from '../components/Label';
import Input from '../components/Input';

function Ranges() {
  const uuid1 = uuidv4();

  return (
    <div className="rc-group">
      <div className="rc-item mb-3">
        <Label htmlFor={uuid1} className="form-label">
          Example range
        </Label>
        <Input id={uuid1} type="range" min={0} max={100} current={40} />
      </div>
    </div>
  );
}

export default Ranges;
