import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function Modals() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);

  function showModalHandler() {
    setIsModalVisible(true);
  }

  function cancelHandler() {
    setIsModalVisible(false);
  }

  function confirmHandler() {
    setIsModalVisible(false);
  }

  function showModalHandler1() {
    setIsModalVisible1(true);
  }

  function cancelHandler1() {
    setIsModalVisible1(false);
  }

  function confirmHandler1() {
    setIsModalVisible1(false);
  }

  function showModalHandler2() {
    setIsModalVisible2(true);
  }

  function cancelHandler2() {
    setIsModalVisible2(false);
  }

  function confirmHandler2() {
    setIsModalVisible2(false);
  }

  function showModalHandler3() {
    setIsModalVisible3(true);
  }

  function cancelHandler3() {
    setIsModalVisible3(false);
  }

  function confirmHandler3() {
    setIsModalVisible3(false);
  }

  function deleteHandler3() {
    setIsModalVisible3(false);
  }

  function backHandler3() {
    setIsModalVisible3(false);
  }

  return (
    <div className="rc-modals">
      <section className="rc-modal-basic">
        <div className="rc-title">Basic modal</div>
        <div className="rc-group">
          <Button onClick={showModalHandler}>Launch demo modal</Button>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onCancel={cancelHandler}
            onConfirm={confirmHandler}
          >
            <p>Modal body text goes here.</p>
          </Modal>
        </div>
      </section>
      <section className="rc-modal-scrollable">
        <div className="rc-title">Scrollable modal</div>
        <div className="rc-group">
          <Button onClick={showModalHandler1}>Launch scrollable modal</Button>
          <Modal
            title="Scrollable Modal"
            visible={isModalVisible1}
            onCancel={cancelHandler1}
            onConfirm={confirmHandler1}
            scrollable
          >
            This is some placeholder content to show the scrolling behavior for modals. We use
            repeated line breaks to demonstrate how content can exceed minimum inner height, thereby
            showing inner scrolling. When content becomes longer than the predefined max-height of
            modal, content will be cropped and scrollable within the modal. This content should
            appear at the bottom after you scroll. This is some placeholder content to show the
            scrolling behavior for modals. We use repeated line breaks to demonstrate how content
            can exceed minimum inner height, thereby showing inner scrolling. When content becomes
            longer than the predefined max-height of modal, content will be cropped and scrollable
            within the modal. This content should appear at the bottom after you scroll. This is
            some placeholder content to show the scrolling behavior for modals. We use repeated line
            breaks to demonstrate how content can exceed minimum inner height, thereby showing inner
            scrolling. When content becomes longer than the predefined max-height of modal, content
            will be cropped and scrollable within the modal. This content should appear at the
            bottom after you scroll.This is some placeholder content to show the scrolling behavior
            for modals. We use repeated line breaks to demonstrate how content can exceed minimum
            inner height, thereby showing inner scrolling. When content becomes longer than the
            predefined max-height of modal, content will be cropped and scrollable within the modal.
            This content should appear at the bottom after you scroll. This is some placeholder
            content to show the scrolling behavior for modals. We use repeated line breaks to
            demonstrate how content can exceed minimum inner height, thereby showing inner
            scrolling. When content becomes longer than the predefined max-height of modal, content
            will be cropped and scrollable within the modal. This content should appear at the
            bottom after you scroll. This is some placeholder content to show the scrolling behavior
            for modals. We use repeated line breaks to demonstrate how content can exceed minimum
            inner height, thereby showing inner scrolling. When content becomes longer than the
            predefined max-height of modal, content will be cropped and scrollable within the modal.
            This content should appear at the bottom after you scroll. This is some placeholder
            content to show the scrolling behavior for modals. We use repeated line breaks to
            demonstrate how content can exceed minimum inner height, thereby showing inner
            scrolling. When content becomes longer than the predefined max-height of modal, content
            will be cropped and scrollable within the modal. This content should appear at the
            bottom after you scroll.This is some placeholder content to show the scrolling behavior
            for modals. We use repeated line breaks to demonstrate how content can exceed minimum
            inner height, thereby showing inner scrolling. When content becomes longer than the
            predefined max-height of modal, content will be cropped and scrollable within the modal.
            This content should appear at the bottom after you scroll.
          </Modal>
        </div>
      </section>
      <section className="rc-modal-centered">
        <div className="rc-title">Centered modal</div>
        <div className="rc-group">
          <Button onClick={showModalHandler2}>Launch centered modal</Button>
          <Modal
            title="Centered Modal"
            visible={isModalVisible2}
            onCancel={cancelHandler2}
            onConfirm={confirmHandler2}
            centered
          >
            <p>Modal body text goes here.</p>
          </Modal>
        </div>
      </section>
      <section className="rc-modal-custom-footer">
        <div className="rc-title">custom footer modal</div>
        <div className="rc-group">
          <Button onClick={showModalHandler3}>Launch custom footer modal</Button>
          <Modal
            title="Custom Footer"
            visible={isModalVisible3}
            onCancel={cancelHandler3}
            onConfirm={confirmHandler3}
            footer={[
              <Button key="delete" variant="danger" onClick={deleteHandler3}>
                delete
              </Button>,
              <Button key="back" variant="secondary" onClick={backHandler3}>
                back
              </Button>,
              <Button key="submit" variant="primary" onClick={confirmHandler3}>
                confirm
              </Button>,
            ]}
          >
            <p>Modal body text goes here.</p>
          </Modal>
        </div>
      </section>
    </div>
  );
}

export default Modals;
