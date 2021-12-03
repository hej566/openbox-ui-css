import React from 'react';

const Icon = (props: propTypes) => {
  const { rotating, name, component, size, onClick, className } = props;
  const iconClasses: string[] = [`${NS}-icon`];

  if (rotating) iconClasses.push(`${NS}-icon--rotating`);
  if (name) iconClasses.push(`${NS}-${name}`);
  if (size) iconClasses.push(`${NS}-icon-${size}`);
  if (className) iconClasses.push(className);

  const IconRoot = component;

  return (
    <i className={iconClasses.join(' ')} onClick={onClick}>
      <IconRoot />
    </i>
  );
};

type propTypes = {
  rotating?: boolean;
  size?: string;
  name?: string;
  component: React.FunctionComponent<React.SVGProps<SVGElement>>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
};

Icon.defaultProps = {
  rotating: false,
  size: '',
  name: '',
  onClick: () => {},
  className: '',
};

export default Icon;
