import _ from 'lodash';

const iterNoStatus = (diff) => {
  if (!_.isObject(diff)) {
    return typeof value === 'string' ? `"${diff}"` : diff;
  }
  const result = {};
  Object
    .entries(diff)
    .forEach(([key, val]) => {
      _.assign(result, { [key]: iterNoStatus(Object.hasOwn(val, 'value') ? val.value : val) });
    });
  return result;
};

const iter = (diff) => {
  if (!_.isObject(diff)) {
    return typeof value === 'string' ? `"${diff}"` : `${diff}`;
  }
  const result = {};
  Object
    .entries(diff)
    .forEach(([key, val]) => {
      if (Object.hasOwn(val, 'value')) {
        if (val.status === '+' || val.status === '-') {
          _.assign(result, { [key]: { value: iterNoStatus(val.value), status: val.status === '+' ? 'added' : 'removed' } });
        } else {
          _.assign(result, { [key]: { value: iter(val.value), status: 'not changed' } });
        }
      } else if (Object.hasOwn(val, 'before')) {
        _.assign(result, { [key]: { value: iterNoStatus(val.after.value), prevValue: iterNoStatus(val.before.value), status: 'changed' } });
      }
    });
  return result;
};

const json = (diff) => `${JSON.stringify(iter(diff), null, 2)}`;

export default json;
