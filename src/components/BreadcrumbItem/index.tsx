import React from 'react';

interface PropsTypes {
  children: any;
  current?: boolean;
}

BreadcrumbItem.defaultProps = {
  current: false,
};

function BreadcrumbItem(props: PropsTypes) {
  const { children, current } = props;
  const breadcrumbItemClasses: string[] = [];
  breadcrumbItemClasses.push('breadcrumb-item');
  if (current) breadcrumbItemClasses.push('active');

  let breadcrumbItem = null;
  if (current) {
    breadcrumbItem = (
      <li className={breadcrumbItemClasses.join(' ')} aria-current="page">
        {children}
      </li>
    );
  } else {
    breadcrumbItem = <li className={breadcrumbItemClasses.join(' ')}>{children}</li>;
  }
  return breadcrumbItem;
}

export default BreadcrumbItem;
