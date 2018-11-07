import * as CSS from 'csstype';
import { h } from 'hyperapp';

import { Component } from './Component';
import * as styles from './styles';
import { classNames } from './utils/classNames';

export const RemoveButton: Component<{
  style: CSS.Properties;
  onclick: HTMLButtonElement['onclick'];
}> = attrs => (
  <button className={styles.buttonElevated} {...attrs}>
    x
  </button>
);
