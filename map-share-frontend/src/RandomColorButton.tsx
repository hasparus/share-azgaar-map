import { Component, h } from 'hyperapp';

import { AccessibleIcon } from './AccessibleIcon';
import { FeatherIcon } from './FeatherIcon';
import * as styles from './styles';
import { classNames } from './utils/classNames';
import { VisuallyHidden } from './VisuallyHidden';

export const RandomColorButton: Component = () => (
  <button
    className={classNames(styles.resetButton, styles.textButton)}
    onclick={styles.setRandomGlobalColors}
    title="randomize color"
  >
    <AccessibleIcon kind="eye" label="random color" />
  </button>
);
