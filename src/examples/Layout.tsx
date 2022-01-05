import React, { useEffect, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';
import Navbar from '../components/Navbar';
import NavItem from '../components/NavItem';
import Accordion from '../components/Accordion';
import AccordionItem from '../components/AccordionItem';
import LayoutNav from './LayoutNav';

const Layout = (props: any) => {
  const { link, children } = props;

  const match = useRouteMatch('/');

  const [isOpen, setOpenState] = useState<boolean>(false);
  const [defaultActiveId, setDefaultActiveId] = useState<string>('');

  const LinkRoot = link!;

  const clickHandler = (key: any) => {
    setDefaultActiveId(() => key);
  };

  const { pathname } = useLocation();
  const [current, setCurrenRoute] = useState<string>(pathname);

  function changeHandler(path: string) {
    setCurrenRoute(path);
  }

  useEffect(() => {
    setCurrenRoute(pathname);
  }, [pathname]);

  return (
    <div className="layout">
      {!match!.isExact && (
        <>
          <div className="layout-headbar">
            <Navbar title="Navbar" className="navbar-expand-lg" variant="primary" theme="dark">
              <NavItem isActive itemId="1">
                Active
              </NavItem>
              <NavItem itemId="2">Link</NavItem>
            </Navbar>
          </div>
          <div className="layout-topbar">
            <Accordion only>
              <AccordionItem
                title=" Accordion Item #1"
                itemId="1"
                suffixIcon={<Icon component={Acorn} />}
              >
                <LayoutNav current={current} onChange={changeHandler} />
              </AccordionItem>
            </Accordion>
          </div>
          <div className="layout-body d-flex">
            <div className="layout-sidebar col-lg-2 col-12">
              <LayoutNav current={current} onChange={changeHandler} />
            </div>
            <div className="layout-main col-lg-10 col-12">{children}</div>
          </div>
        </>
      )}
      {match!.isExact && children}
    </div>
  );
};

export default Layout;
