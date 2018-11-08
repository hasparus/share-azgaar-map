import { h } from 'hyperapp';

import { Map } from '../../map-share-common';

import { Component } from './Component';
import * as styles from './styles';

export const MapLink: Component<Map & { link: string }> = ({ path, link }) => (
  <a className={styles.flatButton} href={link} title={path}>
    {path.slice(1)}
  </a>
);
