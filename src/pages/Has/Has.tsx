import React from 'react';
import { CopyBlock, monokaiSublime } from 'react-code-blocks';

import ContentLayout from 'layout/ContentLayout';

import './Has.scss';

const Has: React.FC = () => {
  const code = `.parent {
    background-color: #17d1b8;
}

@supports (selector(:has(works))) {
    .parent:has(.child) {
        background-color: #f4f4f4;
    }
}
`;

  const code2 = `@supports (selector(:has(works))) {
    /* safe to use :has() */
}`;

  return (
    <ContentLayout title="Has">
      <p>
        Before <b>:has()</b>, the subject of a selector was always at the end.
        For example, the subject of this selector is a list item:{' '}
        <b>ul &gt; li</b>. Pseudo selectors can alter the selector but they
        don't change the subject: <b>ul &gt; li:hover</b> or{' '}
        <b>ul &gt; li:not(.selected)</b>.
      </p>
      <p>
        After <b>:has()</b>, a subject higher in the element tree can remain the
        subject while providing a query about children: <b>ul:has(&gt; li)</b>.
        It is easy to understand how <b>:has()</b> got a common name of "parent
        selector", as the subject of the selector is now the parent in this
        case.
      </p>
      <CopyBlock
        language="sass"
        text={code}
        theme={monokaiSublime}
        showLineNumbers
        wrapLines
        codeBlock
      />
      <div className="parent">Parent with no child</div>
      <div className="parent">
        Parent with child
        <div className="child">This is child</div>
      </div>
      <div className="parent">
        Parent with child
        <div>This is child without child class</div>
      </div>
      <h3>Checking for support</h3>
      <CopyBlock
        language="sass"
        text={code2}
        theme={monokaiSublime}
        showLineNumbers
        wrapLines
        codeBlock
      />
    </ContentLayout>
  );
};

export default Has;
