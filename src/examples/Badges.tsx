import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from '../components/Button';
import Badge from '../components/Badge';

function Badges() {
  const heading = `
    <h2>Example heading <Badge className="bg-secondary">New</Badge></h2> 
    <h3>Example heading <Badge className="bg-secondary">New</Badge></h3> 
    <h4>Example heading <Badge className="bg-secondary">New</Badge></h4> 
    <h5>Example heading <Badge className="bg-secondary">New</Badge></h5>
  `;

  const background = `
    <Badge className="bg-primary">Primary</Badge>
    <Badge className="bg-secondary">Secondary</Badge>
    <Badge className="bg-success">Success</Badge>
    <Badge className="bg-danger">Danger</Badge>
    <Badge className="bg-warning text-dark">Warning</Badge>
    <Badge className="bg-info text-dark">Info</Badge>
    <Badge className="bg-light text-dark">Light</Badge>
    <Badge className="bg-dark">Dark</Badge> 
  `;

  const pill = `
    <Badge className="bg-primary rounded-pill">Primary</Badge>
    <Badge className="bg-secondary rounded-pill">Secondary</Badge>
    <Badge className="bg-success rounded-pill">Success</Badge>
    <Badge className="bg-danger rounded-pill">Danger</Badge>
    <Badge className="bg-warning text-dark rounded-pill">Warning</Badge>
    <Badge className="bg-info text-dark rounded-pill">Info</Badge>
    <Badge className="bg-light text-dark rounded-pill">Light</Badge>
    <Badge className="bg-dark rounded-pill">Dark</Badge>  
  `;

  const positioned = `
    <Button>
      inbox
      <Badge className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        99+
         <span className="visually-hidden">unread messages</span>
      </Badge>
    </Button> 
    <Button>
      profile
      <Badge className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
        <span className="visually-hidden">New alerts</span>
      </Badge>
    </Button> 
  `;

  const buttons = `
    <Button>
      Notification
      <Badge className="bg-secondary">4</Badge>
    </Button>
  `;

  return (
    <div className="rb-badges">
      <section className="rb-badges-heading">
        <h1 className="rb-title">Badges</h1>
        <div className="rb-group">
          <div className="rb-badge-group">
            <h2>
              Example heading <Badge className="bg-secondary">New</Badge>
            </h2>
            <h3>
              Example heading <Badge className="bg-secondary">New</Badge>
            </h3>
            <h4>
              Example heading <Badge className="bg-secondary">New</Badge>
            </h4>
            <h5>
              Example heading <Badge className="bg-secondary">New</Badge>
            </h5>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {heading}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-badges-bg-color">
        <h1 className="rb-title">Background colors</h1>
        <div className="rb-group">
          <div className="rb-badge-group">
            <Badge className="bg-primary">Primary</Badge>
            <Badge className="bg-secondary">Secondary</Badge>
            <Badge className="bg-success">Success</Badge>
            <Badge className="bg-danger">Danger</Badge>
            <Badge className="bg-warning text-dark">Warning</Badge>
            <Badge className="bg-info text-dark">Info</Badge>
            <Badge className="bg-light text-dark">Light</Badge>
            <Badge className="bg-dark">Dark</Badge>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {background}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-badges-pill">
        <h1 className="rb-title">Pill badges</h1>
        <div className="rb-group">
          <div className="rb-badge-group">
            <Badge className="bg-primary rounded-pill">Primary</Badge>
            <Badge className="bg-secondary rounded-pill">Secondary</Badge>
            <Badge className="bg-success rounded-pill">Success</Badge>
            <Badge className="bg-danger rounded-pill">Danger</Badge>
            <Badge className="bg-warning text-dark rounded-pill">Warning</Badge>
            <Badge className="bg-info text-dark rounded-pill">Info</Badge>
            <Badge className="bg-light text-dark rounded-pill">Light</Badge>
            <Badge className="bg-dark rounded-pill">Dark</Badge>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {pill}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-badges-positioned">
        <h1 className="rb-title">Positioned</h1>
        <div className="rb-group">
          <div className="rb-badge-group">
            <Button>
              inbox
              <Badge className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">unread messages</span>
              </Badge>
            </Button>
          </div>
          <div className="rb-badge-group">
            <Button>
              profile
              <Badge className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </Badge>
            </Button>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {positioned}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-badges-button">
        <h1 className="rb-title">Buttons</h1>
        <div className="rb-group">
          <div className="rb-badge-group">
            <Button>
              Notification
              <Badge className="bg-secondary">4</Badge>
            </Button>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {buttons}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Badges;
