import React from 'react';

interface PropsTypes {
  rotating?: boolean;
  name?: string;
  size?: string;
  Component: React.FunctionComponent<React.SVGProps<SVGElement>>;
}

Icon.defaultProps = {
  rotating: false,
  name: '',
  size: '',
};

function Icon(props: PropsTypes) {
  const { rotating, Component, name, size } = props;
  const iconClasses: Array<string> = [`${ns}-icon`];

  if (rotating) iconClasses.push(`rotating`);
  if (name) iconClasses.push(`${name}`);
  if (size) iconClasses.push(`${ns}-icon-${size}`);

  return (
    <i className={iconClasses.join(' ')}>
      <Component />
    </i>
  );
}

export default Icon;
