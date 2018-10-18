import { h, Component } from 'hyperapp';

import { Map } from '../../map-share-common';

const MapLink: Component<Map> = ({ path, temporaryLink }) => (
  <a href={temporaryLink}>{path}</a>
);

export default MapLink;
