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
  const iconClasses: Array<string> = [`icon`];

  if (rotating) iconClasses.push(`rotating`);
  if (name) iconClasses.push(`${name}`);
  if (size) iconClasses.push(`icon-${size}`);
  if (className) iconClasses.push(className);

  return (
    <i className={iconClasses.join(' ')} onClick={onClick}>
      <Component />
    </i>
  );
}

export default Icon;
