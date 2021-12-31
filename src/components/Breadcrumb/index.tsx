import React from 'react';
import Icon from '../Icon';
import Slash from '../../assets/icons/svg/slash-regular.svg';

interface PropsTypes {
  children: React.ReactComponentElement<any>[] | React.ReactComponentElement<any>;
  Divider?: React.ReactComponentElement<any>;
  className?: string;
  noDivider?: boolean;
}

Breadcrumb.defaultProps = {
  Divider: <Icon component={Slash} />,
  className: '',
  noDivider: false,
} as PropsTypes;

function Breadcrumb(props: PropsTypes) {
  const { children, Divider, className, noDivider } = props;
  const breadcrumbGroupClasses: string[] = [`${NS}-breadcrumb`];

  if (className) breadcrumbGroupClasses.push(className);

  const countChild = React.Children.count(children);

  let breadcrumbList = null;

  if (countChild === 1) {
    breadcrumbList = [children];
  } else if (countChild > 1) {
    breadcrumbList = React.Children.map(children, (child, index) => {
      if (index !== 0) {
        if (Divider && !noDivider) {
          return React.cloneElement(
            child,
            {},
            React.cloneElement(Divider, {}),
            child.props.children
          );
        }
        if (noDivider) {
          return React.cloneElement(child, {}, child.props.children);
        }
      } else {
        return child;
      }
    });
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className={breadcrumbGroupClasses.join(' ')}>{breadcrumbList}</ol>
    </nav>
  );
}

export default Breadcrumb;
