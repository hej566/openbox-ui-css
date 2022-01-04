import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@hej566/menu';

function LayoutNav(props: propTypes) {
  const { onChange, current } = props;
  let defaultActiveId = '';
  const navList = [
    { path: '/accordions', label: 'Accordions', itemId: '1' },
    { path: '/alerts', label: 'Alerts', itemId: '2' },
    { path: '/buttons', label: 'Buttons', itemId: '3' },
    { path: '/buttons-group', label: 'Buttons Group', itemId: '4' },
    { path: '/breadcrumb', label: 'Breadcrumb', itemId: '5' },
    { path: '/badges', label: 'Badges', itemId: '6' },
    { path: '/carousels', label: 'Carousels', itemId: '7' },
    { path: '/dropdowns', label: 'Dropdowns', itemId: '8' },
    { path: '/list-group', label: 'List Group', itemId: '9' },
    { path: '/modals', label: 'Modals', itemId: '10' },
    { path: '/navs&tabs', label: 'Navs & Tabs', itemId: '11' },
    { path: '/navbars', label: 'Navbars', itemId: '12' },
    { path: '/offcanvases', label: 'Offcanvases', itemId: '13' },
    { path: '/paginations', label: 'Paginations', itemId: '14' },
    { path: '/placeholders', label: 'Placeholders', itemId: '15' },
    { path: '/popovers', label: 'Popovers', itemId: '16' },
    { path: '/progresses', label: 'Progresses', itemId: '17' },
    { path: '/toasts', label: 'Toasts', itemId: '18' },
    { path: '/tooltips', label: 'Tooltips', itemId: '19' },
    { path: '/checkboxes', label: 'Checkboxes', itemId: '20' },
    { path: '/radios', label: 'Radios', itemId: '21' },
    { path: '/switches', label: 'Switch', itemId: '22' },
    { path: '/input-groups', label: 'Input Groups', itemId: '23' },
    { path: '/range', label: 'Ranges', itemId: '24' },
    { path: '/uploads', label: 'Uploads', itemId: '25' },
  ];

  const [currentPath] = navList.filter((item) => item.path === current);
  if (currentPath) {
    const { itemId } = currentPath;
    defaultActiveId = `${itemId}`;
  }

  const so = {
    activeBackgroundColor: '#0d6efd',
    activeColor: '#ffffff',
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
