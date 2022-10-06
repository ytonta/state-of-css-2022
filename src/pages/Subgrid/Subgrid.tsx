import React from 'react';
import { CopyBlock, monokaiSublime } from 'react-code-blocks';
import { Divider } from 'semantic-ui-react';

import ContentLayout from 'layout/ContentLayout';

import './Subgrid.scss';

const Subgrid: React.FC = () => {
  const code = `.grid {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(4,   minmax(100px,   auto));
}

.item {
    display: grid;
    grid-column: 2   /   7;
    grid-row: 2   /   4;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
}

.subitem {
    grid-column: 3   /   6;
    grid-row: 1   /   2;
}
`;

  const code2 = `<div class="grid">
    <div class="item">
        <div class="subitem"></div>
    </div>
</div>`;

  return (
    <ContentLayout title="Subgrid">
      <p>
        Before <b>subgrid</b>, a grid inside of another grid couldn't align
        itself to its parent cells or grid lines. Each grid layout was unique.
        Many designers place a single grid over their whole design and
        constantly align items within it, which couldn't be done in CSS.
      </p>
      <p>
        After <b>subgrid</b>, a child of a grid can adopt its parents’ columns
        or rows as its own, and align itself or children to them!
      </p>
      <CopyBlock
        language="sass"
        text={code}
        theme={monokaiSublime}
        showLineNumbers
        wrapLines
        codeBlock
      />
      <Divider />
      <CopyBlock
        language="html"
        text={code2}
        theme={monokaiSublime}
        showLineNumbers
        wrapLines
        codeBlock
      />
      <Divider />
      <div className="preview">
        <div className="grid">
          <div className="item">
            <div className="subitem"></div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Subgrid;
