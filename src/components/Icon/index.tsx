import React from 'react';

const Icon = (props: propTypes) => {
  const { isRotating, component, name, size, onClick, className } = props;
  const iconClasses: string[] = [`icon`];

  if (isRotating) iconClasses.push(`icon--rotating`);
  if (name) iconClasses.push(`${name}`);
  if (size) iconClasses.push(`icon--${size}`);
  if (className) iconClasses.push(className);

  const SVG = component;

  return (
    <span className={iconClasses.join(' ')} onClick={onClick}>
      <SVG />
    </span>
  );
};

type propTypes = {
  isRotating?: boolean;
  name?: string;
  size?: string;
  component: React.FunctionComponent<React.SVGProps<SVGElement>>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
};

Icon.defaultProps = {
  isRotating: false,
  name: '',
  size: 'base',
  onClick: () => {},
  className: '',
};

export default Icon;
