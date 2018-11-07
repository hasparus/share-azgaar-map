import { Component, h } from 'hyperapp';

import { FeatherIcon } from './FeatherIcon';
import * as styles from './styles';
import { classNames } from './utils/classNames';
import { VisuallyHidden } from './VisuallyHidden';

export const RandomColorButton: Component = () => (
  <button
    className={classNames(styles.resetButton, styles.textButton)}
    onclick={styles.setRandomGlobalColors}
  >
    <FeatherIcon kind="eye" aria-hidden />
    <VisuallyHidden>random color</VisuallyHidden>
  </button>
);
