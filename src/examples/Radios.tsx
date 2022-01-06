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

    <Radio name="test" value="1" isChecked className="form-check">default radio</Radio>
    <Radio name="test" value="2" className="form-check">default radio</Radio>
  `;

  const disabled = `
    import Radio from '../components/Radio';

    <Radio name="test" value="3" isDisabled className="form-check">default radio</Radio>
  `;

  const event = `
    import Radio from '../components/Radio';

    function changeHandler(e: any) {
      console.log(e.target.value);
    }

    <div onChange={changeHandler}>
      <Radio
        value="4"
        name="test2"
        className="form-check"
      >default radio</Radio>
      <Radio
        value="5"
        name="test2"
        isChecked
        className="form-check"
      >default radio</Radio>
    </div>
  `;

  return (
    <div className="rb-radios container-fluid">
      <section className="rb-radio-basic">
        <h1 className="rb-title">Radio</h1>
        <div className="rb-group">
          <div className="rb-radio-wrapper">
            <Radio name="test" value="1" isChecked className="form-check">
              default radio
            </Radio>
            <Radio name="test" value="2" className="form-check">
              default radio
            </Radio>
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
            <Radio value="3" isDisabled className="form-check">
              default radio
            </Radio>
            <Radio value="3" isDisabled isChecked className="form-check">
              default radio
            </Radio>
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
              <Radio value="4" name="test2" className="form-check">
                default radio
              </Radio>
              <Radio value="5" name="test2" isChecked className="form-check">
                default radio
              </Radio>
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
