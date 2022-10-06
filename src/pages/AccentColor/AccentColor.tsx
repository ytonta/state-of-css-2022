import React from 'react';
import { CopyBlock, monokaiSublime } from 'react-code-blocks';

import ContentLayout from 'layout/ContentLayout';

import './AccentColor.scss';

const AccentColor: React.FC = () => {
  const code = `.accented {
    accent-color: black;
}

[color-scheme='dark'].accented {
    accent-color: white;
}
`;
  return (
    <ContentLayout title="Accent Color">
      <p>
        Before <b>accent-color</b>, when you wanted a form with brand matching
        colors, you could end up with complex libraries or CSS solutions that
        became hard to manage over time. While they gave you all the options,
        and hopefully included accessibility, the choice to use the built-in
        components or adopt your own becomes tedious to continue to choose.
      </p>
      <p>
        After <b>accent-color</b>, one line of CSS brings a brand color to the
        built-in components. In addition to a tint, the browser intelligently
        chooses proper contrasting colors for ancillary parts of the component
        and adapts to system color schemes (light or dark).
      </p>
      <p>
        Currently, only four elements will tint via the <b>accent-color</b>{' '}
        property: <b>checkbox</b>, <b>radio</b>, <b>range</b> and{' '}
        <b>progress</b>.
      </p>
      <CopyBlock
        language="sass"
        text={code}
        theme={monokaiSublime}
        showLineNumbers
        wrapLines
        codeBlock
      />
      <fieldset className="accented" color-scheme="light">
        <h3>Light Theme</h3>
        <label>
          Checkbox
          <input type="checkbox" checked />
        </label>

        <label>
          Radio Buttons
          <fieldset>
            <input type="radio" name="accented-demo" checked />
            <input type="radio" name="accented-demo" />
            <input type="radio" name="accented-demo" />
          </fieldset>
        </label>

        <label>
          Range Slider
          <input type="range" />
        </label>

        <label>
          Progress element
          <progress max="100" value="50">
            50%
          </progress>
        </label>
      </fieldset>
      <fieldset className="accented" color-scheme="dark">
        <h3>Dark Theme</h3>
        <label>
          Checkbox
          <input type="checkbox" checked />
        </label>

        <label>
          Radio Buttons
          <fieldset>
            <input type="radio" name="accented-demo-2" checked />
            <input type="radio" name="accented-demo-2" />
            <input type="radio" name="accented-demo-2" />
          </fieldset>
        </label>

        <label>
          Range Slider
          <input type="range" />
        </label>

        <label>
          Progress element
          <progress max="100" value="50">
            50%
          </progress>
        </label>
      </fieldset>
    </ContentLayout>
  );
};

export default AccentColor;
