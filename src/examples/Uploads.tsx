import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Upload from '../components/Upload';

function Uploads() {
  return (
    <section className="rc-navbar-basic">
      <div className="rc-title">Basic toast</div>
      <div className="rc-group">
        <div className="rc-item">
          <Upload>Upload</Upload>
        </div>
      </div>
    </section>
  );
}

export default Uploads;
