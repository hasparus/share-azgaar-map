import { h, Component } from 'hyperapp';
import { uploadFiles } from './uploadFiles';

const handleClick = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.map';
  input.multiple = true;
  input.onchange = event => {
    const { files } = event.target as HTMLInputElement;
    if (files) {
      uploadFiles(files);
    } else {
      console.error('No files selected!');
    }
  };
  input.click();
};

const UploadButton: Component = () => (
  <button
    style={{
      position: 'absolute',
      bottom: 0,
    }}
    onclick={handleClick}
  >
    Upload map
  </button>
);

export default UploadButton;
