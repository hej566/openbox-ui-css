import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Progress from '../components/Progress';
import ProgressBar from '../components/ProgressBar';

function Progresses() {
  const basic = `
    import Progress from '../components/Progress';
    import ProgressBar from '../components/ProgressBar';
    
    <Progress>
      <ProgressBar value={50} />
    </Progress>
    
    <Progress>
      <ProgressBar value={30} className="bg-success" />
    </Progress>
    
    <Progress>
      <ProgressBar value={30} className="bg-warning" />
    </Progress>
    
    <Progress>
      <ProgressBar value={30} className="bg-danger" />
      <ProgressBar value={30} className="bg-warning" />
      <ProgressBar value={30} className="bg-success" />
    </Progress>
    
    <Progress>
      <ProgressBar value={50} striped />
    </Progress>
     
    <Progress>
      <ProgressBar value={75} striped animate />
    </Progress>
  `;

  return (
    <div className="rb-progresses">
      <section className="rb-progress-basic">
        <h1 className="rb-title">Progress</h1>
        <div className="rb-group">
          <div className="rb-progress-wrapper">
            <Progress>
              <ProgressBar value={50} />
            </Progress>
          </div>
          <div className="rb-progress-wrapper">
            <Progress>
              <ProgressBar value={30} className="bg-success" />
            </Progress>
          </div>
          <div className="rb-progress-wrapper">
            <Progress>
              <ProgressBar value={30} className="bg-warning" />
            </Progress>
          </div>
          <div className="rb-progress-wrapper">
            <Progress>
              <ProgressBar value={30} className="bg-danger" />
              <ProgressBar value={30} className="bg-warning" />
              <ProgressBar value={30} className="bg-success" />
            </Progress>
          </div>
          <div className="rb-progress-wrapper">
            <Progress>
              <ProgressBar value={50} striped />
            </Progress>
          </div>
          <div className="rb-progress-wrapper">
            <Progress>
              <ProgressBar value={75} striped animate />
            </Progress>
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

export default Progresses;
