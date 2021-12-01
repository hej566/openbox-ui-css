import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from '../components/Image';

import img1 from '../assets/img/865-600x400.jpeg';
import img2 from '../assets/img/866-600x400.jpeg';
import img3 from '../assets/img/867-600x400.jpeg';

function Uploads() {
  return (
    <section className="rc-navbar-basic">
      <div className="rc-title">Basic toast</div>
      <div className="rc-group">
        <div className="rc-item">
          <Image src={img1} className="img-fluid" />
        </div>
        <div className="rc-item">
          <Image src={img2} className="img-thumbnail" />
        </div>
        <div className="rc-item">
          <Image src={img1} className="rounded float-start" />
          <div style={{ clear: 'both' }} />
        </div>
        <div className="rc-item">
          <Image src={img2} className="rounded float-end" />
          <div style={{ clear: 'both' }} />
        </div>
        <div className="rc-item">
          <Image src={img3} className="rounded mx-auto d-block" />
        </div>
      </div>
    </section>
  );
}

export default Uploads;
