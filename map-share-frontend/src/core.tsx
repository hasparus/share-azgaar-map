import { h, View } from 'hyperapp';

import { Map, SERVICE_URL } from '../../map-share-common';

import { deleteFiles, uploadFiles } from './api';
import * as auth from './auth';
import { Buttons } from './Buttons';
import { Column } from './Column';
import { ErrorMessage } from './ErrorMessage';
import { Footer } from './Footer';
import { MainContainer } from './MainContainer';
import { Maps } from './Maps';
import { RandomColorButton } from './RandomColorButton';
import * as styles from './styles';
import { classNames } from './utils/classNames';
import { openFileUploadDialog } from './utils/openFileUploadDialog';

const enum MapsStatus {
  None,
  Pending,
  Success,
  Failed,
}

export const state = {
  ...auth.state,
  maps: [] as Map[],
  mapsStatus: MapsStatus.None,
  errorMsg: null as string | null,
};

export type State = typeof state;

export const actions = {
  ...auth.actions,
  setState: (diff: Partial<State>) => {
    return diff;
  },
  getMaps: () => async (_: State, acts: Actions) => {
    acts.setState({
      mapsStatus: MapsStatus.Pending,
    });
    try {
      const response = await fetch(SERVICE_URL);
      if (response.ok) {
        const { maps } = await response.json();
        if (Array.isArray(maps)) {
          acts.setState({ maps, mapsStatus: MapsStatus.Success });
        } else {
          acts.setState({
            errorMsg: `Couldn't fetch maps: ${response.status}`,
          });
        }
      }
    } catch (err) {
      acts.setState({
        errorMsg: err.toString(),
        mapsStatus: MapsStatus.Failed,
      });
    }
  },
  uploadMaps: () => (st: State, acts: Actions) => {
    openFileUploadDialog({ accept: '.map' }).then(event => {
      const files = Array.prototype.filter.call(
        event.target.files || [],
        (f: File) => f.name.endsWith('.map')
      );
      if (files.length) {
        uploadFiles(files).then(uploaded => {
          acts.setState({ maps: st.maps.concat(uploaded.maps) });
        });
      } else {
        acts.setState({ errorMsg: 'No files selected' });
      }
    });
  },
  deleteMaps: (paths: string[]) => (
    { auth: { data }, maps }: State,
    acts: Actions
  ) => {
    deleteFiles(paths, data ? data.accountId : '')
      .then(() => {
        const pathsSet = new Set(paths);
        acts.setState({
          maps: maps.filter(m => !pathsSet.has(m.path)),
        });
      })
      .catch((err: { msg: string }) => {
        acts.setState({ errorMsg: err.msg });
      });
  },
};

export type Actions = typeof actions;

export const view: View<State, Actions> = (st, acts) => (
  <Column style={{ maxHeight: '100%' }}>
    <MainContainer>
      <Maps
        maps={st.maps}
        deleteMaps={st.auth.isAdmin ? acts.deleteMaps : null}
      />
      {st.mapsStatus === MapsStatus.Pending && 'Fetching maps...'}
      {st.mapsStatus === MapsStatus.Failed && (
        <section>
          <div key="1">
            <span>Couldn't fetch maps.</span>
            <button
              class={classNames(styles.resetButton, styles.flatButton)}
              style={{
                textDecoration: 'underline',
              }}
              onclick={acts.getMaps}
            >
              Try again?
            </button>
          </div>
          <ErrorMessage msg={st.errorMsg} />
        </section>
      )}
      <Buttons />
    </MainContainer>
    <Footer>
      <auth.AdminLoginLink />
      <RandomColorButton />
    </Footer>
  </Column>
);
