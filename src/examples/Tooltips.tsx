import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Tooltip from '../components/Tooltip';
import Button from '../components/Button';
import Template from './Template';

function Tooltips() {
  const content = <Template>And some amazing content. Very engaging. Right?</Template>;

  const basic = `
    import Tooltip from '../components/Tooltip';
    import Button from '../components/Button';
    import Template from './Template';
    
    const content = <Template>And some amazing content. Very engaging. Right?</Template>;
  
    <Tooltip template={content} placement="left">
      <Button>left</Button>
    </Tooltip>
    
    <Tooltip template={content} placement="top">
      <Button>top</Button>
    </Tooltip>
    
    <Tooltip template={content} placement="bottom">
      <Button>bottom</Button>
    </Tooltip>
    
    <Tooltip template={content} placement="right">
      <Button>right</Button>
    </Tooltip>
  `;

  return (
    <div className="rb-tooltips">
      <section className="rb-tooltip-basic">
        <h1 className="rb-title">Tooltips</h1>
        <div className="rb-group">
          <div className="rb-tooltip-wrapper">
            <Tooltip template={content} placement="left">
              <Button>left</Button>
            </Tooltip>
          </div>
          <div className="rb-tooltip-wrapper">
            <Tooltip template={content} placement="top">
              <Button>top</Button>
            </Tooltip>
          </div>
          <div className="rb-tooltip-wrapper">
            <Tooltip template={content} placement="bottom">
              <Button>bottom</Button>
            </Tooltip>
          </div>
          <div className="rb-tooltip-wrapper">
            <Tooltip template={content} placement="right">
              <Button>right</Button>
            </Tooltip>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Tooltips;
