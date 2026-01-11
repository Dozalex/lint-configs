import baseConfig from './base.mjs';
import a11yConfig from './reactBase/a11y.mjs';
import reactBestPracticesConfig from './reactBase/best-practices.mjs';
import hooksConfig from './reactBase/hooks.mjs';
import orderConfig from './reactBase/order.mjs';

export default [
  ...baseConfig,
  ...a11yConfig,
  ...reactBestPracticesConfig,
  ...hooksConfig,
  ...orderConfig,
];
