import React from 'react';

interface PropsTypes {
  className?: string;
  children: React.ReactNode[] | React.ReactNode;
}

Progress.defaultProps = {
  className: '',
};

function Progress(props: PropsTypes) {
  const { className, children } = props;
  const progressClasses: string[] = ['progress'];

  if (className) progressClasses.push(className);

  return <div className={progressClasses.join(' ')}>{children}</div>;
}

export default Progress;
