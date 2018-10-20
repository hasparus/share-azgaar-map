import { h } from 'hyperapp';

import { Component } from './Component';

type ErrorMessageAttrs = {
  msg: string | null;
};
export const ErrorMessage: Component<ErrorMessageAttrs> = ({ msg }) => (
  <div>{msg}</div>
);
