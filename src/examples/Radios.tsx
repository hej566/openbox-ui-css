import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Radio from '../components/Radio';

function Radios() {
  function changeHandler(e: any) {
    console.log(e.target.value);
  }

  const basic = `
    import Radio from '../components/Radio';

    <Radio label="default radio" name="test" value="1" isChecked className="form-check" />
    <Radio label="default radio" name="test" value="2" className="form-check" />
  `;

  const disabled = `
    import Radio from '../components/Radio';

    <Radio label="default radio" name="test" value="3" isDisabled className="form-check" />
  `;

  const event = `
    import Radio from '../components/Radio';

    function changeHandler(e: any) {
      console.log(e.target.value);
    }

    <div onChange={changeHandler}>
      <Radio
        label="default radio"
        value="4"
        name="test2"
        className="form-check"
      />
      <Radio
        label="default radio"
        value="5"
        name="test2"
        isChecked
        className="form-check"
      />
    </div>
  `;

  return (
    <div className="rb-radios">
      <section className="rb-radio-basic">
        <h1 className="rb-title">Radios</h1>
        <div className="rb-group">
          <div className="rb-radio-wrapper">
            <Radio label="default radio" name="test" value="1" isChecked className="form-check" />
            <Radio label="default radio" name="test" value="2" className="form-check" />
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-radio-basic">
        <h1 className="rb-title">Disabled</h1>
        <div className="rb-group">
          <div className="rb-radio-wrapper">
            <Radio label="default radio" value="3" isDisabled className="form-check" />
            <Radio label="default radio" value="3" isDisabled isChecked className="form-check" />
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {disabled}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-radio-basic">
        <h1 className="rb-title">Event</h1>
        <div className="rb-group">
          <div className="rb-radio-wrapper">
            <div onChange={changeHandler}>
              <Radio label="default radio" value="4" name="test2" className="form-check" />
              <Radio
                label="default radio"
                value="5"
                name="test2"
                isChecked
                className="form-check"
              />
            </div>
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

export default Radios;
