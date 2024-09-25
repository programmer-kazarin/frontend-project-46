import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (diff, parent = '') => {
  const lines = Object
    .entries(diff)
    .map(([key, val]) => {
      if (val.status === ' ' && _.isObject(val)) {
        return plain(val.value, `${parent}${key}.`);
      }
      if (val.status === '+') {
        return `Property '${parent}${key}' was added with value: ${formatValue(val.value)}`;
      }
      if (val.status === '-') {
        return `Property '${parent}${key}' was removed`;
      }
      if (Object.hasOwn(val, 'before')) {
        return `Property '${parent}${key}' was updated. From ${formatValue(val.before.value)} to ${formatValue(val.after.value)}`;
      }
      return '';
    });
  return [...lines]
    .filter((line) => line.trim() !== '')
    .join('\n');
};

export default plain;
