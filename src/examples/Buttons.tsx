import React, { useState } from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';
import Upload from '../components/Upload';

function Buttons() {
  const buttons = `
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="success">Success</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="info">Info</Button>
    <Button variant="light">Light</Button>
    <Button variant="link">Link</Button>
  `;

  const buttonTypes = `
    <Button variant="primary" type="button">Button</Button>
    <Button variant="primary" type="reset">Reset</Button>
    <Button variant="primary" type="submit">Submit</Button>
  `;

  const outlineButtons = `
    <Button variant="outline-primary">Primary</Button>
    <Button variant="outline-secondary">Secondary</Button>
    <Button variant="outline-success">Success</Button>
    <Button variant="outline-danger">Danger</Button>
    <Button variant="outline-warning">Warning</Button>
    <Button variant="outline-info">Info</Button>
    <Button variant="outline-light">Light</Button>
    <Button variant="outline-dark">Dark</Button>
  `;

  const sizes = `
    <Button variant="primary" size="sm">Small button</Button>
    <Button variant="primary">Normal button</Button>
    <Button variant="primary" size="lg">Large button</Button>
  `;

  const buttonsIcon = `
    <Button variant="primary" prefixIcon={<Icon component={Acorn} />}>Primary</Button>
    <Button variant="outline-success" prefixIcon={<Icon component={Acorn} />} />
    <Button variant="danger" prefixIcon={<Icon component={Acorn} />} />
    <Button variant="warning" prefixIcon={<Icon component={Acorn} />} />
    <Button variant="link" prefixIcon={<Icon component={Acorn} />}>Link</Button>
    <Button variant="secondary" prefixIcon={<Icon component={Acorn} />} suffixIcon={<Icon component={Acorn} />}>Link</Button>
    <Button variant="primary" size="lg" prefixIcon={<Icon component={Acorn} size="lg" />}>Primary</Button>
    <Button variant="outline-success" size="sm" prefixIcon={<Icon component={Acorn} size="sm" />} />
  `;

  const loading = `
     <Button isLoading prefixIcon={<Icon component={Acorn} />}>Button</Button>
     <Button isLoading>Button</Button>
     <Button isLoading spinnerIcon={<Icon component={Acorn} isRotating />}>Button</Button>
  `;

  const disabledButtons = `
    <Button prefixIcon={<Icon component={Acorn} />} isDisabled />
    <Button isDisabled variant="secondary" prefixIcon={<Icon component={Acorn} />}>Button</Button>
    <Button isDisabled variant="success">Button</Button>
    <Button isDisabled variant="danger" isLoading>Button</Button>
  `;

  function uploadHandler(e: any) {
    console.log(e.currentTarget.files);
  }

  return (
    <div className="rb-buttons">
      <section className="rb-button-variant">
        <h1 className="rb-title">Buttons</h1>
        <div className="rb-group">
          <div className="rb-button">
            <Button variant="primary">Primary</Button>
          </div>
          <div className="rb-button">
            <Button variant="secondary">Secondary</Button>
          </div>
          <div className="rb-button">
            <Button variant="success">Success</Button>
          </div>
          <div className="rb-button">
            <Button variant="danger">Danger</Button>
          </div>
          <div className="rb-button">
            <Button variant="warning">Warning</Button>
          </div>
          <div className="rb-button">
            <Button variant="info">Info</Button>
          </div>
          <div className="rb-button">
            <Button variant="light">Light</Button>
          </div>
          <div className="rb-button">
            <Button variant="dark">Dark</Button>
          </div>
          <div className="rb-button">
            <Button variant="link">Link</Button>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {buttons}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-button-type">
        <h1 className="rb-title">Button types</h1>
        <div className="rb-group">
          <div className="rb-button">
            <Button variant="primary" type="button">
              Button
            </Button>
          </div>
          <div className="rb-button">
            <Button variant="primary" type="reset">
              Reset
            </Button>
          </div>
          <div className="rb-button">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {buttonTypes}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-button-outline">
        <h1 className="rb-title">Outline buttons</h1>
        <div className="rb-group">
          <div className="rb-button">
            <Button variant="outline-primary">Primary</Button>
          </div>
          <div className="rb-button">
            <Button variant="outline-secondary">Secondary</Button>
          </div>
          <div className="rb-button">
            <Button variant="outline-success">Success</Button>
          </div>
          <div className="rb-button">
            <Button variant="outline-danger">Danger</Button>
          </div>
          <div className="rb-button">
            <Button variant="outline-warning">Warning</Button>
          </div>
          <div className="rb-button">
            <Button variant="outline-info">Info</Button>
          </div>
          <div className="rb-button">
            <Button variant="outline-light">Light</Button>
          </div>
          <div className="rb-button">
            <Button variant="outline-dark">Dark</Button>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {outlineButtons}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-button-size">
        <h1 className="rb-title">Sizes</h1>
        <div className="rb-group">
          <div className="rb-button">
            <Button variant="primary" size="sm">
              Small button
            </Button>
          </div>
          <div className="rb-button">
            <Button variant="primary">Normal button</Button>
          </div>
          <div className="rb-button">
            <Button variant="primary" size="lg">
              Large button
            </Button>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {sizes}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-button-with-icon">
        <h1 className="rb-title">Buttons with icon</h1>
        <div className="rb-group">
          <div className="rb-button">
            <Button variant="primary" prefixIcon={<Icon component={Acorn} />}>
              Primary
            </Button>
          </div>
          <div className="rb-button">
            <Button variant="outline-success" prefixIcon={<Icon component={Acorn} />} />
          </div>
          <div className="rb-button">
            <Button variant="danger" prefixIcon={<Icon component={Acorn} />} />
          </div>
          <div className="rb-button">
            <Button variant="warning" prefixIcon={<Icon component={Acorn} />} />
          </div>
          <div className="rb-button">
            <Button variant="link" prefixIcon={<Icon component={Acorn} />}>
              Link
            </Button>
          </div>
          <div className="rb-button">
            <Button
              variant="secondary"
              prefixIcon={<Icon component={Acorn} />}
              suffixIcon={<Icon component={Acorn} />}
            >
              Link
            </Button>
          </div>
          <div className="rb-button">
            <Button variant="primary" size="lg" prefixIcon={<Icon component={Acorn} size="lg" />}>
              Primary
            </Button>
          </div>
          <div className="rb-button">
            <Button
              variant="outline-success"
              size="sm"
              prefixIcon={<Icon component={Acorn} size="sm" />}
            />
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {buttonsIcon}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="rb-button-with-loading">
        <h1 className="rb-title">Loading</h1>
        <div className="rb-group">
          <div className="rb-button">
            <Button isLoading prefixIcon={<Icon component={Acorn} />}>
              Button
            </Button>
          </div>
          <div className="rb-button">
            <Button isLoading>Button</Button>
          </div>
          <div className="rb-button">
            <Button isLoading spinnerIcon={<Icon component={Acorn} isRotating />}>
              Button
            </Button>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {loading}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-button-disabled">
        <h1 className="rb-title">Disabled buttons</h1>
        <div className="rb-group">
          <div className="rb-button">
            <Button prefixIcon={<Icon component={Acorn} />} isDisabled />
          </div>
          <div className="rb-button">
            <Button isDisabled variant="secondary" prefixIcon={<Icon component={Acorn} />}>
              Button
            </Button>
          </div>
          <div className="rb-button">
            <Button isDisabled variant="success">
              Button
            </Button>
          </div>
          <div className="rb-button">
            <Button isDisabled variant="danger" isLoading>
              Button
            </Button>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {disabledButtons}
          </SyntaxHighlighter>
        </div>
      </section>
      {/*<div className="rb-button-toggle">*/}
      {/*  <div className="rb-title">Toggle button</div>*/}
      {/*  <div className="rb-group">*/}
      {/*    <Button*/}
      {/*      variant="primary"*/}
      {/*      isLoading={loading1}*/}
      {/*      prefixIcon={<Icon component={Acorn} />}*/}
      {/*      onClick={clickHandler1}*/}
      {/*    >*/}
      {/*      <Upload onChange={uploadHandler}>Upload</Upload>*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}

export default Buttons;
