import React from 'react';
import { CopyBlock, monokaiSublime } from 'react-code-blocks';

import ContentLayout from 'layout/ContentLayout';

const Inert: React.FC = () => {
  const code = `<div>
    <label for="button1">Button 1</label>
    <button id="button1">I am not inert</button>
</div>
<div inert>
    <label for="button2">Button 2</label>
    <button id="button2">I am inert</button>
</div>`;
  return (
    <ContentLayout title="Inert">
      <p>
        Before <b>inert</b>, it was good practice to guide the user's focus to
        areas of the page or app that needed immediate attention. This guided
        focus strategy became known as focus trapping because developers would
        place focus into an interactive space, listen for focus change events
        and, if the focus left the interactive space, then it was forced back
        in. Users on keyboards or screen readers are guided back to the
        interactive space to ensure the task is complete before moving on.
      </p>
      <p>
        After <b>inert</b>, no trapping is required because you can freeze or
        guard entire sections of the page or app. Clicks and focus change
        attempts are just simply not available while those parts of a document
        are inert. One could also think of this like guards instead of a trap,
        where inert is not interested in making you stay somewhere, rather
        making other places unavailable.
      </p>
      <CopyBlock
        language="sass"
        text={code}
        theme={monokaiSublime}
        showLineNumbers
        wrapLines
        codeBlock
      />
      <div>
        <label htmlFor="button1">Button 1</label>
        <button id="button1">I am not inert</button>
      </div>
      {/* @ts-ignore */}
      <div inert="true">
        <label htmlFor="button2">Button 2</label>
        <button id="button2">I am inert</button>
      </div>
    </ContentLayout>
  );
};

export default Inert;
