import React, { useState } from 'react';
import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';

function ButtonsGroup() {
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
    <div className="rc-button-groups">
      <section className="rc-button-groups-basic">
        <div className="rc-title">Basic button group</div>
        <div className="rc-group">
          <ButtonGroup>
            <Button variant="primary">Left</Button>
            <Button variant="primary">Middle</Button>
            <Button variant="primary">Right</Button>
          </ButtonGroup>
        </div>
      </section>
      <section className="rc-button-groups-mixed">
        <div className="rc-title">Mixed variant button group</div>
        <div className="rc-group">
          <ButtonGroup>
            <Button variant="danger" type="button">
              Left
            </Button>
            <Button variant="warning" type="reset">
              Middle
            </Button>
            <Button variant="success" type="submit">
              Right
            </Button>
          </ButtonGroup>
        </div>
      </section>
      <section className="rc-button-groups-outline">
        <div className="rc-title">Outlined button group</div>
        <div className="rc-group">
          <ButtonGroup>
            <Button variant="outline-primary">Left</Button>
            <Button variant="outline-primary">Middle</Button>
            <Button variant="outline-primary">Right</Button>
          </ButtonGroup>
        </div>
      </section>
      <section className="rc-button-groups-size">
        <div className="rc-title">Different size button group</div>
        <div className="rc-group">
          <ButtonGroup size="sm">
            <Button variant="primary" size="sm">
              Left
            </Button>
            <Button variant="primary" size="sm">
              Middle
            </Button>
            <Button variant="primary" size="sm">
              Right
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="primary">Left</Button>
            <Button variant="primary">Middle</Button>
            <Button variant="primary">Right</Button>
          </ButtonGroup>
          <ButtonGroup size="lg">
            <Button variant="primary" size="lg">
              Left
            </Button>
            <Button variant="primary" size="lg">
              Middle
            </Button>
            <Button variant="primary" size="lg">
              Right
            </Button>
          </ButtonGroup>
        </div>
      </section>
      <section className="rc-button-group-with-icon">
        <div className="rc-title">Icon button group</div>
        <div className="rc-group">
          <ButtonGroup>
            <Button variant="primary" ButtonIcon={<Icon Component={Acorn} />} />
            <Button variant="primary" ButtonIcon={<Icon Component={Acorn} />} />
            <Button variant="primary" ButtonIcon={<Icon Component={Acorn} />} />
          </ButtonGroup>
        </div>
      </section>
      <section className="rc-button-group-with-loading">
        <div className="rc-title">Loading button group</div>
        <div className="rc-group">
          <ButtonGroup>
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
          </ButtonGroup>
          <ButtonGroup>
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
          </ButtonGroup>
        </div>
      </section>
      <section className="rc-button-group-disabled">
        <div className="rc-title">Disabled button group</div>
        <div className="rc-group">
          <ButtonGroup>
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
          </ButtonGroup>
        </div>
      </section>
      <section className="rc-button-group-toggle">
        <div className="rc-title">Toggle button group</div>
        <div className="rc-group">
          <ButtonGroup>
            <Button toggle variant="primary">
              Left
            </Button>
            <Button toggle variant="secondary">
              Middle
            </Button>
            <Button toggle variant="success">
              Right
            </Button>
          </ButtonGroup>
        </div>
      </section>
      <section className="rc-button-group-vertical">
        <div className="rc-title">Vertical button group</div>
        <div className="rc-group">
          <ButtonGroup direct="vertical">
            <Button toggle variant="primary">
              Left
            </Button>
            <Button toggle variant="secondary">
              Middle
            </Button>
            <Button toggle variant="success">
              Right
            </Button>
          </ButtonGroup>
        </div>
      </section>
    </div>
  );
}

export default ButtonsGroup;
