import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Placeholder from '../components/Placeholder';
import Button from '../components/Button';

function Placeholders() {
  return (
    <div className="rc-navbars">
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-7">
            <span>X</span>
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-7" animate="glow">
            <span>X</span>
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-4">
            <Button disabled>X</Button>
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-4" animate="glow">
            <Button disabled>X</Button>
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-12" animate="wave">
            <span>X</span>
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-4" animate="glow">
            <Button disabled>X</Button>
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-12" animate="wave" size="xs">
            <span />
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-12 bg-warning" animate="wave" size="sm">
            <span />
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-12" animate="wave" size="lg">
            <span />
          </Placeholder>
        </div>
      </section>
    </div>
  );
}

export default Placeholders;
