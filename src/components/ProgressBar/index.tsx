import React from 'react';

interface PropsTypes {
  className?: string;
  value: number;
  striped?: boolean;
  animate?: boolean;
}

Progress.defaultProps = {
  className: '',
  striped: false,
  animate: false,
};

function Progress(props: PropsTypes) {
  const { value, className, animate, striped } = props;
  const progressbarClasses: string[] = ['progress-bar'];

  if (className) progressbarClasses.push(className);
  if (animate) progressbarClasses.push('progress-bar-animated');
  if (striped) progressbarClasses.push('progress-bar-striped');

  return (
    <div
      className={progressbarClasses.join(' ')}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ width: `${value}%` }}
    />
  );
}

export default Progress;
