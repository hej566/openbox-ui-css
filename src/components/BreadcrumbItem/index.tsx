import React from 'react';

interface PropsTypes {
  children: any;
  current?: boolean;
  className?: string;
}

BreadcrumbItem.defaultProps = {
  current: false,
  className: '',
} as PropsTypes;

function BreadcrumbItem(props: PropsTypes) {
  const { children, current, className } = props;
  const breadcrumbItemClasses: string[] = [`breadcrumb-item`];

  if (current) breadcrumbItemClasses.push('active');
  if (className) breadcrumbItemClasses.push(className);

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
