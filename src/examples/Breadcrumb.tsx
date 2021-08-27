import React from 'react';
import BreadcrumbGroup from '../components/BreadcrumbGroup';
import BreadcrumbItem from '../components/BreadcrumbItem';
import Icon from '../components/Icon';
import Slash from '../assets/icons/svg/slash-regular.svg';

function Breadcrumbs() {
  return (
    <div className="rc-breadcrumbs">
      <section className="rc-breadcrumbs-basic">
        <div className="rc-title">Basic</div>
        <div className="rc-breadcrumbs-group">
          <BreadcrumbGroup Divider={<Icon Component={Slash} />}>
            <BreadcrumbItem current>Home</BreadcrumbItem>
          </BreadcrumbGroup>
          <BreadcrumbGroup Divider={<Icon Component={Slash} />}>
            <BreadcrumbItem>
              <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem current>Library</BreadcrumbItem>
          </BreadcrumbGroup>
          <BreadcrumbGroup Divider={<Icon Component={Slash} />}>
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
    </div>
  );
}

export default Breadcrumbs;
