import { Component, h } from 'hyperapp';

import { AccessibleIcon } from './AccessibleIcon';
import { FlatButton } from './FlatButton';
import * as styles from './styles';

export const RandomColorButton: Component = () => (
  <FlatButton onclick={styles.setRandomGlobalColors} title="randomize color">
    <AccessibleIcon kind="eye" label="random color" />
  </FlatButton>
);
