import React from 'react';

const Icon = (props: propTypes) => {
  const { isRotating, component, name, size, onClick, className } = props;
  const iconClasses: string[] = [`${NS}-icon`];

  if (isRotating) iconClasses.push(`${NS}-icon--rotating`);
  if (name) iconClasses.push(`${NS}-${name}`);
  if (size) iconClasses.push(`${NS}-icon--${size}`);
  if (className) iconClasses.push(className);

  const SVG = component;

  return (
    <i className={iconClasses.join(' ')} onClick={onClick}>
      <SVG />
    </i>
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
