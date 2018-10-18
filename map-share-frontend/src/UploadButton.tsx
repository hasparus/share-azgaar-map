import { h } from 'hyperapp';
import { Component } from '.';

type Attrs = {
  onclick: () => void;
};
const UploadButton: Component<Attrs> = ({ onclick }) => (
  <button
    style={{
      position: 'absolute',
      bottom: 0,
    }}
    onclick={onclick}
  >
    Upload map
  </button>
);

export default UploadButton;
