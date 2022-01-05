import React, { useState } from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Upload from '../components/Upload';
import Button from '../components/Button';

function Uploads() {
  function uploadHandler(e: any) {
    alert('file uploaded');
  }

  const basic = `
    import Upload from '../components/Upload';
    import Button from '../components/Button';
    
    function uploadHandler(e: any) {
      alert('file uploaded');
    }
    
    <Button variant="primary">
      <Upload onChange={uploadHandler}>Upload</Upload>
    </Button>
  `;

  const disabled = `
    import Upload from '../components/Upload';
    import Button from '../components/Button';
    
    function uploadHandler(e: any) {
      alert('file uploaded');
    }
    
    <Button variant="primary" isDisabled>
      <Upload onChange={uploadHandler} isDisabled>
        Upload
      </Upload>
    </Button>
  `;

  return (
    <div className="rb-uploads">
      <section className="rb-upload-basic">
        <h1 className="rb-title">Upload</h1>
        <div className="rb-group">
          <div className="rb-upload-wrapper">
            <Button variant="primary">
              <Upload onChange={uploadHandler}>Upload</Upload>
            </Button>
          </div>
        </div>
      </section>
      <div className="rb-code">
        <SyntaxHighlighter language="javascript" style={docco}>
          {basic}
        </SyntaxHighlighter>
      </div>
      <section className="rb-upload-basic">
        <h1 className="rb-title">Disabled</h1>
        <div className="rb-group">
          <div className="rb-upload-wrapper">
            <Button variant="primary" isDisabled>
              <Upload onChange={uploadHandler} isDisabled>
                Upload
              </Upload>
            </Button>
          </div>
        </div>
      </section>
      <div className="rb-code">
        <SyntaxHighlighter language="javascript" style={docco}>
          {disabled}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Uploads;
