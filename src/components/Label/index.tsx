import React, { useEffect, useRef } from 'react';

interface PropsTypes {
  className?: string;
  children?: string;
  htmlFor?: string;
}

Label.defaultProps = {
  className: '',
  children: '',
  htmlFor: '',
} as PropsTypes;

function Label(props: PropsTypes) {
  const { className, children, htmlFor } = props;
  const labelClasses: string[] = [];
  if (className) labelClasses.push(className);

  return (
    <label htmlFor={htmlFor} className={labelClasses.join(' ')}>
      {children}
    </label>
  );
}

export default Label;
