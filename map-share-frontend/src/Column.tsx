import { css } from 'emotion';
import { Component, h } from 'hyperapp';

import { HtmlAttrs } from './HtmlAttrs';
import { classNames } from './utils/classNames';

const className = css`
  display: flex;
  flex-direction: column;
`;

export const Column: Component<HtmlAttrs> = (attrs, children) => {
  const asProp = attrs.as || 'section';
  delete attrs.as;

  return h(
    asProp,
    {
      ...attrs,
      className: classNames(className, attrs.className),
    },
    children
  );
};

// tslint:enable:no-reserved-keywords
