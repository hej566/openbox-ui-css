import React from 'react';

const Icon = (props: propTypes) => {
  const { rotating, Component, name, size, onClick, className } = props;
  const iconClasses: string[] = [`${NS}-icon`];

  if (rotating) iconClasses.push(`${NS}-icon--rotating`);
  if (name) iconClasses.push(`${NS}-${name}`);
  if (size) iconClasses.push(`${NS}-icon-${size}`);
  if (className) iconClasses.push(className);

  return (
    <i className={iconClasses.join(' ')} onClick={onClick}>
      <Component />
    </i>
  );
};

type propTypes = {
  rotating?: boolean;
  name?: string;
  size?: string;
  Component: React.FunctionComponent<React.SVGProps<SVGElement>>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
};

Icon.defaultProps = {
  rotating: false,
  name: '',
  size: '',
  onClick: () => {},
  className: '',
};

export default Icon;
