import { h, app, Component, View } from 'hyperapp';
import { Map } from './protocol';
import './styles.scss';

const SERVICE_URL = 'http://localhost:3000/';

const Maps: Component<{ maps: Map[] }> = ({ maps }) => (
  <section>
    <h1 style={{ marginBottom: 0 }}>Maps</h1>
    <div class="maps-grid">
      {state.maps.map(map => (
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
  maps: [
    {
      path: 'example',
      temporaryLink: 'http://example.com',
    },
  ] as Map[],
};

type State = typeof state;

async function getMaps() {
  const response = await fetch(SERVICE_URL);
  console.log(response);
}

getMaps();

const actions = {
  setMaps: maps => () => ({ state: maps }),
};

type Actions = typeof actions;

const view: View<State, Actions> = (state, actions) => (
  <section>
    <Maps maps={state.maps} />
    <UploadButton />
  </section>
);

app(state, actions, view, document.getElementById('root'));
