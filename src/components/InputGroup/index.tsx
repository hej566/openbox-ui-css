import React, { useEffect, useRef } from 'react';

interface PropsTypes {
  className?: string;
  children?: any;
  size?: string;
}

InputGroup.defaultProps = {
  className: '',
  children: null,
  size: '',
} as PropsTypes;

function InputGroup(props: PropsTypes) {
  const { className, children, size } = props;
  const inputGroupClasses: string[] = ['input-group'];
  if (className) inputGroupClasses.push(className);

  if (size) inputGroupClasses.push(`input-group-${size}`);

  return <div className={inputGroupClasses.join(' ')}>{children}</div>;
}

export default React.memo(InputGroup);
