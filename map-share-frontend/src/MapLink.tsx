import { h } from 'hyperapp';

import { Map } from '../../map-share-common';
import { Component } from './Component';

const MapLink: Component<Map> = ({ path, temporaryLink }) => (
  <a href={temporaryLink} key={path}>
    {path}
  </a>
);

export default MapLink;
