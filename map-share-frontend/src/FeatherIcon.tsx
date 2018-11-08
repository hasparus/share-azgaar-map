import { css } from 'emotion';
import { Component, h } from 'hyperapp';

const icons = {
  eye: [
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />,
    <circle cx="12" cy="12" r="3" />,
  ],
  unlock: [
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />,
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />,
  ],
};

const className = css`
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

export type FeatherIconAttrs = {
  kind: keyof typeof icons;
  'aria-hidden'?: boolean;
  [key: string]: unknown;
};

export const FeatherIcon: Component<FeatherIconAttrs> = ({ kind, ...rest }) => (
  <svg viewBox="0 0 24 24" class={className} {...rest}>
    {icons[kind]}
  </svg>
);
