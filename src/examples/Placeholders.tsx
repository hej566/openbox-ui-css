import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Placeholder from '../components/Placeholder';
import Button from '../components/Button';

function Placeholders() {
  const basic = `
    import Placeholder from '../components/Placeholder';

    <Placeholder className="col-7" animate="wave">
      <span>&nbsp;</span>
    </Placeholder>
    
    <Placeholder className="col-7" animate="glow">
      <span>&nbsp;</span>
    </Placeholder>
  `;

  const button = `
     import Placeholder from '../components/Placeholder';
 
     <Placeholder className="col-4" animate="wave">
       <Button isDisabled variant="danger">
          &nbsp;
       </Button>
     </Placeholder>
    
     <Placeholder className="col-4" animate="glow">
       <Button isDisabled>&nbsp;</Button>
     </Placeholder>
   `;

  const text = `
    import Placeholder from '../components/Placeholder';
    
    <Placeholder className="col-12" animate="wave">
      <span>&nbsp;</span>
    </Placeholder>
    
    <Placeholder className="col-12" animate="glow">
      <span>&nbsp;</span>
    </Placeholder>
  `;

  const smallText = `
    import Placeholder from '../components/Placeholder';
    
    <Placeholder className="col-5" size="xs" animate="wave">
      <span />
    </Placeholder>
    
    <Placeholder className="col-5" size="xs" animate="glow">
      <span />
    </Placeholder>
  `;

  const variant = `
    import Placeholder from '../components/Placeholder';
    
    <Placeholder className="col-12 bg-success" animate="wave">
      <span>&nbsp;</span>
    </Placeholder>
    
    <Placeholder className="col-12 bg-warning" animate="glow">
      <span>&nbsp;</span>
    </Placeholder>
    
    <Placeholder className="col-12 bg-danger" animate="glow">
      <span>&nbsp;</span>
    </Placeholder>
  `;

  return (
    <div className="rb-placeholders">
      <section className="rb-placeholder-basic">
        <h1 className="rb-title">Placeholder</h1>
        <div className="rb-group">
          <div className="rb-placeholder-wrapper">
            <Placeholder className="col-7" animate="wave">
              <span>&nbsp;</span>
            </Placeholder>
          </div>
          <div className="rb-placeholder-wrapper">
            <Placeholder className="col-7" animate="glow">
              <span>&nbsp;</span>
            </Placeholder>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-placeholder-basic">
        <h1 className="rb-title">Button</h1>
        <div className="rb-group">
          <div className="rb-placeholder-wrapper">
            <Placeholder className="col-4" animate="wave">
              <Button isDisabled variant="danger">
                &nbsp;
              </Button>
            </Placeholder>
          </div>
          <div className="rb-placeholder-wrapper">
            <Placeholder className="col-4" animate="glow">
              <Button isDisabled>&nbsp;</Button>
            </Placeholder>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {button}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-placeholder-basic">
        <h1 className="rb-title">Text</h1>
        <div className="rb-group">
          <div className="rb-placeholder-wrapper">
            <Placeholder className="col-12" animate="wave">
              <span>&nbsp;</span>
            </Placeholder>
          </div>
          <div className="rb-placeholder-wrapper">
            <Placeholder className="col-12" animate="glow">
              <span>&nbsp;</span>
            </Placeholder>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {text}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-placeholder-basic">
        <h1 className="rb-title">Small text</h1>
        <div className="rb-group">
          <div className="rb-placeholder-wrapper">
            <Placeholder className="col-5" size="xs" animate="wave">
              <span />
            </Placeholder>
          </div>
          <div className="rb-placeholder-wrapper">
            <Placeholder className="col-5" size="xs" animate="glow">
              <span />
            </Placeholder>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {smallText}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-placeholder-basic">
        <h1 className="rb-title">Variant</h1>
        <div className="rb-group">
          <div className="rb-placeholder-wrapper">
            <Placeholder className="col-12 bg-success" animate="wave">
              <span>&nbsp;</span>
            </Placeholder>
          </div>
          <div className="rb-placeholder-wrapper">
            <Placeholder className="col-12 bg-warning" animate="glow">
              <span>&nbsp;</span>
            </Placeholder>
          </div>
          <div className="rb-placeholder-wrapper">
            <Placeholder className="col-12 bg-danger" animate="glow">
              <span>&nbsp;</span>
            </Placeholder>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {variant}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Placeholders;
