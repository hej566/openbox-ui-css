import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Figure from '../components/Figure';

import img1 from '../assets/img/865-600x400.jpeg';
import img2 from '../assets/img/866-600x400.jpeg';
import img3 from '../assets/img/867-600x400.jpeg';

function Uploads() {
  return (
    <section className="rc-navbar-basic">
      <div className="rc-title">Basic toast</div>
      <div className="rc-group">
        <div className="rc-item">
          <Figure
            src={img1}
            className="img-fluid figure-img"
            caption="A caption for the above image."
          />
        </div>
      </div>
    </section>
  );
}

export default Uploads;
