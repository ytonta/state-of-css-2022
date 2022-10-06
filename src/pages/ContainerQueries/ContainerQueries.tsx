import React from 'react';
import { CopyBlock, monokaiSublime } from 'react-code-blocks';
import { Divider } from 'semantic-ui-react';

import ContentLayout from 'layout/ContentLayout';

import './ContainerQueries.scss';

const ContainerQueries: React.FC = () => {
  const code = `.large-container {
    container-type: inline-size;
    container-name: large-container;
}

.small-container {
    container-type: inline-size;
    container-name: small-container;
}

@container large-container (max-width: 600px) {
    .card {
        background-color: crimson;
    }
}

@container small-container (max-width: 400px) {
    .card {
        background-color: gold;
    }
}
`;

  const Card = () => (
    <div className="card">
      <h3>Example</h3>
      <div>This is a card</div>
    </div>
  );

  return (
    <ContentLayout title="Container Queries">
      <p>
        Before <b>@container</b>, elements of a webpage could only respond to
        the size of the whole viewport. This is great for macro layouts, but for
        micro layouts, where their outer container isn't the whole viewport,
        it's impossible for the layout to adjust accordingly.
      </p>
      <p>
        After <b>@container</b>, elements can respond to a parent container size
        or style! The only caveat is the containers must declare themselves as
        possible query targets, which is a small requirement for a large
        benefit.
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
      <div className="large-container">
        <Card />
      </div>
      <Divider />
      <div className="small-container">
        <Card />
      </div>
    </ContentLayout>
  );
};

export default ContainerQueries;
