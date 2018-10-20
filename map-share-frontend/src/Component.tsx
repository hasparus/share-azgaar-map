import { Component as HyperComponent } from 'hyperapp';

import { Actions, State } from './core';

export type Component<Attrs = {}> = HyperComponent<Attrs, State, Actions>;
