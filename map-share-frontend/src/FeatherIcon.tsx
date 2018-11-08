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
  trashcan: [
    <polyline points="3 6 5 6 21 6" />,
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />,
    <line x1="10" y1="11" x2="10" y2="17" />,
    <line x1="14" y1="11" x2="14" y2="17" />,
  ],
  clipboard: [
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />,
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />,
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
