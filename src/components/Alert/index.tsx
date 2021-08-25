import React from 'react';

interface PropsTypes {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}

Alert.defaultProps = {
  variant: 'primary',
  className: '',
};

function Alert(props: PropsTypes) {
  const { children, variant, className } = props;
  const alertClasses: string[] = [`${ns}-alert`];
  if (variant) alertClasses.push(`${ns}-alert-${variant}`);
  if (className) alertClasses.push(className);
  return (
    <div className={alertClasses.join(' ')} role="alert">
      {children}
    </div>
  );
}

export default Alert;
