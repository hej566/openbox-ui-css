import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import Icon from '../components/Icon';
import Button from '../components/Button';
import GitHub from '../assets/icons/svg/github-brands.svg';
import ChevronDown from '../assets/icons/svg/chevron-down-regular.svg';
import Navbar from '../components/Navbar';
import NavItem from '../components/NavItem';
import Accordion from '../components/Accordion';
import AccordionItem from '../components/AccordionItem';

const LayoutNav = lazy(() => import('./LayoutNav'));

const Layout = (props: any) => {
  const { children } = props;
  const match = useMatch('/');
  const { pathname } = useLocation();
  const [current, setCurrenRoute] = useState<string>(pathname);

  useEffect(() => {
    setCurrenRoute(pathname);
  }, [pathname]);

  return (
    <div className="layout">
      {match?.pathname !== '/' && (
        <>
          <div className="layout-headbar">
            <Navbar
              title="React Bootstrap"
              className="navbar-expand-lg"
              variant="primary"
              theme="dark"
            >
              <NavItem itemId="1">
                <Button
                  variant="link"
                  prefixIcon={<Icon component={GitHub} size="lg" />}
                  link="https://github.com/hej566/react-ui"
                />
              </NavItem>
            </Navbar>
          </div>
          <div className="layout-topbar">
            <Accordion only>
              <AccordionItem
                title="Core Components"
                itemId="1"
                suffixIcon={<Icon component={ChevronDown} />}
              >
                <Suspense fallback={<></>}>
                  <LayoutNav current={current} />
                </Suspense>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="layout-body d-flex">
            <div className="layout-sidebar col-lg-2 col-12">
              <Suspense fallback={<></>}>
                <LayoutNav current={current} />
              </Suspense>
            </div>
            <div className="layout-main col-lg-10 col-12">{children}</div>
          </div>
        </>
      )}
      {match?.pathname === '/' && children}
    </div>
  );
};

export default Layout;
