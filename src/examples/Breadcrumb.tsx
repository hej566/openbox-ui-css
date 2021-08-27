import React from 'react';
import BreadcrumbGroup from '../components/BreadcrumbGroup';
import BreadcrumbItem from '../components/BreadcrumbItem';
import Icon from '../components/Icon';
import Slash from '../assets/icons/svg/slash-regular.svg';
import Divider from '../assets/icons/svg/chevron-right-regular.svg';

function Breadcrumbs() {
  return (
    <div className="rc-breadcrumbs">
      <section className="rc-breadcrumbs-basic">
        <div className="rc-title">Basic breadcrumb</div>
        <div className="rc-group">
          <BreadcrumbGroup Divider={<Icon Component={Slash} className="divider" />}>
            <BreadcrumbItem current>Home</BreadcrumbItem>
          </BreadcrumbGroup>
          <BreadcrumbGroup Divider={<Icon Component={Slash} className="divider" />}>
            <BreadcrumbItem>
              <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem current>Library</BreadcrumbItem>
          </BreadcrumbGroup>
          <BreadcrumbGroup Divider={<Icon Component={Slash} className="divider" />}>
            <BreadcrumbItem>
              <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="#">Library</a>
            </BreadcrumbItem>
            <BreadcrumbItem current>Data</BreadcrumbItem>
          </BreadcrumbGroup>
        </div>
      </section>
      <section className="rc-breadcrumbs-divider">
        <div className="rc-title">Divider breadcrumb</div>
        <div className="rc-group">
          <BreadcrumbGroup Divider={<Icon Component={Divider} className="divider" />}>
            <BreadcrumbItem>
              <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem current>Library</BreadcrumbItem>
          </BreadcrumbGroup>
        </div>
      </section>
      <section className="rc-breadcrumbs-no-divider">
        <div className="rc-title">No divider breadcrumb</div>
        <div className="rc-group">
          <BreadcrumbGroup noDivider>
            <BreadcrumbItem>
              <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem current>Library</BreadcrumbItem>
          </BreadcrumbGroup>
        </div>
      </section>
    </div>
  );
}

export default Breadcrumbs;
