// Use together with "aria-hidden".
// As in https://ui.reach.tech/visually-hidden

import { Component, h } from 'hyperapp';

export const VisuallyHidden: Component = (_, children) => (
  <div
    style={{
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      width: '1px',
      margin: '-1px',
      padding: 0,
      overflow: 'hidden',
      position: 'absolute',
    }}
  >
    {children}
  </div>
);
