import React, { useState } from 'react';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';

function ButtonGroup() {
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
    <div className="button-group">
      <div className="basic">
        <div className="btn-group" role="group" aria-label="Basic example">
          <Button variant="primary">Left</Button>
          <Button variant="primary">Middle</Button>
          <Button variant="primary">Right</Button>
        </div>
      </div>
      <div className="mixed">
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <Button variant="danger" type="button">
            Left
          </Button>
          <Button variant="warning" type="reset">
            Middle
          </Button>
          <Button variant="success" type="submit">
            Right
          </Button>
        </div>
      </div>
      <div className="outline">
        <div className="btn-group" role="group" aria-label="Basic outline styles example">
          <Button variant="outline-primary">Left</Button>
          <Button variant="outline-primary">Middle</Button>
          <Button variant="outline-primary">Right</Button>
        </div>
      </div>
      <div className="size">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Basic small size styles example"
        >
          <Button variant="primary" size="sm">
            Left
          </Button>
          <Button variant="primary" size="sm">
            Middle
          </Button>
          <Button variant="primary" size="sm">
            Right
          </Button>
        </div>
        <div className="btn-group" role="group" aria-label="Basic normal size styles example">
          <Button variant="primary">Left</Button>
          <Button variant="primary">Middle</Button>
          <Button variant="primary">Right</Button>
        </div>
        <div
          className="btn-group btn-group-lg"
          role="group"
          aria-label="Basic large size styles example"
        >
          <Button variant="primary" size="lg">
            Left
          </Button>
          <Button variant="primary" size="lg">
            Middle
          </Button>
          <Button variant="primary" size="lg">
            Right
          </Button>
        </div>
      </div>

      <div className="button-with-icon">
        <div className="btn-group" role="group" aria-label="Basic icon styles example">
          <Button variant="primary" ButtonIcon={<Icon Component={Acorn} />} />
          <Button variant="primary" ButtonIcon={<Icon Component={Acorn} />} />
          <Button variant="primary" ButtonIcon={<Icon Component={Acorn} />} />
        </div>
      </div>
      <div className="button-with-loading">
        <div className="btn-group" role="group" aria-label="Basic icon loading styles example">
          <Button
            loading={loading1}
            ButtonIcon={<Icon Component={Acorn} />}
            onClick={clickHandler1}
          />
          <Button
            loading={loading2}
            ButtonIcon={<Icon Component={Acorn} />}
            onClick={clickHandler2}
          />
          <Button
            loading={loading3}
            ButtonIcon={<Icon Component={Acorn} />}
            onClick={clickHandler3}
          />
        </div>

        <div className="btn-group" role="group" aria-label="Basic icon loading styles example">
          <Button
            loading={loading2}
            ButtonIcon={<Icon Component={Acorn} />}
            onClick={clickHandler2}
          >
            Left
          </Button>
          <Button
            loading={loading3}
            ButtonIcon={<Icon Component={Acorn} />}
            onClick={clickHandler3}
          >
            Middle
          </Button>
          <Button
            loading={loading4}
            ButtonIcon={<Icon Component={Acorn} />}
            onClick={clickHandler4}
          >
            Right
          </Button>
        </div>
      </div>
      <div className="button-disabled">
        <div className="btn-group" role="group" aria-label="Basic disabled styles example">
          <Button
            ButtonIcon={<Icon Component={Acorn} />}
            onClick={clickHandler5}
            disabled={disabled5}
          >
            Left
          </Button>
          <Button
            disabled={disabled6}
            variant="secondary"
            ButtonIcon={<Icon Component={Acorn} />}
            onClick={clickHandler6}
          >
            Middle
          </Button>
          <Button disabled={disabled7} variant="success" onClick={clickHandler7}>
            Right
          </Button>
        </div>
      </div>
      <div className="button-toggle">
        <div className="btn-group" role="group" aria-label="Basic toggle styles example">
          <Button toggle variant="primary">
            Left
          </Button>
          <Button toggle variant="secondary">
            Middle
          </Button>
          <Button toggle variant="success">
            Right
          </Button>
        </div>
      </div>
      <div className="button-vertical">
        <div className="btn-group-vertical" role="group" aria-label="Basic toggle styles example">
          <Button toggle variant="primary">
            Left
          </Button>
          <Button toggle variant="secondary">
            Middle
          </Button>
          <Button toggle variant="success">
            Right
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ButtonGroup;
