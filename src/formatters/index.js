import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (diff, style = 'stylish') => {
  switch (style) {
    case 'stylish':
      return stylish(diff);
    case 'plain':
      return plain(diff);
    case 'json':
      return json(diff);
    default:
      return `${JSON.stringify(diff, null, 2)}`;
  }
};
