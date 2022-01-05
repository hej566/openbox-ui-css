import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Label from '../Label';

interface PropsTypes {
  className?: string;
  isDisabled?: boolean;
  onChange: any;
  onInput?: any;
  size?: string;
  children?: any;
}

Upload.defaultProps = {
  className: '',
  isDisabled: false,
  onInput: () => {},
  size: '',
  children: null,
};

function Upload(props: PropsTypes) {
  const { className, onChange, onInput, isDisabled, size, children } = props;
  const uploadClasses: string[] = ['form-control'];

  if (className) uploadClasses.push(className);

  if (size) uploadClasses.push(`form-control-${size}`);

  const uuid = uuidv4();

  return (
    <>
      <input
        className={uploadClasses.join(' ')}
        type="file"
        disabled={isDisabled}
        onChange={onChange}
        onInput={onInput}
        id={uuid}
        multiple
      />
      <Label htmlFor={uuid}>{children}</Label>
    </>
  );
}

export default Upload;
