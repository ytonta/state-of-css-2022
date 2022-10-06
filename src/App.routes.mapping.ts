import React from 'react';

import { Routes } from 'App.routes';
import Intro from 'pages/Intro/Intro';
import CascadeLayers from 'pages/CascadeLayers/CascadeLayers';
import Subgrid from 'pages/Subgrid/Subgrid';
import ContainerQueries from 'pages/ContainerQueries/ContainerQueries';
import AccentColor from 'pages/AccentColor/AccentColor';
import Inert from 'pages/Inert/Inert';
import ViewportUnits from 'pages/ViewportUnits/ViewportUnits';
import Has from 'pages/Has/Has';

export interface RouteInfo {
  path: Routes;
  element: React.FunctionComponent<any> | React.LazyExoticComponent<any>;
}

type RoutesMap = Record<string, RouteInfo>;

export const RoutesDefinition: RoutesMap = {
  Root: {
    path: Routes.Root,
    element: Intro,
  },
  Intro: {
    path: Routes.Intro,
    element: Intro,
  },
  CascadeLayers: {
    path: Routes.CascadeLayers,
    element: CascadeLayers,
  },
  Subgrid: {
    path: Routes.Subgrid,
    element: Subgrid,
  },
  ContainerQueries: {
    path: Routes.ContainerQueries,
    element: ContainerQueries,
  },
  AccentColor: {
    path: Routes.AccentColor,
    element: AccentColor,
  },
  Inert: {
    path: Routes.Inert,
    element: Inert,
  },
  ViewportUnits: {
    path: Routes.ViewportUnits,
    element: ViewportUnits,
  },
  Has: {
    path: Routes.Has,
    element: Has,
  },
};
