import { h, app, Component, View } from 'hyperapp';
import { Map, SERVICE_URL } from '../../map-share-common';
import './styles.scss';

const Maps: Component<{ maps: Map[] }> = ({ maps }) => (
  <section>
    <h1 style={{ marginBottom: 0 }}>Maps</h1>
    <div class="maps-grid">
      {maps.map(map => (
        <MapLink {...map} />
      ))}
    </div>
  </section>
);

const MapLink: Component<Map> = ({ path, temporaryLink }) => (
  <a href={temporaryLink}>{path}</a>
);

const UploadButton: Component = () => (
  <button
    style={{
      position: 'absolute',
      bottom: 0,
    }}
  >
    Upload map
  </button>
);

const state = {
  maps: [] as Map[],
  errorMsg: null as string | null,
};

type State = typeof state;

const actions = {
  setState: (diff: Partial<State>) => {
    console.warn({ diff });
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
};

type Actions = typeof actions;

const view: View<State, Actions> = (state, actions) =>
  state.errorMsg ? (
    <div>{state.errorMsg}</div>
  ) : (
    <section>
      <Maps maps={state.maps} />
      <UploadButton />
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
