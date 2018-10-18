import { h } from 'hyperapp';

import { Map } from '../../map-share-common';
import { Component } from '.';

const MapLink: Component<Map> = ({ path, temporaryLink }) => (
  <a href={temporaryLink}>{path}</a>
);

export default MapLink;
