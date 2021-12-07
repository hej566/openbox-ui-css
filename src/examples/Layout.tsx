import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';
import SubMenu from '../components/SubMenu';
import MenuGroup from '../components/MenuGroup';
import Navbar from '../components/Navbar';
import NavItem from '../components/NavItem';
import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';
import Accordion from '../components/Accordion';
import AccordionItem from '../components/AccordionItem';

const Layout = (props: any) => {
  const { link, children } = props;

  const [isOpen, setOpenState] = useState<boolean>(false);
  const [defaultActiveId, setDefaultActiveId] = useState<string>('');

  const LinkRoot = link!;

  const clickHandler = (key: any) => {
    setDefaultActiveId(() => key);
  };

  return (
    <div className="layout">
      <div className="layout-headbar">
        <Navbar title="Navbar" className="navbar-expand-lg" variant="primary" theme="dark">
          <NavItem active key={uuidv4()}>
            Active
          </NavItem>
          <NavItem key={uuidv4()}>Link</NavItem>
        </Navbar>
      </div>
      <div className="layout-topbar">
        <Accordion only>
          <AccordionItem
            title=" Accordion Item #1"
            key="1"
            itemId="1"
            AccordionIcon={<Icon component={Acorn} />}
          >
            <Menu collapsed={false} onChange={clickHandler} defaultActiveId={defaultActiveId}>
              <MenuItem key="1" menuId="1" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/buttons">Buttons</LinkRoot>
              </MenuItem>
              <MenuItem key="2" menuId="2" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/buttons-group">Buttons Group</LinkRoot>
              </MenuItem>
              <MenuItem key="3" menuId="3" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/accordions">Accordions</LinkRoot>
              </MenuItem>
              <MenuItem key="4" menuId="4" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/alerts">Alerts</LinkRoot>
              </MenuItem>
              <MenuItem key="5" menuId="5" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/badges">Badges</LinkRoot>
              </MenuItem>
              <MenuItem key="6" menuId="6" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/carousels">Carousels</LinkRoot>
              </MenuItem>
              <MenuItem key="7" menuId="7" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/dropdowns">Dropdowns</LinkRoot>
              </MenuItem>
              <MenuItem key="8" menuId="8" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/list-group">List Group</LinkRoot>
              </MenuItem>
              <MenuItem key="9" menuId="9" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/modals">Modals</LinkRoot>
              </MenuItem>
              <MenuItem key="10" menuId="10" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/navs&tabs">Navs & Tabs</LinkRoot>
              </MenuItem>
              <MenuItem key="11" menuId="11" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/navbars">Navbars</LinkRoot>
              </MenuItem>
              <MenuItem key="12" menuId="12" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/offcanvases">Offcanvases</LinkRoot>
              </MenuItem>
              <MenuItem key="13" menuId="13" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/paginations">Paginations</LinkRoot>
              </MenuItem>
              <MenuItem key="14" menuId="14" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/placeholders">Placeholders</LinkRoot>
              </MenuItem>
              <MenuItem key="15" menuId="15" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/popovers">Popovers</LinkRoot>
              </MenuItem>
              <MenuItem key="16" menuId="16" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/progresses">Progresses</LinkRoot>
              </MenuItem>
              <MenuItem key="17" menuId="17" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/toasts">Toasts</LinkRoot>
              </MenuItem>
              <MenuItem key="18" menuId="18" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/tooltips">Tooltips</LinkRoot>
              </MenuItem>
              <MenuItem key="19" menuId="19" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/checkboxes">Checkboxes</LinkRoot>
              </MenuItem>
              <MenuItem key="20" menuId="20" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/radios">Radios</LinkRoot>
              </MenuItem>
              <MenuItem key="21" menuId="21" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/switches">Switches</LinkRoot>
              </MenuItem>
              <MenuItem key="22" menuId="22" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/input-groups">Input Groups</LinkRoot>
              </MenuItem>
              <MenuItem key="23" menuId="23" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/range">Ranges</LinkRoot>
              </MenuItem>
              <MenuItem key="24" menuId="24" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/uploads">Uploads</LinkRoot>
              </MenuItem>
              <MenuItem key="25" menuId="25" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/selects">Selects</LinkRoot>
              </MenuItem>
              <MenuItem key="26" menuId="26" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/menus">Menus</LinkRoot>
              </MenuItem>
              <MenuItem key="27" menuId="27" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/images">Images</LinkRoot>
              </MenuItem>
              <MenuItem key="28" menuId="28" prefix={<Icon component={Acorn} />}>
                <LinkRoot to="/figures">Figures</LinkRoot>
              </MenuItem>
            </Menu>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="layout-body d-flex">
        <div className="layout-sidebar col-lg-2 col-12">
          <Menu collapsed={false} defaultActiveId={defaultActiveId}>
            <MenuItem key="1" menuId="1" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/buttons">Buttons</LinkRoot>
            </MenuItem>
            <MenuItem key="2" menuId="2" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/buttons-group">Buttons Group</LinkRoot>
            </MenuItem>
            <MenuItem key="3" menuId="3" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/accordions">Accordions</LinkRoot>
            </MenuItem>
            <MenuItem key="4" menuId="4" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/alerts">Alerts</LinkRoot>
            </MenuItem>
            <MenuItem key="5" menuId="5" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/badges">Badges</LinkRoot>
            </MenuItem>
            <MenuItem key="6" menuId="6" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/carousels">Carousels</LinkRoot>
            </MenuItem>
            <MenuItem key="7" menuId="7" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/dropdowns">Dropdowns</LinkRoot>
            </MenuItem>
            <MenuItem key="8" menuId="8" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/list-group">List Group</LinkRoot>
            </MenuItem>
            <MenuItem key="9" menuId="9" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/modals">Modals</LinkRoot>
            </MenuItem>
            <MenuItem key="10" menuId="10" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/navs&tabs">Navs & Tabs</LinkRoot>
            </MenuItem>
            <MenuItem key="11" menuId="11" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/navbars">Navbars</LinkRoot>
            </MenuItem>
            <MenuItem key="12" menuId="12" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/offcanvases">Offcanvases</LinkRoot>
            </MenuItem>
            <MenuItem key="13" menuId="13" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/paginations">Paginations</LinkRoot>
            </MenuItem>
            <MenuItem key="14" menuId="14" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/placeholders">Placeholders</LinkRoot>
            </MenuItem>
            <MenuItem key="15" menuId="15" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/popovers">Popovers</LinkRoot>
            </MenuItem>
            <MenuItem key="16" menuId="16" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/progresses">Progresses</LinkRoot>
            </MenuItem>
            <MenuItem key="17" menuId="17" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/toasts">Toasts</LinkRoot>
            </MenuItem>
            <MenuItem key="18" menuId="18" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/tooltips">Tooltips</LinkRoot>
            </MenuItem>
            <MenuItem key="19" menuId="19" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/checkboxes">Checkboxes</LinkRoot>
            </MenuItem>
            <MenuItem key="20" menuId="20" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/radios">Radios</LinkRoot>
            </MenuItem>
            <MenuItem key="21" menuId="21" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/switches">Switches</LinkRoot>
            </MenuItem>
            <MenuItem key="22" menuId="22" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/input-groups">Input Groups</LinkRoot>
            </MenuItem>
            <MenuItem key="23" menuId="23" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/range">Ranges</LinkRoot>
            </MenuItem>
            <MenuItem key="24" menuId="24" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/uploads">Uploads</LinkRoot>
            </MenuItem>
            <MenuItem key="25" menuId="25" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/selects">Selects</LinkRoot>
            </MenuItem>
            <MenuItem key="26" menuId="26" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/menus">Menus</LinkRoot>
            </MenuItem>
            <MenuItem key="27" menuId="27" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/images">Images</LinkRoot>
            </MenuItem>
            <MenuItem key="28" menuId="28" prefix={<Icon component={Acorn} />}>
              <LinkRoot to="/figures">Figures</LinkRoot>
            </MenuItem>
          </Menu>
        </div>
        <div className="layout-main col-lg-10 col-12">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
