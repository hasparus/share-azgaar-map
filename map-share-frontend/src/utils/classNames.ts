export const classNames = (...classes: (string | undefined | false)[]) =>
  classes.filter(Boolean).join(' ');
