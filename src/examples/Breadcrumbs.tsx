import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Breadcrumb from '../components/Breadcrumb';
import BreadcrumbItem from '../components/BreadcrumbItem';
import Icon from '../components/Icon';
import Divider from '../assets/icons/svg/chevron-right-regular.svg';

function Breadcrumbs() {
  const breadcrumb = `
    import Breadcrumb from '../components/Breadcrumb';
    import BreadcrumbItem from '../components/BreadcrumbItem';
    import Icon from '../components/Icon';
    import Divider from '../assets/icons/svg/chevron-right-regular.svg';

    <Breadcrumb Divider={<Icon component={Divider} className="divider" />}>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Component</a>
      </BreadcrumbItem>
      <BreadcrumbItem current>Library</BreadcrumbItem>
    </Breadcrumb>
  `;

  return (
    <div className="rb-breadcrumbs container-fluid">
      <section className="rb-breadcrumbs-basic">
        <h1 className="rb-title">Breadcrumb</h1>
        <div className="rb-group">
          <div className="rb-breadcrumb">
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
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {breadcrumb}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Breadcrumbs;
