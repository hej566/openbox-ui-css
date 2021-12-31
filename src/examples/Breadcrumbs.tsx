import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import BreadcrumbItem from '../components/BreadcrumbItem';
import Icon from '../components/Icon';
import Slash from '../assets/icons/svg/slash.svg';
import Divider from '../assets/icons/svg/chevron-right-regular.svg';

function Breadcrumbs() {
  return (
    <div className="rc-breadcrumbs">
      <section className="rc-breadcrumbs-basic">
        <div className="rc-title">Basic breadcrumb</div>
        <div className="rc-group">
          {/*<Breadcrumb Divider={<Icon component={Slash} className="divider" />}>*/}
          {/*  <BreadcrumbItem current>Home</BreadcrumbItem>*/}
          {/*</Breadcrumb>*/}
          {/*<Breadcrumb Divider={<Icon component={Slash} className="divider" />}>*/}
          {/*  <BreadcrumbItem>*/}
          {/*    <a href="#">Home</a>*/}
          {/*  </BreadcrumbItem>*/}
          {/*  <BreadcrumbItem current>Library</BreadcrumbItem>*/}
          {/*</Breadcrumb>*/}
          {/*<Breadcrumb Divider={<Icon component={Slash} className="divider" />}>*/}
          {/*  <BreadcrumbItem>*/}
          {/*    <a href="#">Home</a>*/}
          {/*  </BreadcrumbItem>*/}
          {/*  <BreadcrumbItem>*/}
          {/*    <a href="#">Library</a>*/}
          {/*  </BreadcrumbItem>*/}
          {/*  <BreadcrumbItem current>Data</BreadcrumbItem>*/}
          {/*</Breadcrumb>*/}
        </div>
      </section>
      <section className="rc-breadcrumbs-divider">
        <div className="rc-title">Divider breadcrumb</div>
        <div className="rc-group">
          <Breadcrumb Divider={<Icon component={Divider} className="divider" />}>
            <BreadcrumbItem>
              <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="#">Component</a>
            </BreadcrumbItem>
            <BreadcrumbItem current>Library</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </section>
      <section className="rc-breadcrumbs-no-divider">
        <div className="rc-title">No divider breadcrumb</div>
        <div className="rc-group">
          <Breadcrumb noDivider>
            <BreadcrumbItem>
              <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem current>Library</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </section>
    </div>
  );
}

export default Breadcrumbs;
