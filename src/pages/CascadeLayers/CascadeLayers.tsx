import React from 'react';
import { CopyBlock, monokai } from 'react-code-blocks';
import { Header } from 'semantic-ui-react';

import ContentLayout from 'layout/ContentLayout';

const CascadeLayers: React.FC = () => {
  const code = `@layer default url(headings.css);
@layer default url(links.css);

@layer default {
    .container {
        display: block;
    }
}
`;

  const code2 = `@layer default {
    p  { margin-bottom: 1.1em; }
}

@layer framework {
    @layer default {
        p  { margin-bottom: 0.75em; }
    }

    p  { margin-bottom: 1em; }

    @layer theme {
        p  { margin-bottom: 0.5em; }
    }
}`;

  const code3 = `@layer framework.theme {
     blockquote { color: hotpink; }
}`;

  return (
    <ContentLayout title="Cascade Layers">
      <p>
        Before <b>@layer</b>, the discovered order of loaded stylesheets was
        very important, as styles loaded last can overwrite previously loaded
        styles. This led to meticulously managed entry stylesheets, where
        developers needed to load less important styles first and more important
        styles later
      </p>
      <p>
        With <b>@layer</b>, the entry file can pre-define layers, and their
        order, ahead of time. Then, as styles load, are loaded or defined, they
        can be placed within a layer, allowing a preservation of style override
        importance but without the meticulously managed loading orchestration.
      </p>
      <CopyBlock
        language="sass"
        text={code}
        theme={monokai}
        showLineNumbers
        wrapLines
        codeBlock
      />
      <Header as="h3">Nesting Layers</Header>
      <p>
        When multiple <b>@layer</b> rules are nested, the resulting layer names
        are a combination of outer and inner identifiers, separated by a period.
      </p>
      <CopyBlock
        language="sass"
        text={code2}
        theme={monokai}
        showLineNumbers
        wrapLines
        codeBlock
      />
      <p>The resulting layers & layer-order are:</p>
      <ol>
        <li>default</li>
        <li>framework.default</li>
        <li>framework.theme</li>
        <li>framework unlayered</li>
        <li>unlayered</li>
      </ol>
      <p>
        As a shorthand, nested layers can also be described by combining
        identifiers in a single layer rule:
      </p>
      <CopyBlock
        language="sass"
        text={code3}
        theme={monokai}
        showLineNumbers
        wrapLines
        codeBlock
      />
    </ContentLayout>
  );
};

export default CascadeLayers;
