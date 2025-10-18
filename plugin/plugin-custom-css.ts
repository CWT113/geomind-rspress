import path from 'path';
import type { RspressPlugin } from '@rspress/shared';

export function pluginCustomCss(): RspressPlugin {
  return {
    name: 'global-css',
    globalStyles: path.join(__dirname, 'global.css'),
  };
}