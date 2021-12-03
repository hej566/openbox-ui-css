import React from 'react';

interface PropsTypes {
  rotating?: boolean;
  name?: string;
  size?: string;
  Component: React.FunctionComponent<React.SVGProps<SVGElement>>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
}

Icon.defaultProps = {
  rotating: false,
  name: '',
  size: '',
  onClick: () => {},
  className: '',
};

function Icon(props: PropsTypes) {
  const { rotating, Component, name, size, onClick, className } = props;
  const iconClasses: Array<string> = [`${NS}-icon`];

  if (rotating) iconClasses.push(`${NS}-icon--rotating`);
  if (name) iconClasses.push(`${NS}-${name}`);
  if (size) iconClasses.push(`${NS}-icon-${size}`);
  if (className) iconClasses.push(className);

  return (
    <i className={iconClasses.join(' ')} onClick={onClick}>
      <Component />
    </i>
  );
}

export default Icon;
