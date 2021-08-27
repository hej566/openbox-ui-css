import React from 'react';

interface PropsTypes {
  children: React.ReactComponentElement<any>[];
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
  const buttonGroupClasses: string[] = ['btn-group'];
  if (size) buttonGroupClasses.push(`btn-group-${size}`);
  if (direct) {
    buttonGroupClasses.shift();
    buttonGroupClasses.push(`btn-group-${direct}`);
  }
  if (className) buttonGroupClasses.push(className);
  return (
    <div className={buttonGroupClasses.join(' ')} role="group" aria-label="btn-group">
      {children}
    </div>
  );
}

export default ButtonGroup;
