import { css, cx } from 'emotion';

export const flatButton = css`
  color: black;
  font-family: inherit;
  padding: 2px 5px;

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.15);
    outline: none;
  }
`;

export const resetButton = css`
  font-family: inherit;
  font-size: inherit;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const buttonElevated = cx(
  resetButton,
  css`
    border: 1px black solid;
    color: black;
    box-shadow: 1px 1px 0 0 black;

    &:hover,
    &:focus {
      box-shadow: 0 0 0 0 black;
    }
  `
);

export const buttonBig = cx(
  buttonElevated,
  css`
    display: block;
    border-width: 2px;
    padding: 0.6em 1.2em;
    box-shadow: 6px 5px 0 0 black;
    text-transform: uppercase;
    transition: all 200ms ease-in-out;

    height: 1em;
    box-sizing: content-box;

    &:hover,
    &:focus {
      transform: translateY(2px);
      box-shadow: 1px 1px 0 0 black;
    }

    &:focus {
      outline: none;
    }
  `
);
