import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const MenuWrapper = styled.menu`
  // padding: 1rem 0;
`;

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

  return (
    <MenuWrapper>
      <ul>
        {navList.map((nav) => {
          return (
            <li key={nav.itemId}>
              <a href={`#${nav.path}`}>{nav.label}</a>
            </li>
          );
        })}
      </ul>
    </MenuWrapper>
  );
}

type propTypes = {
  onChange?: (path: string) => void;
  current: string;
};

LayoutNav.defaultProps = {
  onChange: (path: string) => {},
};

export default React.memo(LayoutNav);
