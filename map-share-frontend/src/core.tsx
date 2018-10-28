import { h, View } from 'hyperapp';

import { Map, SERVICE_URL } from '../../map-share-common';

import { deleteFiles, uploadFiles } from './api';
import * as auth from './auth';
import { FEATURE_LOGIN } from './env';
import { ErrorMessage } from './ErrorMessage';
import { Maps } from './Maps';
import { UploadButton } from './UploadButton';
import { openFileUploadDialog } from './utils/openFileUploadDialog';

export const state = {
  ...auth.state,
  maps: [] as Map[],
  errorMsg: null as string | null,
};

export type State = typeof state;

export const actions = {
  ...auth.actions,
  setState: (diff: Partial<State>) => {
    return diff;
  },
  getMaps: () => async (_: State, acts: Actions) => {
    try {
      const response = await fetch(SERVICE_URL);
      if (response.ok) {
        const { maps } = await response.json();
        if (Array.isArray(maps)) {
          acts.setState({ maps });
        } else {
          acts.setState({
            errorMsg: `Couldn't fetch maps: ${response.status}`,
          });
        }
      }
    } catch (err) {
      acts.setState({
        errorMsg: err.toString(),
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
  <article>
    <main>
      <Maps
        maps={st.maps}
        deleteMaps={st.auth.isAdmin ? acts.deleteMaps : null}
      />
      <section
        style={{
          position: 'absolute',
          bottom: 0,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: '1em',
        }}
      >
        <UploadButton onclick={acts.uploadMaps} />
        {FEATURE_LOGIN && <auth.LoginButton />}
      </section>
    </main>
    <ErrorMessage msg={st.errorMsg} />
    <footer className="footer">
      <auth.AdminLoginLink />
    </footer>
  </article>
);
