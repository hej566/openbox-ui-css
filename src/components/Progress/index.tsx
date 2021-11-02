import React, { ReactNode } from 'react';

interface PropsTypes {
  className?: string;
  children: ReactNode[] | ReactNode;
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
