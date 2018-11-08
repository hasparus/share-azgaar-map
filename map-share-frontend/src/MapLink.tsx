import { h } from 'hyperapp';

import { Map } from '../../map-share-common';

import { Component } from './Component';
import * as styles from './styles';

export const MapLink: Component<Map> = ({ path, temporaryLink }) => (
  <a className={styles.textButton} href={temporaryLink} title={path}>
    {path.slice(1)}
  </a>
);
