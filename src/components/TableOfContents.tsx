import React from 'react';
import { Header, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';

import { Routes } from 'App.routes';

const TableOfContents: React.FC = () => (
  <div>
    <Header as="h3">Table of Contents</Header>
    <List bulleted>
      <List.Item>
        <Link to={generatePath(Routes.CascadeLayers)}>Cascade Layers</Link>
      </List.Item>
      <List.Item>
        <Link to={generatePath(Routes.Subgrid)}>Subgrid</Link>
      </List.Item>
      <List.Item>
        <Link to={generatePath(Routes.ContainerQueries)}>
          Container Queries
        </Link>
      </List.Item>
      <List.Item>
        <Link to={generatePath(Routes.AccentColor)}>Accent Color</Link>
      </List.Item>
      <List.Item>
        <Link to={generatePath(Routes.Inert)}>Inert</Link>
      </List.Item>
      <List.Item>
        <Link to={generatePath(Routes.ViewportUnits)}>Viewport Units</Link>
      </List.Item>
      <List.Item>
        <Link to={generatePath(Routes.Has)}>Has</Link>
      </List.Item>
    </List>
  </div>
);

export default TableOfContents;
