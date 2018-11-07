import { css } from 'emotion';
import { Component, h } from 'hyperapp';

import { Map } from '../../map-share-common';

import { Column } from './Column';
import { Actions } from './core';
import { MapLink } from './MapLink';
import { RemoveButton } from './RemoveButton';

const className = css`
  display: flex;
  flex: 1;

  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  overflow: hidden auto;
  align-items: flex-start;

  margin: 0;
  padding: 0;

  > li {
    margin: 1px 0;
    padding: 1em;
    border: 0px dashed black;
    border-left-width: 1px;
  }
`;

export const Maps: Component<{
  maps: Map[];
  deleteMaps: null | Actions['deleteMaps'];
}> = ({ maps, deleteMaps }) => (
  <Column style={{ flex: 1 }}>
    <h1 style={{ margin: '0.5em 0' }}>Maps</h1>
    <ul className={className}>
      {maps.map(map => (
        <li>
          <MapLink {...map} />
          {deleteMaps && (
            <RemoveButton
              style={{
                marginLeft: '15px',
              }}
              onclick={() => deleteMaps([map.path])}
            />
          )}
        </li>
      ))}
    </ul>
  </Column>
);
