import React from 'react';

interface PropsTypes {
  children: any;
  variant?: string;
  className?: string;
}

Alert.defaultProps = {
  variant: 'primary',
  className: '',
  children: '',
} as PropsTypes;

function Alert(props: PropsTypes) {
  const { children, variant, className } = props;
  const alertClasses: string[] = ['alert'];
  if (variant) alertClasses.push(`alert-${variant}`);
  if (className) alertClasses.push(className);
  return (
    <div className={alertClasses.join(' ')} role="alert">
      {children}
    </div>
  );
}

export default Alert;
