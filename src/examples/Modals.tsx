import React, { useState } from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Modal from '../components/Modal';
import Button from '../components/Button';

function Modals() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);

  function showModalHandler() {
    setModalVisible(true);
  }

  function cancelHandler() {
    setModalVisible(false);
  }

  function confirmHandler() {
    setModalVisible(false);
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

  const basic = `
    import Modal from '../components/Modal';
    import Button from '../components/Button';
    
    const [isModalVisible, setModalVisible] = useState(false);
    
    function showModalHandler() {
      setModalVisible(true);
    }
    
    function cancelHandler() {
      setModalVisible(false);
    }
  
    function confirmHandler() {
      setModalVisible(false);
    }
    
    <Button onClick={showModalHandler}>Launch demo modal</Button>
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onCancel={cancelHandler}
      onConfirm={confirmHandler}
    >
      <p>Modal body text goes here.</p>
    </Modal>
  `;

  const scrollable = `
    import Modal from '../components/Modal';
    import Button from '../components/Button';
    
    const [isModalVisible, setModalVisible] = useState(false);
    
    function showModalHandler() {
      setModalVisible(true);
    }
    
    function cancelHandler() {
      setModalVisible(false);
    }
  
    function confirmHandler() {
      setModalVisible(false);
    }
    
    <Button onClick={showModalHandler1}>Launch scrollable modal</Button>
    <Modal
      title="Scrollable Modal"
      visible={isModalVisible}
      onCancel={cancelHandler}
      onConfirm={confirmHandler}
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
  `;

  const centered = `
    import Modal from '../components/Modal';
    import Button from '../components/Button';
    
    const [isModalVisible, setModalVisible] = useState(false);
    
    function showModalHandler() {
      setModalVisible(true);
    }
    
    function cancelHandler() {
      setModalVisible(false);
    }
  
    function confirmHandler() {
      setModalVisible(false);
    }
    
    <Button onClick={showModalHandler2}>Launch centered modal</Button>
    <Modal
      title="Centered Modal"
      visible={isModalVisible}
      onCancel={cancelHandler}
      onConfirm={confirmHandler}
      centered
    >
      <p>Modal body text goes here.</p>
    </Modal>
  `;

  const customize = `
    import Modal from '../components/Modal';
    import Button from '../components/Button';
    
    const [isModalVisible, setModalVisible] = useState(false);
    
    function showModalHandler() {
      setModalVisible(true);
    }
    
    function cancelHandler() {
      setModalVisible(false);
    }
  
    function confirmHandler() {
      setModalVisible(false);
    }
    
    function deleteHandler() {
      setModalVisible(false);
    }

    function backHandler() {
      setModalVisible(false);
    }
    
    <Button onClick={showModalHandler}>Launch custom footer modal</Button>
      <Modal
        title="Custom Footer"
        visible={isModalVisible}
        onCancel={cancelHandler}
        footer={[
          <Button key="delete" variant="danger" onClick={deleteHandler}>
            delete
          </Button>,
          <Button key="back" variant="secondary" onClick={backHandler}>
            back
          </Button>,
          <Button key="submit" variant="primary" onClick={confirmHandler}>
            confirm
          </Button>,
        ]}
      >
        <p>Modal body text goes here.</p>
      </Modal>
  `;

  return (
    <div className="rb-modals container-fluid">
      <section className="rb-modal-basic">
        <h1 className="rb-title">Modal</h1>
        <div className="rb-group">
          <div className="rb-modal-wrapper">
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
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-modal-scrollable">
        <h1 className="rb-title">Scrollable</h1>
        <div className="rb-group">
          <div className="rb-modal-wrapper">
            <Button onClick={showModalHandler1}>Launch scrollable modal</Button>
            <Modal
              title="Scrollable Modal"
              visible={isModalVisible1}
              onCancel={cancelHandler1}
              onConfirm={confirmHandler1}
              scrollable
            >
              This is some placeholder content to show the scrolling behavior for modals. We use
              repeated line breaks to demonstrate how content can exceed minimum inner height,
              thereby showing inner scrolling. When content becomes longer than the predefined
              max-height of modal, content will be cropped and scrollable within the modal. This
              content should appear at the bottom after you scroll. This is some placeholder content
              to show the scrolling behavior for modals. We use repeated line breaks to demonstrate
              how content can exceed minimum inner height, thereby showing inner scrolling. When
              content becomes longer than the predefined max-height of modal, content will be
              cropped and scrollable within the modal. This content should appear at the bottom
              after you scroll. This is some placeholder content to show the scrolling behavior for
              modals. We use repeated line breaks to demonstrate how content can exceed minimum
              inner height, thereby showing inner scrolling. When content becomes longer than the
              predefined max-height of modal, content will be cropped and scrollable within the
              modal. This content should appear at the bottom after you scroll.This is some
              placeholder content to show the scrolling behavior for modals. We use repeated line
              breaks to demonstrate how content can exceed minimum inner height, thereby showing
              inner scrolling. When content becomes longer than the predefined max-height of modal,
              content will be cropped and scrollable within the modal. This content should appear at
              the bottom after you scroll. This is some placeholder content to show the scrolling
              behavior for modals. We use repeated line breaks to demonstrate how content can exceed
              minimum inner height, thereby showing inner scrolling. When content becomes longer
              than the predefined max-height of modal, content will be cropped and scrollable within
              the modal. This content should appear at the bottom after you scroll. This is some
              placeholder content to show the scrolling behavior for modals. We use repeated line
              breaks to demonstrate how content can exceed minimum inner height, thereby showing
              inner scrolling. When content becomes longer than the predefined max-height of modal,
              content will be cropped and scrollable within the modal. This content should appear at
              the bottom after you scroll. This is some placeholder content to show the scrolling
              behavior for modals. We use repeated line breaks to demonstrate how content can exceed
              minimum inner height, thereby showing inner scrolling. When content becomes longer
              than the predefined max-height of modal, content will be cropped and scrollable within
              the modal. This content should appear at the bottom after you scroll.This is some
              placeholder content to show the scrolling behavior for modals. We use repeated line
              breaks to demonstrate how content can exceed minimum inner height, thereby showing
              inner scrolling. When content becomes longer than the predefined max-height of modal,
              content will be cropped and scrollable within the modal. This content should appear at
              the bottom after you scroll.
            </Modal>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {scrollable}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-modal-centered">
        <h1 className="rb-title">Centered</h1>
        <div className="rb-group">
          <div className="rb-modal-wrapper">
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
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {centered}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-modal-custom-footer">
        <h1 className="rb-title">Custom footer</h1>
        <div className="rb-group">
          <div className="rb-modal-wrapper">
            <Button onClick={showModalHandler3}>Launch custom footer modal</Button>
            <Modal
              title="Custom Footer"
              visible={isModalVisible3}
              onCancel={cancelHandler3}
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
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {customize}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Modals;
