import { Component, h } from 'hyperapp';

import { classNames } from '../utils/classNames';

// tslint:disable-next-line:no-import-side-effect
import './styles.scss';

export type Snackbar = {
  msgType: 'error' | 'notification';
  msgBody: string;
};

export type State = {
  snackbar: Snackbar;
};

export const state = {};

export const actions = {
  snackbar: {
    setState: (snackbar: Snackbar) => ({ snackbar }),
    dismiss: () => ({ snackbar: undefined }),
  },
};

export type Actions = typeof actions;

export type Attrs = {};

const component: Component<Attrs, State> = () => ({
  snackbar: { msgBody, msgType },
}: State) => (
  <article
    className={classNames('snackbar', msgType && `snackbar--${msgType}`)}
  >
    {msgBody}
  </article>
);
