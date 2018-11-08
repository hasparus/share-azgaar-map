import { h } from 'hyperapp';

import { AccessibleIcon } from './AccessibleIcon';
import { Component } from './Component';
import { ButtonAttrs, FlatButton } from './FlatButton';

export const RemoveButton: Component<ButtonAttrs> = ({
  className,
  ...rest
}) => (
  <FlatButton className={className} title="remove map" {...rest}>
    <AccessibleIcon kind="trashcan" label="remove map" />
  </FlatButton>
);
