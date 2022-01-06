import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Alert from '../components/Alert';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';
import Button from '../components/Button';
import Times from '../assets/icons/svg/times-regular.svg';

function Alerts() {
  const variants = `
    import Alert from '../components/Alert';

    <Alert variant="primary">A simple primary alert—check it out!</Alert> 
    <Alert variant="secondary">A simple secondary alert—check it out!</Alert>
    <Alert variant="success">A simple success alert—check it out!</Alert> 
    <Alert variant="danger">A simple danger alert—check it out!</Alert>
    <Alert variant="warning">A simple warning alert—check it out!</Alert>
    <Alert variant="info">A simple info alert—check it out!</Alert>
    <Alert variant="light">A simple light alert—check it out!</Alert>
    <Alert variant="dark">A simple dark alert—check it out!</Alert> 
  `;

  const linkColor = `
    import Alert from '../components/Alert';
    
    <Alert variant="primary">
      A simple primary alert with
      <a href="#" className="alert-link">
        &nbsp; an example link &nbsp;
      </a>
      . Give it a click if you like.
    </Alert> 
    <Alert variant="secondary">
      A simple secondary alert with
      <a href="#" className="alert-link">
        &nbsp; an example link &nbsp;
      </a>
      . Give it a click if you like.
    </Alert> 
    <Alert variant="success">
      A simple success alert with
      <a href="#" className="alert-link">
        &nbsp; an example link &nbsp;
      </a>
      . Give it a click if you like.
    </Alert> 
    <Alert variant="danger">
      A simple danger alert with
      <a href="#" className="alert-link">
        &nbsp; an example link &nbsp;
      </a>
      . Give it a click if you like.
    </Alert> 
    <Alert variant="warning">
      A simple warning alert with
      <a href="#" className="alert-link">
        &nbsp; an example link &nbsp;
      </a>
      . Give it a click if you like.
    </Alert> 
    <Alert variant="info">
      A simple info alert with
      <a href="#" className="alert-link">
        &nbsp; an example link &nbsp;
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert variant="light">
      A simple light alert with
      <a href="#" className="alert-link">
        &nbsp; an example link &nbsp;
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert variant="dark">
      A simple dark alert with
      <a href="#" className="alert-link">
        &nbsp; an example link &nbsp;
      </a>
      . Give it a click if you like.
    </Alert>
  `;

  const additional = `
    import Alert from '../components/Alert';
    
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
  `;

  return (
    <div className="rb-alerts container-fluid">
      <section className="rb-alert-variant">
        <h1 className="rb-title">Alert</h1>
        <div className="rb-group">
          <div className="rb-alert">
            <Alert variant="primary">A simple primary alert—check it out!</Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="secondary">A simple secondary alert—check it out!</Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="success">A simple success alert—check it out!</Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="danger">A simple danger alert—check it out!</Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="warning">A simple warning alert—check it out!</Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="info">A simple info alert—check it out!</Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="light">A simple light alert—check it out!</Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="dark">A simple dark alert—check it out!</Alert>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {variants}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-alert-link-content">
        <h1 className="rb-title">Link color</h1>
        <div className="rb-group">
          <div className="rb-alert">
            <Alert variant="primary">
              A simple primary alert with
              <a href="#" className="alert-link">
                &nbsp; an example link &nbsp;
              </a>
              . Give it a click if you like.
            </Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="secondary">
              A simple secondary alert with
              <a href="#" className="alert-link">
                &nbsp; an example link &nbsp;
              </a>
              . Give it a click if you like.
            </Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="success">
              A simple success alert with
              <a href="#" className="alert-link">
                &nbsp; an example link &nbsp;
              </a>
              . Give it a click if you like.
            </Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="danger">
              A simple danger alert with
              <a href="#" className="alert-link">
                &nbsp; an example link &nbsp;
              </a>
              . Give it a click if you like.
            </Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="warning">
              A simple warning alert with
              <a href="#" className="alert-link">
                &nbsp; an example link &nbsp;
              </a>
              . Give it a click if you like.
            </Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="info">
              A simple info alert with
              <a href="#" className="alert-link">
                &nbsp; an example link &nbsp;
              </a>
              . Give it a click if you like.
            </Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="light">
              A simple light alert with
              <a href="#" className="alert-link">
                &nbsp; an example link &nbsp;
              </a>
              . Give it a click if you like.
            </Alert>
          </div>
          <div className="rb-alert">
            <Alert variant="dark">
              A simple dark alert with
              <a href="#" className="alert-link">
                &nbsp; an example link &nbsp;
              </a>
              . Give it a click if you like.
            </Alert>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {linkColor}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-alert-additional-content">
        <h1 className="rb-title">Additional content alert</h1>
        <div className="rb-group">
          <div className="rb-alert">
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
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {additional}
          </SyntaxHighlighter>
        </div>
      </section>
      {/*<section className="rc-alert-prefix-icon">*/}
      {/*  <div className="rc-title">Icon alert</div>*/}
      {/*  <div className="rc-group">*/}
      {/*    <Alert className="d-flex align-items-center">*/}
      {/*      <Icon component={Acorn} size="lg" />*/}
      {/*      <div>An example alert with an icon</div>*/}
      {/*    </Alert>*/}
      {/*    <Alert className="d-flex align-items-center" variant="success">*/}
      {/*      <Icon component={Acorn} size="lg" />*/}
      {/*      <div>An example alert with an icon</div>*/}
      {/*    </Alert>*/}
      {/*    <Alert className="d-flex align-items-center" variant="warning">*/}
      {/*      <Icon component={Acorn} size="lg" />*/}
      {/*      <div>An example alert with an icon</div>*/}
      {/*    </Alert>*/}
      {/*  </div>*/}
      {/*</section>*/}
      {/*<section className="rc-alert-button">*/}
      {/*  <div className="rc-title">Icon button alert</div>*/}
      {/*  <div className="rc-group">*/}
      {/*    <Alert className="suffix-btn" variant="warning">*/}
      {/*      <span>*/}
      {/*        <strong>Holy guacamole!</strong> You should check in on some of those fields below.*/}
      {/*      </span>*/}
      {/*      <Button variant="link" prefixIcon={<Icon component={Times} size="lg" />} />*/}
      {/*    </Alert>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
}

export default Alerts;
