import React from 'react';

const Badge = (props: propTypes) => {
  const { children, className } = props;
  const badgeClasses: string[] = [`badge`];
  if (className) badgeClasses.push(className);
  return <span className={badgeClasses.join(' ')}>{children}</span>;
};

type propTypes = {
  children: any;
  className?: string;
};

Badge.defaultProps = {
  className: '',
};
export default Badge;
