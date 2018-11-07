import { Component, h } from 'hyperapp';

import * as styles from './styles';
import { classNames } from './utils/classNames';
import { VisuallyHidden } from './VisuallyHidden';

export const RandomColorButton: Component = () => (
  <button
    className={classNames(styles.resetButton, styles.textButton)}
    onclick={styles.setRandomGlobalColors}
  >
    <svg
      aria-hidden
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
    <VisuallyHidden>random color</VisuallyHidden>
  </button>
);
