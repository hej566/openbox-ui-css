import React from 'react';
import Button from '../components/Button';
import Badge from '../components/Badge';

function Badges() {
  return (
    <div className="rc-badges">
      <section className="rc-badges-basic">
        <div className="rc-title">Basic badge</div>
        <div className="rc-group">
          <h1>
            Example heading <Badge className="bg-secondary">New</Badge>
          </h1>
          <h2>
            Example heading <Badge className="bg-secondary">New</Badge>
          </h2>
          <h3>
            Example heading <Badge className="bg-secondary">New</Badge>
          </h3>
        </div>
      </section>
      <section className="rc-badges-bg-color">
        <div className="rc-title">Background colors badge</div>
        <div className="rc-group">
          <Badge className="bg-primary">Primary</Badge>
          <Badge className="bg-secondary">Secondary</Badge>
          <Badge className="bg-success">Success</Badge>
          <Badge className="bg-danger">Danger</Badge>
          <Badge className="bg-warning text-dark">Warning</Badge>
          <Badge className="bg-info text-dark">Info</Badge>
          <Badge className="bg-light text-dark">Light</Badge>
          <Badge className="bg-dark">Dark</Badge>
        </div>
      </section>
      <section className="rc-badges-pill">
        <div className="rc-title">Pill badge</div>
        <div className="rc-group">
          <Badge className="bg-primary rounded-pill">Primary</Badge>
          <Badge className="bg-secondary rounded-pill">Secondary</Badge>
          <Badge className="bg-success rounded-pill">Success</Badge>
          <Badge className="bg-danger rounded-pill">Danger</Badge>
          <Badge className="bg-warning text-dark rounded-pill">Warning</Badge>
          <Badge className="bg-info text-dark rounded-pill">Info</Badge>
          <Badge className="bg-light text-dark rounded-pill">Light</Badge>
          <Badge className="bg-dark rounded-pill">Dark</Badge>
        </div>
      </section>
    </div>
  );
}

export default Badges;
