import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Label from '../Label';
import Input from '../Input';

function Range(props: propTypes) {
  const { min, max, current, label, isDisabled } = props;
  const uuid1 = uuidv4();

  return (
    <div className="range">
      <Label htmlFor={uuid1} className="form-label">
        {label}
      </Label>
      <Input id={uuid1} type="range" min={min} max={max} current={current} disabled={isDisabled} />
    </div>
  );
}

type propTypes = {
  min?: number;
  max?: number;
  current?: number;
  label?: string;
  isDisabled?: boolean;
};

Range.defaultProps = {
  min: 0,
  max: 100,
  current: 0,
  label: '',
  isDisabled: false,
};

export default Range;
