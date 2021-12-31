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
  const buttonGroupClasses: string[] = [`btn__group`];
  if (size) buttonGroupClasses.push(`btn__group--${size}`);
  if (direct) {
    buttonGroupClasses.shift();
    buttonGroupClasses.push(`btn__group--${direct}`);
  }
  if (className) buttonGroupClasses.push(className);
  return (
    <div className={buttonGroupClasses.join(' ')} role="group" aria-label={`btn-group`}>
      {children}
    </div>
  );
}

export default ButtonGroup;
