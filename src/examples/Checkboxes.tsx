import React, { useState } from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Checkbox from '../components/Checkbox';

function Checkboxes() {
  const [isChecked, setChecked] = useState(false);
  const [isIndeterminate, setIndeterminate] = useState(true);

  function changeHandler() {
    setChecked(!isChecked);
    setIndeterminate(!isIndeterminate);
  }

  const basic = `
    import Checkbox from '../components/Checkbox';
    
    <Checkbox
      checked={false}
      className="form-check"
    >default checkbox</Checkbox>
  `;

  const disabled = `
    import Checkbox from '../components/Checkbox';
    
    <Checkbox
      checked={false}
      disabled
      className="form-check"
    >disabled</Checkbox>
    
    <Checkbox checked disabled className="form-check">disabled checked</Checkbox>
  `;

  const indeterminate = `
    import Checkbox from '../components/Checkbox';

    const [isChecked, setChecked] = useState(false);
    const [isIndeterminate, setIndeterminate] = useState(true);
    
    function changeHandler() {
      setChecked(!isChecked);
      setIndeterminate(!isIndeterminate);
    }
   
    <Checkbox
      controlled
      isChecked={isChecked}
      isIndeterminate={isIndeterminate}
      className="form-check"
      onChange={changeHandler}
    >indeterminate checkbox</Checkbox>
  `;

  return (
    <div className="rb-checkboxes container-fluid">
      <section className="rb-checkbox-basic">
        <h1 className="rb-title">Checkbox</h1>
        <div className="rb-group">
          <div className="rb-checkbox-wrapper">
            <Checkbox isChecked={false} className="form-check">
              default checkbox
            </Checkbox>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-checkboxes-basic">
        <h1 className="rb-title">Disabled</h1>
        <div className="rb-group">
          <div className="rb-checkbox-wrapper">
            <Checkbox isChecked={false} isDisabled className="form-check">
              disabled
            </Checkbox>
          </div>
          <div className="rb-checkbox-wrapper">
            <Checkbox isChecked isDisabled className="form-check">
              disabled checked
            </Checkbox>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {disabled}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-checkbox-basic">
        <h1 className="rb-title">Indeterminate</h1>
        <div className="rb-group">
          <div className="rb-checkbox-wrapper">
            <Checkbox
              controlled
              isChecked={isChecked}
              isIndeterminate={isIndeterminate}
              className="form-check"
              onChange={changeHandler}
            >
              indeterminate checkbox
            </Checkbox>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {indeterminate}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Checkboxes;
