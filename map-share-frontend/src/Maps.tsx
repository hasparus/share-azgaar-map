import copyToClipboard from 'copy-to-clipboard';
import { css } from 'emotion';
import { Component, h } from 'hyperapp';

import { Map } from '../../map-share-common';

import { AccessibleIcon } from './AccessibleIcon';
import { Column } from './Column';
import { Actions } from './core';
import { FlatButton } from './FlatButton';
import { makeMapPermalink } from './makeMapPermalink';
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

const internalButtonStyle = css`
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.4em;
`;

const copyMsg = 'copy link to clipboard';

export const Maps: Component<{
  maps: Map[];
  deleteMaps: null | Actions['deleteMaps'];
}> = ({ maps, deleteMaps }) => (
  <Column style={{ flex: 1 }}>
    <h1 style={{ margin: '0.5em 0' }}>Maps</h1>
    <ul className={className}>
      {maps.map(map => {
        const { path } = map;
        const link = makeMapPermalink(path);

        return (
          <li key={path}>
            <MapLink path={path} link={link} />
            <FlatButton
              className={internalButtonStyle}
              onclick={() => copyToClipboard(link)}
              title={copyMsg}
            >
              <AccessibleIcon kind="clipboard" label={copyMsg} />
            </FlatButton>
            {deleteMaps && (
              <RemoveButton
                className={internalButtonStyle}
                onclick={() => deleteMaps([path])}
              />
            )}
          </li>
        );
      })}
    </ul>
  </Column>
);
