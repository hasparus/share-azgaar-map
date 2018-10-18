import { h, Component } from 'hyperapp';

import { Map } from '../../map-share-common';

import MapLink from './MapLink';

const Maps: Component<{
  maps: Map[];
}> = ({ maps }) => (
  <section>
    <h1 style={{ marginBottom: 0 }}>Maps</h1>
    <div class="maps-grid">
      {maps.map(map => (
        <MapLink {...map} />
      ))}
    </div>
  </section>
);

export default Maps;
