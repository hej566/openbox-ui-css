import React from 'react';

interface PropsTypes {
  children?: any;
  animate?: string;
  className?: string;
  size?: string;
}

Placeholder.defaultProps = {
  animate: '',
  className: '',
  children: null,
  size: '',
};

function Placeholder(props: PropsTypes) {
  const { children, animate, className, size } = props;
  const placeholderWrapperClasses: string[] = [''];
  const placeholderClasses: string[] = ['placeholder'];

  let placeholder = null;

  if (size) {
    placeholderClasses.push(`placeholder-${size}`);
  }

  if (className) {
    placeholderClasses.push(className);
  }

  if (children) {
    placeholder = React.cloneElement(children, {
      className: placeholderClasses.join(' '),
    });
  }

  if (animate) {
    placeholderWrapperClasses.push(`placeholder-${animate}`);
    return <div className={placeholderWrapperClasses.join(' ')}>{placeholder}</div>;
  }

  return placeholder;
}

export default Placeholder;
