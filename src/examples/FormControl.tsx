import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Label from '../components/Label';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';

function FormControl() {
  const [isChecked, setChecked] = useState(false);

  function clickHandler() {
    setChecked(!isChecked);
  }

  const uuid1 = uuidv4();
  const uuid2 = uuidv4();
  const uuid3 = uuidv4();
  const uuid4 = uuidv4();
  const uuid5 = uuidv4();
  const uuid6 = uuidv4();
  const uuid7 = uuidv4();

  return (
    <div className="rc-navbars">
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic toast</div>
        <div className="rc-group">
          <div className="rc-item mb-3">
            <Label htmlFor={uuid1} className="form-label">
              Email address
            </Label>
            <Input id={uuid1} placeholder="name@example.com" />
          </div>
          <div className="rc-item mb-3">
            <Label htmlFor={uuid2} className="form-label">
              Example textarea
            </Label>
            <Textarea id={uuid2} rows={4} />
          </div>
          <div className="rc-item mb-3">
            <Input placeholder=".form-control-lg" size="lg" />
          </div>
          <div className="rc-item mb-3">
            <Input placeholder="Default input" />
          </div>
          <div className="rc-item mb-3">
            <Input placeholder=".form-control-sm" size="sm" />
          </div>
          <div className="rc-item mb-3">
            <Input placeholder="Disabled input" disabled />
          </div>
          <div className="rc-item mb-3">
            <Input
              value="Disabled readonly input"
              placeholder="Disabled input example"
              disabled
              readonly
            />
          </div>
          <div className="rc-item mb-3">
            <Input value="Readonly input here..." placeholder="readonly input example" readonly />
          </div>
          <div className="mb-3 row">
            <Label htmlFor={uuid3} className="col-sm-2 col-form-label">
              Email
            </Label>
            <div className="col-sm-10">
              <Input
                id={uuid3}
                value="email@example.com"
                placeholder="readonly input example"
                readonly
                plaintext
              />
            </div>
          </div>
          <div className="mb-3 row">
            <Label htmlFor={uuid4} className="col-sm-2 col-form-label">
              Password
            </Label>
            <div className="col-sm-10">
              <Input id={uuid4} placeholder="Password" type="password" />
            </div>
          </div>
          <form className="row g-3">
            <div className="col-auto">
              <Label htmlFor={uuid5} className="visually-hidden">
                Email
              </Label>
              <Input
                id={uuid5}
                placeholder="Password"
                readonly
                value="email@example.com"
                plaintext
              />
            </div>
            <div className="col-auto">
              <Label htmlFor={uuid6} className="visually-hidden">
                Password
              </Label>
              <Input id={uuid6} placeholder="Password" type="password" />
            </div>
            <div className="col-auto">
              <Button className="mb-3">Confirm identity</Button>
            </div>
          </form>
          <div className="mb-3 form-floating">
            <Input id={uuid6} placeholder="name@example.com" type="email" />
            <Label htmlFor={uuid6}>Email address</Label>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormControl;
