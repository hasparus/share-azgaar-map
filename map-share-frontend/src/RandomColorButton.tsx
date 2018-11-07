import { Component, h } from 'hyperapp';

import * as styles from './styles';
import { classNames } from './utils/classNames';

export const RandomColorButton: Component = () => (
  <button
    className={classNames(styles.resetButton, styles.textButton)}
    onclick={styles.setRandomGlobalColors}
  >
    random color
  </button>
);
