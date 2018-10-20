import * as CSS from 'csstype';
import { h } from 'hyperapp';

import { Component } from './Component';

export const RemoveButton: Component<{
  style: CSS.Properties;
  onclick: HTMLButtonElement['onclick'];
}> = attrs => <button {...attrs}>x</button>;
