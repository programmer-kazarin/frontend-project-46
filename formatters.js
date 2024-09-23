import _ from 'lodash';

const replacer = ' ';
const spacesCount = 4;

const stylish = (diff, deep = 1) => {
  if (!_.isObject(diff)) {
    return `${diff}`;
  }
  const lines = Object
    .entries(diff)
    .map(([key, val]) => {
      const indentSize = deep * spacesCount - 2;
      const currentIndent = replacer.repeat(indentSize);
      if (Object.hasOwn(val, 'value')) {
        return `${currentIndent}${val.status} ${key}: ${stylish(val.value, deep + 1)}`;
      } if (Object.hasOwn(val, 'before')) {
        return `${currentIndent}${val.before.status} ${key}: ${stylish(val.before.value, deep + 1)}\n${currentIndent}${val.after.status} ${key}: ${stylish(val.after.value, deep + 1)}`;
      }
      return `${currentIndent}  ${key}: ${stylish(val, deep + 1)}`;
    });
  return [
    '{',
    ...lines,
    `${replacer.repeat(deep * spacesCount - 4)}}`,
  ].join('\n');
};

export default (diff, style) => {
  if (style === 'stylish') {
    return stylish(diff);
  }
  return `${JSON.stringify(diff, null, 2)}`;
};
