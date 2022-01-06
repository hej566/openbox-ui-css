import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Popover from '../components/Popover';
import Button from '../components/Button';
import Template from './Template';

function Popovers() {
  const content = (
    <Template>
      <div className="popover-header">Popover title</div>
      <div className="popover-body">
        And here's some amazing content. It's very engaging. Right?
      </div>
    </Template>
  );

  const placement = `
    import Popover from '../components/Popover';
    import Button from '../components/Button';
    import Template from './Template';
    
    const content = (
      <Template>
        <div className="popover-header">Popover title</div>
        <div className="popover-body">
          And here's some amazing content. It's very engaging. Right?
        </div>
      </Template>
    );
    
    <Popover template={content} placement="left">
      <Button>left</Button>
    </Popover>
    
    <Popover template={content} placement="top">
      <Button>top</Button>
    </Popover>
    
    <Popover template={content} placement="bottom">
      <Button>bottom</Button>
    </Popover>
    
    <Popover template={content} placement="right">
      <Button>right</Button>
    </Popover>
  `;

  return (
    <div className="rb-popovers container-fluid">
      <section className="rb-popover-basic">
        <h1 className="rb-title">Popover</h1>
        <div className="rb-group">
          <div className="rb-popover-wrapper">
            <Popover template={content} placement="left" arrow>
              <Button>left</Button>
            </Popover>
          </div>
          <div className="rb-popover-wrapper">
            <Popover template={content} placement="top" arrow>
              <Button>top</Button>
            </Popover>
          </div>
          <div className="rb-popover-wrapper">
            <Popover template={content} placement="bottom" arrow>
              <Button>bottom</Button>
            </Popover>
          </div>
          <div className="rb-popover-wrapper">
            <Popover template={content} placement="right" arrow>
              <Button>right</Button>
            </Popover>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {placement}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Popovers;
