import React from 'react';

interface PropsTypes {
  children?: any;
  className?: string;
}

Template.defaultProps = {
  className: '',
  children: null,
};

function Template(props: PropsTypes) {
  const { children } = props;
  return <div>{children}</div>;
}

export default Template;
