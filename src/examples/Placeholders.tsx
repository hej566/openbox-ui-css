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
            <span>&nbsp;</span>
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-7" animate="glow">
            <span>&nbsp;</span>
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-4">
            <Button isDisabled>&nbsp;</Button>
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-4" animate="glow">
            <Button isDisabled>&nbsp;</Button>
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-12" animate="wave">
            <span>&nbsp;</span>
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-4" animate="glow">
            <Button isDisabled>&nbsp;</Button>
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-5" size="xs" animate="glow">
            <span />
          </Placeholder>
          <Placeholder className="col-5" size="xs" animate="glow">
            <span />
          </Placeholder>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Placeholder className="col-12 bg-warning" animate="wave" size="sm">
            <span>&nbsp;</span>
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
