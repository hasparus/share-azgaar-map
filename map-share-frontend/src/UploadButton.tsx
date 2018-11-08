import { h } from 'hyperapp';

import { Component } from './Component';
import * as styles from './styles';

type Attrs = {
  onclick(): void;
};
export const UploadButton: Component<Attrs> = ({ onclick }) => (
  <button className={styles.buttonBig} onclick={onclick}>
    Upload map
  </button>
);
