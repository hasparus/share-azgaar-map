import { Component, h } from 'hyperapp';

import { Map } from '../../map-share-common';

import { Actions } from './core';
import { MapLink } from './MapLink';
import { RemoveButton } from './RemoveButton';

export const Maps: Component<{
  maps: Map[];
  deleteMaps: Actions['deleteMaps'];
}> = ({ maps, deleteMaps }) => (
  <section>
    <h1 style={{ marginBottom: 0 }}>Maps</h1>
    <div class="maps-grid">
      {maps.map(map => (
        <article>
          <MapLink {...map} />
          <RemoveButton
            style={{
              marginLeft: '15px',
            }}
            onclick={() => deleteMaps([map.path])}
          />
        </article>
      ))}
    </div>
  </section>
);
