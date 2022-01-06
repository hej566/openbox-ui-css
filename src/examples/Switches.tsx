import React, { useState } from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Switch from '../components/Switch';

function Switches() {
  const [isChecked, setChecked] = useState(false);

  function changeHandler(checked: boolean) {
    if (checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }

  const basic = `
    import Switch from '../components/Switch';
     
    <Switch label="Default checkbox" isChecked={false} />
  `;

  const disabled = `
    import Switch from '../components/Switch';
    
    <Switch label="disabled checkbox" isChecked={false} isDisabled />
    <Switch label="disabled checkbox" isChecked isDisabled />
  `;

  const event = `
    import Switch from '../components/Switch';
     
    const [isChecked, setChecked] = useState(false);
    
    function changeHandler(checked: boolean) {
      if (checked) {
        setChecked(true);
      } else {
        setChecked(false);
      }
    }
    
    <Switch label="Default checkbox" isChecked={isChecked} onChange={changeHandler} />
  `;

  return (
    <div className="rb-switches container-fluid">
      <section className="rb-switch-basic">
        <h1 className="rb-title">Switch</h1>
        <div className="rb-group">
          <div className="rb-switch-wrapper">
            <Switch label="Default checkbox" isChecked={isChecked} />
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-switch-basic">
        <h1 className="rb-title">Disabled</h1>
        <div className="rb-group">
          <div className="rb-switch-wrapper">
            <Switch label="disabled checkbox" isChecked={isChecked} isDisabled />
            <Switch label="disabled checkbox" isChecked isDisabled />
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {disabled}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-switch-basic">
        <h1 className="rb-title">Event</h1>
        <div className="rb-group">
          <div className="rb-switch-wrapper">
            <Switch label="Default checkbox" isChecked={isChecked} onChange={changeHandler} />
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {event}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Switches;
