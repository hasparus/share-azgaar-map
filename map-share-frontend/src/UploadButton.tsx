import { h } from 'hyperapp';

import { Component } from './Component';

type Attrs = {
  onclick(): void;
};
export const UploadButton: Component<Attrs> = ({ onclick }) => (
  <button className="button--big" onclick={onclick}>
    Upload map
  </button>
);
