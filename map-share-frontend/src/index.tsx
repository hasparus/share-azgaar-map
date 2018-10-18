import { h, app, View, Component as HyperComponent } from 'hyperapp';

import { Map, SERVICE_URL } from '../../map-share-common';

import Maps from './Maps';
import UploadButton from './UploadButton';
import './styles.scss';
import { uploadFiles } from './uploadFiles';

const state = {
  maps: [] as Map[],
  errorMsg: null as string | null,
};

type State = typeof state;

const actions = {
  setState: (diff: Partial<State>) => {
    return diff;
  },
  getMaps: () => async (_: State, actions: Actions) => {
    try {
      const response = await fetch(SERVICE_URL);
      if (response.ok) {
        const { maps } = await response.json();
        if (Array.isArray(maps)) {
          actions.setState({ maps });
        } else {
          actions.setState({
            errorMsg: `Couldn't fetch maps: ${response.status}`,
          });
        }
      }
    } catch (err) {
      actions.setState({
        errorMsg: err.toString(),
      });
    }
  },
  uploadMaps: () => (_: State, actions: Actions) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.map';
    input.multiple = true;
    input.onchange = event => {
      const { files } = event.target as HTMLInputElement;
      if (files) {
        uploadFiles(files).then(uploaded => {
          console.log(uploaded);
          actions.setState(uploaded);
        });
      } else {
        console.error('No files selected!');
      }
    };
    input.click();
  },
};

type Actions = typeof actions;

export type Component<Attrs = {}> = HyperComponent<Attrs, State, Actions>;

const view: View<State, Actions> = (state, actions) =>
  state.errorMsg ? (
    <div>{state.errorMsg}</div>
  ) : (
    <section>
      <Maps maps={state.maps} />
      <UploadButton onclick={actions.uploadMaps} />
    </section>
  );

const appArgs: [State, Actions, typeof view, HTMLElement | null] = [
  state,
  actions,
  view,
  document.getElementById('root'),
];

let main;
if (process.env.NODE_ENV !== 'production') {
  const devtools = require('hyperapp-redux-devtools');
  main = devtools(app)(...appArgs);
} else {
  main = app(...appArgs);
}

main.getMaps();
