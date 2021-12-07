import React from 'react';

interface PropsTypes {
  children: React.ReactNode[];
  size?: string;
  direct?: string;
  className?: string;
}

ButtonGroup.defaultProps = {
  size: '',
  direct: '',
  className: '',
} as PropsTypes;

function ButtonGroup(props: PropsTypes) {
  const { children, size, direct, className } = props;
  const buttonGroupClasses: string[] = [`${NS}-btn__group`];
  if (size) buttonGroupClasses.push(`${NS}-btn__group--${size}`);
  if (direct) {
    buttonGroupClasses.shift();
    buttonGroupClasses.push(`${NS}-btn__group--${direct}`);
  }
  if (className) buttonGroupClasses.push(className);
  return (
    <div className={buttonGroupClasses.join(' ')} role="group" aria-label={`${NS}-btn-group`}>
      {children}
    </div>
  );
}

export default ButtonGroup;
