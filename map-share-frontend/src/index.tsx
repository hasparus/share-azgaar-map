import { app } from 'hyperapp';

import { handleAuthQueryString } from './auth';
import { Actions, actions, State, state, view } from './core';

import { setRandomGlobalColors } from './styles';
setRandomGlobalColors();

const appArgs: [State, Actions, typeof view, HTMLElement | null] = [
  state,
  actions,
  view,
  document.getElementById('root'),
];

let main: Actions;
if (process.env.NODE_ENV !== 'production') {
  type AppConstructor = typeof app;
  type Middleware = (_: AppConstructor) => AppConstructor;
  // tslint:disable-next-line:no-var-requires
  const devtools: Middleware = require('hyperapp-redux-devtools');
  main = devtools(app)(...appArgs);
} else {
  main = app(...appArgs);
}

main.getMaps();
handleAuthQueryString(main);
