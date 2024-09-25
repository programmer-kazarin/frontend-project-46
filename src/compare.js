import _ from 'lodash';
import parse from './parsers.js';

const diffIter = (json1, json2) => {
  const allKeys = _.sortBy(_.union(Object.keys(json1), Object.keys(json2)));
  const result = {};
  allKeys.forEach((key) => {
    if (!Object.hasOwn(json2, key)) {
      _.assign(result, { [key]: { status: '-', value: json1[key] } });
    } else if (!Object.hasOwn(json1, key)) {
      _.assign(result, { [key]: { status: '+', value: _.isObject(json2[key]) ? diffIter(json2[key], json2[key]) : json2[key] } });
    } else if (json1[key] === json2[key]) {
      _.assign(result, { [key]: { status: ' ', value: json1[key] } });
    } else if (_.isObject(json1[key]) && _.isObject(json2[key])) {
      _.assign(result, { [key]: { status: ' ', value: diffIter(json1[key], json2[key]) } });
    } else {
      _.assign(result, { [key]: { before: { status: '-', value: json1[key] }, after: { status: '+', value: json2[key] } } });
    }
  });
  return result;
};

const compareFiles = (file1, file2) => diffIter(parse(file1), parse(file2));

export default compareFiles;
