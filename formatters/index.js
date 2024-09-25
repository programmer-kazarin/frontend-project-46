import stylish from './stylish.js';
import plain from './plain.js';

export default (diff, style) => {
  if (style === 'stylish') {
    return stylish(diff);
  } if (style === 'plain') {
    return plain(diff);
  }
  return `${JSON.stringify(diff, null, 2)}`;
};
