import _ from 'lodash';
import parse from './parsers.js';

const diff = (json1, json2, level = 0) => {
  const allKeys = _.sortBy(_.union(Object.keys(json1), Object.keys(json2)));
  console.log(`allKeys = ${allKeys}`);
  let result = {};
  allKeys.forEach((key) => {
    if (!Object.hasOwn(json2, key)) {
      result[key] = { level, status: 'removed', value: json1[key]};
    } else if (!Object.hasOwn(json1, key)) {
      result[key] = { level, status: 'added', value: json2[key]};
    } else {
      if (json1[key] === json2[key]) {
        result[key] = { level, status: 'not changed', value: json1[key]};
      } else if (_.isObject(json1[key]) && _.isObject(json2[key])) {
        result[key] = { level, status: 'changed', value: diff(json1[key], json2[key], level+1)};        
      } else {  
        result[key] = { level, status: 'changed', before: json1[key], after: json2[key]};
      }
    }    
  });
  return result;
};

const compareFiles = (file1, file2) => `${JSON.stringify(diff(parse(file1), parse(file2)), null, 2)}`;

export default compareFiles;
