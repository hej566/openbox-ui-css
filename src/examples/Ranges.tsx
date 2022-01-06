import React, { useState } from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Range from '../components/Range';

function Ranges() {
  const basic = `
    import Range from '../components/Range';

    <Range current={40} />
  `;

  const label = `
    import Range from '../components/Range';

    <Range current={40} label="40%"/>
  `;

  const disabled = `
    import Range from '../components/Range';

    <Range current={40} label="40%" isDisabled />
  `;

  return (
    <div className="rb-ranges container-fluid">
      <section className="rb-range-basic">
        <h1 className="rb-title">Range</h1>
        <div className="rb-group">
          <div className="rb-range-wrapper">
            <Range current={40} />
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-range-basic">
        <h1 className="rb-title">Label</h1>
        <div className="rb-group">
          <div className="rb-range-wrapper">
            <Range current={40} label="40%" />
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {label}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-range-basic">
        <h1 className="rb-title">Disabled</h1>
        <div className="rb-group">
          <div className="rb-range-wrapper">
            <Range current={40} label="40%" isDisabled />
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {disabled}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Ranges;
