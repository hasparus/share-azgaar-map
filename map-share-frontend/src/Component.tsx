import { Component as HyperComponent } from 'hyperapp';
import { State, Actions } from './core';

export type Component<Attrs = {}> = HyperComponent<Attrs, State, Actions>;
