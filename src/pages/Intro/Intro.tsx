import React from 'react';
import { Header } from 'semantic-ui-react';

import TableOfContents from 'components/TableOfContents';

const Intro: React.FC = () => (
  <>
    <Header as="h2">Web styling features of today and tomorrow</Header>
    <TableOfContents />
    <Header as="h3">Presenter: Yannick Tonta</Header>
  </>
);

export default Intro;
