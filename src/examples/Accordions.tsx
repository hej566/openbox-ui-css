import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { v4 as uuidv4 } from 'uuid';
import AccordionItem from '../components/AccordionItem';
import Accordion from '../components/Accordion';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';

function Accordions() {
  const uuid1 = uuidv4();
  const uuid2 = uuidv4();
  const uuid3 = uuidv4();
  const uuid4 = uuidv4();
  const uuid5 = uuidv4();
  const uuid6 = uuidv4();
  const uuid7 = uuidv4();
  const uuid8 = uuidv4();
  const uuid9 = uuidv4();
  const uuid10 = uuidv4();
  const uuid11 = uuidv4();

  const accordionOnly = `
   <Accordion only>
      <AccordionItem
        title="Accordion Item #1"
        key={uuid1}
        AccordionIcon={<Icon component={Acorn} />}
        itemId={uuid1}
        isDisabled
      >
        <strong>This is the first item's accordion body.</strong> It is shown by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </AccordionItem>
      <AccordionItem title="Accordion Item #2" key={uuid2} itemId={uuid2}>
        <strong>This is the second item's accordion body.</strong> It is hidden by
        default,*/ until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as the
        showing and hiding via CSS transitions. You can modify any of this with custom CSS
        or overriding our default variables. It's also worth noting that just about any HTML
        can go within the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </AccordionItem>
      <AccordionItem title="Accordion Item #3" key={uuid3} itemId={uuid3}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </AccordionItem>
    </Accordion> 
  `;

  const accordionAlwaysOpen = `
   <Accordion>
      <AccordionItem
        title="Accordion Item #1"
        key={uuid7}
        itemId={uuid7}
        AccordionIcon={<Icon component={Acorn} />}
      >
        <Accordion only>
          <AccordionItem title="Accordion Item #2" key={uuid8} itemId={uuid8}>
            <strong>This is the second item's accordion body.</strong> It is hidden by
            default,*/ until the collapse plugin adds the appropriate classes that we use to
            style each element. These classes control the overall appearance, as well as the
            showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about
            any HTML can go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionItem>
          <AccordionItem title="Accordion Item #3" key={uuid9} itemId={uuid9}>
            <strong>This is the third item's accordion body.</strong> It is hidden by
            default, until the collapse plugin adds the appropriate classes that we use to
            style each element. These classes control the overall appearance, as well as the
            showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about
            any HTML can go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionItem>
        </Accordion>
      </AccordionItem>
      <AccordionItem title="Accordion Item #2" key={uuid10} itemId={uuid10}>
        <strong>This is the second item's accordion body.</strong> It is hidden by
        default,*/ until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as the
        showing and hiding via CSS transitions. You can modify any of this with custom CSS
        or overriding our default variables. It's also worth noting that just about any HTML
        can go within the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </AccordionItem>
      <AccordionItem title="Accordion Item #3" key={uuid11} itemId={uuid11}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </AccordionItem>
    </Accordion>
  `;

  const accordionFlush = `
   <Accordion only flush>
      <AccordionItem
        title="Accordion Item #1"
        key={uuid4}
        AccordionIcon={<Icon component={Acorn} />}
        itemId={uuid4}
      >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until
        the collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </AccordionItem>
      <AccordionItem title="Accordion Item #2" key={uuid5} itemId={uuid5}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default,*/
        until the collapse plugin adds the appropriate classes that we use to style each element.
        These classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </AccordionItem>
      <AccordionItem title="Accordion Item #3" key={uuid6} itemId={uuid6}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until
        the collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </AccordionItem>
    </Accordion>
  `;
  return (
    <div className="rb-accordions">
      <section className="rb-accordion-only">
        <h1 className="rb-title">Accordion</h1>
        <div className="rb-group">
          <div className="rb-accordion">
            <Accordion only>
              <AccordionItem
                title="Accordion Item #1"
                key={uuid1}
                AccordionIcon={<Icon component={Acorn} />}
                itemId={uuid1}
                isDisabled
              >
                <strong>This is the first item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </AccordionItem>
              <AccordionItem title="Accordion Item #2" key={uuid2} itemId={uuid2}>
                <strong>This is the second item's accordion body.</strong> It is hidden by
                default,*/ until the collapse plugin adds the appropriate classes that we use to
                style each element. These classes control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of this with custom CSS
                or overriding our default variables. It's also worth noting that just about any HTML
                can go within the <code>.accordion-body</code>, though the transition does limit
                overflow.
              </AccordionItem>
              <AccordionItem title="Accordion Item #3" key={uuid3} itemId={uuid3}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {accordionOnly}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-accordion-always-open">
        <h1 className="rb-title">Always open</h1>
        <div className="rb-group">
          <div className="rb-accordion">
            <Accordion>
              <AccordionItem
                title="Accordion Item #1"
                key={uuid7}
                itemId={uuid7}
                AccordionIcon={<Icon component={Acorn} />}
              >
                <Accordion only>
                  <AccordionItem title="Accordion Item #2" key={uuid8} itemId={uuid8}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by
                    default,*/ until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It's also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                  </AccordionItem>
                  <AccordionItem title="Accordion Item #3" key={uuid9} itemId={uuid9}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It's also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                  </AccordionItem>
                </Accordion>
              </AccordionItem>
              <AccordionItem title="Accordion Item #2" key={uuid10} itemId={uuid10}>
                <strong>This is the second item's accordion body.</strong> It is hidden by
                default,*/ until the collapse plugin adds the appropriate classes that we use to
                style each element. These classes control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of this with custom CSS
                or overriding our default variables. It's also worth noting that just about any HTML
                can go within the <code>.accordion-body</code>, though the transition does limit
                overflow.
              </AccordionItem>
              <AccordionItem title="Accordion Item #3" key={uuid11} itemId={uuid11}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {accordionAlwaysOpen}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="rb-accordion-flush">
        <h1 className="rb-title">Flush</h1>
        <div className="rb-group">
          <div className="rb-accordion">
            <Accordion only flush>
              <AccordionItem
                title="Accordion Item #1"
                key={uuid4}
                AccordionIcon={<Icon component={Acorn} />}
                itemId={uuid4}
              >
                <strong>This is the first item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </AccordionItem>
              <AccordionItem title="Accordion Item #2" key={uuid5} itemId={uuid5}>
                <strong>This is the second item's accordion body.</strong> It is hidden by
                default,*/ until the collapse plugin adds the appropriate classes that we use to
                style each element. These classes control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of this with custom CSS
                or overriding our default variables. It's also worth noting that just about any HTML
                can go within the <code>.accordion-body</code>, though the transition does limit
                overflow.
              </AccordionItem>
              <AccordionItem title="Accordion Item #3" key={uuid6} itemId={uuid6}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {accordionFlush}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Accordions;
