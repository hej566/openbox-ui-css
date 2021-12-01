import React from 'react';

interface PropsTypes {
  rotating?: boolean;
  name?: string;
  size?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  src: string;
}

Image.defaultProps = {
  rotating: false,
  name: '',
  size: '',
  onClick: () => {},
  className: '',
};

function Image(props: PropsTypes) {
  const { rotating, name, size, onClick, className, src } = props;
  const iconClasses: Array<string> = [];

  if (rotating) iconClasses.push(`rotating`);
  if (name) iconClasses.push(`${name}`);
  // if (size) iconClasses.push(`icon-${size}`);
  if (className) iconClasses.push(className);

  return (
    <img
      className={iconClasses.join(' ')}
      onClick={onClick}
      src={src}
      style={{ width: '200px', height: 'auto' }}
    />
  );
}

export default Image;
