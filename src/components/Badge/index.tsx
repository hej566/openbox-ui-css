import React from 'react';

interface PropsTypes {
  children: React.ReactNode;
  className?: string;
}

Badge.defaultProps = {
  className: '',
};

function Badge(props: PropsTypes) {
  const { children, className } = props;
  const badgeClasses: string[] = [`${ns}-badge`];
  if (className) badgeClasses.push(className);
  return <span className={badgeClasses.join(' ')}>{children}</span>;
}

export default Badge;
