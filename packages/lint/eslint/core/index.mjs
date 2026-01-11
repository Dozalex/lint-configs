import bestPractices from './best-practices.mjs';
import errorsPractices from './errors.mjs';
import es6 from './es6.mjs';
import imports from './imports.mjs';
import node from './node.mjs';
import variables from './variables.mjs';
import style from './style.mjs';

export default [
  ...bestPractices,
  ...errorsPractices,
  ...node,
  ...style,
  ...variables,
  ...es6,
  ...imports,
];
