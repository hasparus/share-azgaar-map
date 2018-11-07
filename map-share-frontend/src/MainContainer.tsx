import { css } from 'emotion';
import { Component, h } from 'hyperapp';

import { Column } from './Column';
import { HtmlAttrs } from './HtmlAttrs';

const className = css`
    background: var(--yellow);
    padding: 1em;
    width: 80vw;
    min-height: 300px;

    position: relative;
  }

  h1 {
    font-weight: normal;
  }

  a {
    color: black;
    font-family: inherit;

    &:hover {
      color: let(--blue);
    }
  }
`;

export const MainContainer: Component<HtmlAttrs> = (attrs, children) => (
  <Column
    as="main"
    className={className}
    style={{
      marginTop: '1em',
    }}
    {...attrs}
  >
    {children}
  </Column>
);
