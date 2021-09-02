import React from 'react';
import Alert from '../components/Alert';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';
import Button from '../components/Button';
import Times from '../assets/icons/svg/times-regular.svg';

function Alerts() {
  return (
    <div className="rc-alerts">
      <section className="rc-alert-variant">
        <div className="rc-title">Basic alert</div>
        <div className="rc-group">
          <Alert variant="primary">A simple primary alert—check it out!</Alert>
          <Alert variant="secondary">A simple secondary alert—check it out!</Alert>
          <Alert variant="success">A simple success alert—check it out!</Alert>
          <Alert variant="danger">A simple danger alert—check it out!</Alert>
          <Alert variant="warning">A simple warning alert—check it out!</Alert>
          <Alert variant="info">A simple info alert—check it out!</Alert>
          <Alert variant="light">A simple light alert—check it out!</Alert>
          <Alert variant="dark">A simple dark alert—check it out!</Alert>
        </div>
      </section>
      <section className="rc-alert-link-content">
        <div className="rc-title">Link color alert</div>
        <div className="rc-group">
          <Alert variant="primary">
            A simple primary alert with
            <a href="#" className="alert-link">
              {' '}
              an example link{' '}
            </a>
            . Give it a click if you like.
          </Alert>
          <Alert variant="secondary">
            A simple secondary alert with
            <a href="#" className="alert-link">
              {' '}
              an example link{' '}
            </a>
            . Give it a click if you like.
          </Alert>
          <Alert variant="success">
            A simple success alert with
            <a href="#" className="alert-link">
              {' '}
              an example link{' '}
            </a>
            . Give it a click if you like.
          </Alert>
          <Alert variant="danger">
            A simple danger alert with
            <a href="#" className="alert-link">
              {' '}
              an example link{' '}
            </a>
            . Give it a click if you like.
          </Alert>
          <Alert variant="warning">
            A simple warning alert with
            <a href="#" className="alert-link">
              {' '}
              an example link{' '}
            </a>
            . Give it a click if you like.
          </Alert>
          <Alert variant="info">
            A simple info alert with
            <a href="#" className="alert-link">
              {' '}
              an example link{' '}
            </a>
            . Give it a click if you like.
          </Alert>
          <Alert variant="light">
            A simple light alert with
            <a href="#" className="alert-link">
              {' '}
              an example link{' '}
            </a>
            . Give it a click if you like.
          </Alert>
          <Alert variant="dark">
            A simple dark alert with
            <a href="#" className="alert-link">
              {' '}
              an example link{' '}
            </a>
            . Give it a click if you like.
          </Alert>
        </div>
      </section>
      <section className="rc-alert-additional-content">
        <div className="rc-title">Additional content alert</div>
        <div className="rc-group">
          <Alert variant="success">
            <h4 className="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This example text is
              going to run a bit longer so that you can see how spacing within an alert works with
              this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
          </Alert>
        </div>
      </section>
      <section className="rc-alert-prefix-icon">
        <div className="rc-title">Icon alert</div>
        <div className="rc-group">
          <Alert className="d-flex align-items-center">
            <Icon Component={Acorn} size="lg" />
            <div>An example alert with an icon</div>
          </Alert>
          <Alert className="d-flex align-items-center" variant="success">
            <Icon Component={Acorn} size="lg" />
            <div>An example alert with an icon</div>
          </Alert>
          <Alert className="d-flex align-items-center" variant="warning">
            <Icon Component={Acorn} size="lg" />
            <div>An example alert with an icon</div>
          </Alert>
        </div>
      </section>
      <section className="rc-alert-button">
        <div className="rc-title">Icon button alert</div>
        <div className="rc-group">
          <Alert className="suffix-btn" variant="warning">
            <span>
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            </span>
            <Button variant="link" PrefixIcon={<Icon Component={Times} size="lg" />} />
          </Alert>
        </div>
      </section>
    </div>
  );
}

export default Alerts;
