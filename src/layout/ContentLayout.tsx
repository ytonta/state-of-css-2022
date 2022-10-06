import React, { ReactNode } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

import TableOfContents from 'components/TableOfContents';

import './ContentLayout.scss';

interface ContentLayoutProps {
  title: string;
  children: ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = (props) => {
  const { title, children } = props;

  return (
    <Grid>
      <Grid.Column width={12}>
        <Header as="h2">{title}</Header>
        <Segment raised>{children}</Segment>
      </Grid.Column>
      <Grid.Column width={4} stretched>
        <div className="content-layout__sticky">
          <TableOfContents />
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default ContentLayout;
