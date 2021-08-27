import React from 'react';

interface PropsTypes {
  children: any;
  className?: string;
}

Badge.defaultProps = {
  className: '',
  children: '',
} as PropsTypes;

function Badge(props: PropsTypes) {
  const { children, className } = props;
  const badgeClasses: string[] = [`badge`];
  if (className) badgeClasses.push(className);
  return <span className={badgeClasses.join(' ')}>{children}</span>;
}

export default Badge;
