import React, { useState } from 'react';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';

function Buttons() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);

  const [disabled5, setDisabled5] = useState(false);
  const [disabled6, setDisabled6] = useState(false);
  const [disabled7, setDisabled7] = useState(false);
  const [disabled8, setDisabled8] = useState(false);

  function clickHandler1() {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
    }, 3000);
  }

  function clickHandler2() {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 3000);
  }

  function clickHandler3() {
    setLoading3(true);
    setTimeout(() => {
      setLoading3(false);
    }, 3000);
  }

  function clickHandler4() {
    setLoading4(true);
    setTimeout(() => {
      setLoading4(false);
    }, 3000);
  }

  function clickHandler5() {
    setDisabled5(true);
    setTimeout(() => {
      setDisabled5(false);
    }, 3000);
  }

  function clickHandler6() {
    setDisabled6(true);
    setTimeout(() => {
      setDisabled6(false);
    }, 3000);
  }

  function clickHandler7() {
    setDisabled7(true);
    setTimeout(() => {
      setDisabled7(false);
    }, 3000);
  }

  function clickHandler8() {
    setDisabled8(true);
    setTimeout(() => {
      setDisabled8(false);
    }, 3000);
  }

  return (
    <div className="button">
      <div className="button-variant">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="button-type">
        <Button variant="primary" type="button">
          Button
        </Button>
        <Button variant="primary" type="reset">
          Reset
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
      <div className="button-outline">
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
        <Button variant="outline-success">Success</Button>
        <Button variant="outline-danger">Danger</Button>
        <Button variant="outline-warning">Warning</Button>
        <Button variant="outline-info">Info</Button>
        <Button variant="outline-light">Light</Button>
        <Button variant="outline-dark">Dark</Button>
      </div>
      <div className="button-size">
        <Button variant="primary" size="sm">
          Small button
        </Button>
        <Button variant="primary">Normal button</Button>
        <Button variant="primary" size="lg">
          Large button
        </Button>
      </div>
      <div className="button-with-icon">
        <Button variant="primary" ButtonIcon={<Icon Component={Acorn} />}>
          Primary
        </Button>
        <Button variant="outline-success" ButtonIcon={<Icon Component={Acorn} />} />
        <Button variant="danger" ButtonIcon={<Icon Component={Acorn} />} />
        <Button variant="warning" ButtonIcon={<Icon Component={Acorn} />} />
        <Button variant="link" ButtonIcon={<Icon Component={Acorn} />}>
          Link
        </Button>
      </div>
      <div className="button-with-loading">
        <Button
          loading={loading1}
          ButtonIcon={<Icon Component={Acorn} />}
          onClick={clickHandler1}
        />
        <Button loading={loading2} ButtonIcon={<Icon Component={Acorn} />} onClick={clickHandler2}>
          Button
        </Button>
        <Button loading={loading3} onClick={clickHandler3}>
          Button
        </Button>
        <Button
          loading={loading4}
          SpinnerIcon={<Icon Component={Acorn} rotating />}
          onClick={clickHandler4}
        >
          Button
        </Button>
      </div>
      <div className="button-disabled">
        <Button
          ButtonIcon={<Icon Component={Acorn} />}
          onClick={clickHandler5}
          disabled={disabled5}
        />
        <Button
          disabled={disabled6}
          variant="secondary"
          ButtonIcon={<Icon Component={Acorn} />}
          onClick={clickHandler6}
        >
          Button
        </Button>
        <Button disabled={disabled7} variant="success" onClick={clickHandler7}>
          Button
        </Button>
        <Button
          disabled={disabled8}
          variant="danger"
          SpinnerIcon={<Icon Component={Acorn} rotating />}
          onClick={clickHandler8}
        >
          Button
        </Button>
      </div>
      <div className="button-toggle">
        <Button toggle variant="primary">
          Primary
        </Button>
        <Button toggle variant="secondary">
          Secondary
        </Button>
        <Button toggle variant="success">
          Success
        </Button>
        <Button toggle variant="danger">
          Danger
        </Button>
        <Button toggle variant="warning">
          Warning
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
