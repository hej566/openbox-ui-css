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
  const accordionOnly = `
    import AccordionItem from '../components/AccordionItem';
    import Accordion from '../components/Accordion';
    import Icon from '../components/Icon';
    import Acorn from '../assets/icons/svg/acorn-duotone.svg';

    <Accordion only>
      <AccordionItem
        title="Accordion Item #1"
        prefixIcon={<Icon component={Acorn} />}
        itemId="1"
        isDisabled
      >
        <strong>This is the first item's accordion body.</strong> It is shown by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </AccordionItem>
      <AccordionItem title="Accordion Item #2" itemId="2">
        <strong>This is the second item's accordion body.</strong> It is hidden by
        default,*/ until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as the
        showing and hiding via CSS transitions. You can modify any of this with custom CSS
        or overriding our default variables. It's also worth noting that just about any HTML
        can go within the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </AccordionItem>
      <AccordionItem title="Accordion Item #3" itemId="3">
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
    import AccordionItem from '../components/AccordionItem';
    import Accordion from '../components/Accordion';
    import Icon from '../components/Icon';
    import Acorn from '../assets/icons/svg/acorn-duotone.svg';

    <Accordion>
      <AccordionItem
        title="Accordion Item #1"
        itemId="1"
        prefixIcon={<Icon component={Acorn} />}
      >
        <Accordion only>
          <AccordionItem title="Accordion Item #2" itemId="2">
            <strong>This is the second item's accordion body.</strong> It is hidden by
            default,*/ until the collapse plugin adds the appropriate classes that we use to
            style each element. These classes control the overall appearance, as well as the
            showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about
            any HTML can go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionItem>
          <AccordionItem title="Accordion Item #3" itemId="3">
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
      <AccordionItem title="Accordion Item #2" itemId="4">
        <strong>This is the second item's accordion body.</strong> It is hidden by
        default,*/ until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as the
        showing and hiding via CSS transitions. You can modify any of this with custom CSS
        or overriding our default variables. It's also worth noting that just about any HTML
        can go within the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </AccordionItem>
      <AccordionItem title="Accordion Item #3" itemId="5">
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
    import AccordionItem from '../components/AccordionItem';
    import Accordion from '../components/Accordion';
    import Icon from '../components/Icon';
    import Acorn from '../assets/icons/svg/acorn-duotone.svg';

    <Accordion only flush>
      <AccordionItem
        title="Accordion Item #1"
        prefixIcon={<Icon component={Acorn} />}
        itemId="1"
      >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until
        the collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </AccordionItem>
      <AccordionItem title="Accordion Item #2" itemId="2">
        <strong>This is the second item's accordion body.</strong> It is hidden by default,*/
        until the collapse plugin adds the appropriate classes that we use to style each element.
        These classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </AccordionItem>
      <AccordionItem title="Accordion Item #3" itemId="3">
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
    <div className="rb-accordions container-fluid">
      <section className="rb-accordion-only">
        <h1 className="rb-title">Accordion</h1>
        <div className="rb-group">
          <div className="rb-accordion">
            <Accordion only>
              <AccordionItem
                title="Accordion Item #1"
                suffixIcon={<Icon component={Acorn} />}
                itemId="1"
                isDisabled
              >
                <strong>This is the first item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </AccordionItem>
              <AccordionItem title="Accordion Item #2" itemId="2">
                <strong>This is the second item's accordion body.</strong> It is hidden by
                default,*/ until the collapse plugin adds the appropriate classes that we use to
                style each element. These classes control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of this with custom CSS
                or overriding our default variables. It's also worth noting that just about any HTML
                can go within the <code>.accordion-body</code>, though the transition does limit
                overflow.
              </AccordionItem>
              <AccordionItem title="Accordion Item #3" itemId="3">
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
                itemId="1"
                suffixIcon={<Icon component={Acorn} />}
              >
                <Accordion only>
                  <AccordionItem title="Accordion Item #2" itemId="2">
                    <strong>This is the second item's accordion body.</strong> It is hidden by
                    default,*/ until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It's also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                  </AccordionItem>
                  <AccordionItem title="Accordion Item #3" itemId="3">
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
              <AccordionItem title="Accordion Item #2" itemId="4">
                <strong>This is the second item's accordion body.</strong> It is hidden by
                default,*/ until the collapse plugin adds the appropriate classes that we use to
                style each element. These classes control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of this with custom CSS
                or overriding our default variables. It's also worth noting that just about any HTML
                can go within the <code>.accordion-body</code>, though the transition does limit
                overflow.
              </AccordionItem>
              <AccordionItem title="Accordion Item #3" itemId="5">
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
                suffixIcon={<Icon component={Acorn} />}
                itemId="1"
              >
                <strong>This is the first item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </AccordionItem>
              <AccordionItem title="Accordion Item #2" itemId="2">
                <strong>This is the second item's accordion body.</strong> It is hidden by
                default,*/ until the collapse plugin adds the appropriate classes that we use to
                style each element. These classes control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of this with custom CSS
                or overriding our default variables. It's also worth noting that just about any HTML
                can go within the <code>.accordion-body</code>, though the transition does limit
                overflow.
              </AccordionItem>
              <AccordionItem title="Accordion Item #3" itemId="3">
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
