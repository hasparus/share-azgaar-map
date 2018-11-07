import { Component, h } from 'hyperapp';

const icons = {
  eye: [
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />,
    <circle cx="12" cy="12" r="3" />,
  ],
};

type Attrs = {
  kind: keyof typeof icons;
};

export const FeatherIcon: Component<Attrs> = ({ kind }) => (
  <svg
    aria-hidden
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    {icons[kind]}
  </svg>
);
