import { h, View } from 'hyperapp';
import fromPairs from 'ramda.frompairs';

import { Map, SERVICE_URL } from '../../map-share-common';

import { deleteFiles, uploadFiles } from './api';
import { Maps } from './Maps';
import { openFileUploadDialog } from './openFileUploadDialog';
import { UploadButton } from './UploadButton';
import { omit } from './utils/omit';

export const state = {
  maps: [] as Map[],
  errorMsg: null as string | null,
};

export type State = typeof state;

export const actions = {
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
      const { files } = event.target;
      if (files) {
        uploadFiles(files).then(uploaded => {
          acts.setState({ maps: st.maps.concat(uploaded.maps) });
        });
      } else {
        console.error('No files selected!');
      }
    });
  },
  deleteMaps: (paths: string[]) => (st: State, acts: Actions) => {
    deleteFiles(paths).then(() => {
      acts.setState({
        maps: Object.values(omit(fromPairs(st.maps.map(m => [m.path, m] as [string, Map])), paths)).
      });
    });
  },
};

export type Actions = typeof actions;

export const view: View<State, Actions> = (st, acts) =>
  st.errorMsg ? (
    <div>{st.errorMsg}</div>
  ) : (
    <section>
      <Maps maps={st.maps} />
      <UploadButton onclick={acts.uploadMaps} />
    </section>
  );
