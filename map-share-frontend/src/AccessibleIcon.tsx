import { Component, h, VNode } from 'hyperapp';

import { FeatherIcon, FeatherIconAttrs } from './FeatherIcon';
import { VisuallyHidden } from './VisuallyHidden';
type Attrs = FeatherIconAttrs & {
  label: string;
};

export const AccessibleIcon: Component<Attrs> = ({ label, ...rest }) =>
  ([
    <FeatherIcon {...rest} aria-hidden />,
    <VisuallyHidden>random color</VisuallyHidden>,
    // tslint:disable-next-line:no-any // TODO: Update typings of hyperapp
  ] as any) as VNode<Attrs>;
