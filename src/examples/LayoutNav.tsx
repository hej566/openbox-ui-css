import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@hej566/menu';

function LayoutNav(props: propTypes) {
  const { onChange, current } = props;
  let defaultActiveId = '';
  const navList = [
    { path: '/accordions', label: 'Accordion', itemId: '1' },
    { path: '/alerts', label: 'Alert', itemId: '2' },
    { path: '/buttons', label: 'Button', itemId: '3' },
    { path: '/buttons-group', label: 'Button Group', itemId: '4' },
    { path: '/breadcrumb', label: 'Breadcrumb', itemId: '5' },
    { path: '/badges', label: 'Badge', itemId: '6' },
    { path: '/carousels', label: 'Carousel', itemId: '7' },
    { path: '/dropdowns', label: 'Dropdown', itemId: '8' },
    { path: '/list-group', label: 'List Group', itemId: '9' },
    { path: '/modals', label: 'Modal', itemId: '10' },
    { path: '/navs&tabs', label: 'Nav & Tab', itemId: '11' },
    { path: '/navbars', label: 'Navbar', itemId: '12' },
    { path: '/offcanvases', label: 'Offcanvas', itemId: '13' },
    { path: '/paginations', label: 'Pagination', itemId: '14' },
    { path: '/placeholders', label: 'Placeholder', itemId: '15' },
    { path: '/popovers', label: 'Popover', itemId: '16' },
    { path: '/progresses', label: 'Progress', itemId: '17' },
    { path: '/toasts', label: 'Toast', itemId: '18' },
    { path: '/tooltips', label: 'Tooltip', itemId: '19' },
    { path: '/checkboxes', label: 'Checkbox', itemId: '20' },
    { path: '/radios', label: 'Radio', itemId: '21' },
    { path: '/switches', label: 'Switch', itemId: '22' },
    { path: '/input-groups', label: 'Input Group', itemId: '23' },
    { path: '/range', label: 'Range', itemId: '24' },
    { path: '/uploads', label: 'Upload', itemId: '25' },
  ];

  const [currentPath] = navList.filter((item) => item.path === current);
  if (currentPath) {
    const { itemId } = currentPath;
    defaultActiveId = `${itemId}`;
  }

  const so = {
    innerPaddingY: '0.5rem',
  };

  function changeHandler(itemId: string, value: string) {
    const [{ path }] = navList.filter((item) => item.itemId === itemId);
    if (onChange) onChange(path);
  }

  return (
    <Menu indent={32} defaultActiveId={defaultActiveId} onChange={changeHandler}>
      {navList.map((item) => {
        return (
          <MenuItem itemId={item.itemId} key={item.itemId} so={so}>
            <Link to={item.path}>{item.label}</Link>
          </MenuItem>
        );
      })}
    </Menu>
  );
}

type propTypes = {
  onChange?: (path: string) => void;
  current: string;
};

LayoutNav.defaultProps = {
  onChange: (path: string) => {},
};

export default LayoutNav;
