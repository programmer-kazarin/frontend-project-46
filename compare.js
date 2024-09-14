import _ from 'lodash';
import parse from './parsers.js';

const compareContent = (json1, json2) => {
  const allKeys = _.sortBy(_.union(Object.keys(json1), Object.keys(json2)));
  let result = '{\n';
  allKeys.forEach((key) => {
    if (!Object.hasOwn(json2, key)) {
      result += `  - ${key}: ${json1[key]}`;
    } else if (Object.hasOwn(json1, key) && Object.hasOwn(json2, key)) {
      if (json1[key] === json2[key]) {
        result += `    ${key}: ${json1[key]}\n`;
      } else {
        result += `  - ${key}: ${json1[key]}\n`;
        result += `  + ${key}: ${json2[key]}\n`;
      }
    } else if (!Object.hasOwn(json1, key)) {
      result += `  + ${key}: ${json2[key]}\n`;
    }
  });
  result += '}';
  return result;
};

const compareFiles = (file1, file2) => compareContent(parse(file1), parse(file2));

export default compareFiles;
