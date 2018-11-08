import * as CSS from 'csstype';
import { Component, h } from 'hyperapp';

import * as styles from './styles';
import { classNames } from './utils/classNames';

export type ButtonAttrs = {
  className?: string;
  style?: CSS.Properties;
  title?: string;
  onclick: HTMLButtonElement['onclick'];
};

export const FlatButton: Component<ButtonAttrs> = (
  { className, ...rest },
  children
) => (
  <button
    className={classNames(styles.resetButton, styles.flatButton, className)}
    {...rest}
  >
    {children}
  </button>
);
