import { css, cx } from 'emotion';

// tslint:disable-next-line:no-import-side-effect
import './style.scss';

function setCssVars(obj: Record<string, string>) {
  if (document.documentElement) {
    const style = document.documentElement.style;
    for (const [key, value] of Object.entries(obj)) {
      style.setProperty(key, value);
    }
  }
}

export function setRandomGlobalColors() {
  // tslint:disable-next-line:insecure-random
  const primaryHue = Math.random() * 255;
  setCssVars({
    '--primary': `hsl(${primaryHue}, 99%, 65%)`,
  });
}

export * from './classes';
