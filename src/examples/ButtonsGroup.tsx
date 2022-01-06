import React, { useState } from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';

function ButtonsGroup() {
  const buttonGroup = `
    import Button from '../components/Button';
    import ButtonGroup from '../components/ButtonGroup';

    <ButtonGroup>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
  `;
  const mixedButtonGroup = `
    import Button from '../components/Button';
    import ButtonGroup from '../components/ButtonGroup';
    
    <ButtonGroup>
      <Button variant="danger" type="button">Left</Button>
      <Button variant="warning" type="reset">Middle</Button>
      <Button variant="success" type="submit">Right</Button>
    </ButtonGroup> 
  `;
  const outlineButtonGroup = `
    import Button from '../components/Button';
    import ButtonGroup from '../components/ButtonGroup';
    
    <ButtonGroup>
      <Button variant="outline-primary">Left</Button>
      <Button variant="outline-primary">Middle</Button>
      <Button variant="outline-primary">Right</Button>
    </ButtonGroup>
  `;
  const iconButtonGroup = `
    import Button from '../components/Button';
    import ButtonGroup from '../components/ButtonGroup';
    import Icon from '../components/Icon';
    import Acorn from '../assets/icons/svg/acorn-duotone.svg';
    
    <ButtonGroup>
      <Button variant="primary" prefixIcon={<Icon component={Acorn} />} />
      <Button variant="primary" prefixIcon={<Icon component={Acorn} />} />
      <Button variant="primary" prefixIcon={<Icon component={Acorn} />} />
    </ButtonGroup>
  `;
  const sizeButtonGroup = `
    import Button from '../components/Button';
    import ButtonGroup from '../components/ButtonGroup';
    
    <ButtonGroup size="sm">
      <Button variant="primary" size="sm">Left</Button>
      <Button variant="primary" size="sm">Middle</Button>
      <Button variant="primary" size="sm">Right</Button>
    </ButtonGroup> 
    <ButtonGroup>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
    <ButtonGroup size="lg">
      <Button variant="primary" size="lg">Left</Button>
      <Button variant="primary" size="lg">Middle</Button>
      <Button variant="primary" size="lg">Right</Button>
    </ButtonGroup>
  `;
  const disabledButtonGroup = `
    import Button from '../components/Button';
    import ButtonGroup from '../components/ButtonGroup';
    import Icon from '../components/Icon';
    import Acorn from '../assets/icons/svg/acorn-duotone.svg';

    <ButtonGroup>
      <Button prefixIcon={<Icon component={Acorn} />} isDisabled>Left</Button>
      <Button isDisabled variant="secondary" prefixIcon={<Icon component={Acorn} />}>Middle</Button>
      <Button isDisabled variant="success">Right</Button>
    </ButtonGroup> 
  `;
  const verticalButtonGroup = `
    import Button from '../components/Button';
    import ButtonGroup from '../components/ButtonGroup';
    
    <ButtonGroup direct="vertical">
      <Button variant="primary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="success">Right</Button>
    </ButtonGroup>
  `;

  return (
    <div className="rb-button-groups container-fluid">
      <section className="rb-button-groups-basic">
        <h1 className="rb-title">Button group</h1>
        <div className="rb-group">
          <div className="rb-button-group">
            <ButtonGroup>
              <Button variant="primary">Left</Button>
              <Button variant="primary">Middle</Button>
              <Button variant="primary">Right</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {buttonGroup}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-button-groups-mixed">
        <h1 className="rb-title">Mixed styles</h1>
        <div className="rb-group">
          <div className="rb-button-group">
            <ButtonGroup>
              <Button variant="danger" type="button">
                Left
              </Button>
              <Button variant="warning" type="reset">
                Middle
              </Button>
              <Button variant="success" type="submit">
                Right
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {mixedButtonGroup}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-button-groups-outline">
        <h1 className="rb-title">Outlined styles</h1>
        <div className="rb-group">
          <div className="rb-button-group">
            <ButtonGroup>
              <Button variant="outline-primary">Left</Button>
              <Button variant="outline-primary">Middle</Button>
              <Button variant="outline-primary">Right</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {outlineButtonGroup}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-button-groups-size">
        <h1 className="rb-title">Sizing</h1>
        <div className="rb-group">
          <div className="rb-button-group">
            <ButtonGroup size="sm">
              <Button variant="primary" size="sm">
                Left
              </Button>
              <Button variant="primary" size="sm">
                Middle
              </Button>
              <Button variant="primary" size="sm">
                Right
              </Button>
            </ButtonGroup>
          </div>
          <div className="rb-button-group">
            <ButtonGroup>
              <Button variant="primary">Left</Button>
              <Button variant="primary">Middle</Button>
              <Button variant="primary">Right</Button>
            </ButtonGroup>
          </div>
          <div className="rb-button-group">
            <ButtonGroup size="lg">
              <Button variant="primary" size="lg">
                Left
              </Button>
              <Button variant="primary" size="lg">
                Middle
              </Button>
              <Button variant="primary" size="lg">
                Right
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {sizeButtonGroup}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-button-group-with-icon">
        <h1 className="rb-title">Icon styles</h1>
        <div className="rb-group">
          <div className="rb-button-group">
            <ButtonGroup>
              <Button variant="primary" prefixIcon={<Icon component={Acorn} />} />
              <Button variant="primary" prefixIcon={<Icon component={Acorn} />} />
              <Button variant="primary" prefixIcon={<Icon component={Acorn} />} />
            </ButtonGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {iconButtonGroup}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-button-group-disabled">
        <h1 className="rb-title">Disabled styles</h1>
        <div className="rb-group">
          <div className="rb-button-group">
            <ButtonGroup>
              <Button prefixIcon={<Icon component={Acorn} />} isDisabled>
                Left
              </Button>
              <Button isDisabled variant="secondary" prefixIcon={<Icon component={Acorn} />}>
                Middle
              </Button>
              <Button isDisabled variant="success">
                Right
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {disabledButtonGroup}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-button-group-vertical">
        <h1 className="rb-title">Vertical styles</h1>
        <div className="rb-group">
          <div className="rb-button-group">
            <ButtonGroup direct="vertical">
              <Button variant="primary">Left</Button>
              <Button variant="secondary">Middle</Button>
              <Button variant="success">Right</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {verticalButtonGroup}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default ButtonsGroup;
