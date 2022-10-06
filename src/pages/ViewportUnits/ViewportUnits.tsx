import React from 'react';
import { CopyBlock, monokaiSublime } from 'react-code-blocks';

import ContentLayout from 'layout/ContentLayout';

import './ViewportUnits.scss';

const ViewportUnits: React.FC = () => {
  const code = `.original-viewport-units {
    height: 100vh;
    width: 100vw;
    --size: 100vmin;
    --size: 100vmax;
}

.new-height-viewport-units {
    height: 100vh;
    height: 100dvh;
    height: 100svh;
    height: 100lvh;
    block-size: 100vb;
    block-size: 100dvb;
    block-size: 100svb;
    block-size: 100lvb;
}

.new-width-viewport-units {
    width: 100vw;
    width: 100dvw;
    width: 100svw;
    width: 100lvw;
    inline-size: 100vi;
    inline-size: 100dvi;
    inline-size: 100svi;
    inline-size: 100lvi;
}

.new-min-viewport-units {
    --size: 100vmin;
    --size: 100dvmin;
    --size: 100svmin;
    --size: 100lvmin;
}

.new-max-viewport-units {
    --size: 100vmax;
    --size: 100dvmax;
    --size: 100svmax;
    --size: 100lvmax;
}`;

  return (
    <ContentLayout title="Viewport Units">
      <p>
        Before the new viewport variants, the web offered physical units to
        assist in fitting viewports. There was one for height, width, smallest
        size (vmin), and largest side (vmax). These worked well for many things,
        but mobile browsers introduced a complexity.
      </p>
      <p>
        On mobile, when loading a page, the status bar with the url is shown,
        and this bar consumes some of the viewport space. After a few seconds
        and some interactivity, the status bar may slide away to allow a bigger
        viewport experience for the user. But when that bar slides out, the
        viewport height has changed, and any vh units would shift and resize as
        their target size changed. In later years, the vh unit specifically
        needed to decide which of the two viewport sizes it was going to use,
        because it was causing jarring visual layout issues on mobile devices.
        It was determined that the vh would always represent the largest
        viewport.
      </p>
      <img
        src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/KtZ9bXwtzmo7hguwQOWO.png?auto=format&w=964"
        alt="Viewport Units"
      />
      <p>
        Here's a complete list of all the new viewport unit options made
        available with the new viewport variants:
      </p>
      <CopyBlock
        language="sass"
        text={code}
        theme={monokaiSublime}
        showLineNumbers
        wrapLines
        codeBlock
      />
    </ContentLayout>
  );
};

export default ViewportUnits;
