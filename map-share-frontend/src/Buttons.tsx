import { css } from 'emotion';
import { h } from 'hyperapp';

import * as auth from './auth';
import { Component } from './Component';
import { FEATURE_LOGIN } from './env';
import { UploadButton } from './UploadButton';

const className = css`
  background-color: inherit;
  border-top: 1px solid black;
  width: auto;
  display: flex;
  flex-direction: row;
  padding-top: 1em;

  > :not(:first-child) {
    margin-left: 1em;
  }
`;

export const Buttons: Component = () => (_st, acts) => (
  <section className={className}>
    <UploadButton onclick={acts.uploadMaps} />
    {FEATURE_LOGIN && <auth.LoginButton />}
  </section>
);
