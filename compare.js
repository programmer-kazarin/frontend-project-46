import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const compareFiles = (file1, file2) => {
  const path1 = path.resolve(process.cwd(), file1);
  const path2 = path.resolve(process.cwd(), file2);
  const content1 = JSON.parse(fs.readFileSync(path1));
  const content2 = JSON.parse(fs.readFileSync(path2));
  return compareJsons(content1, content2);
};

const compareJsons = (json1, json2) => {
  const allKeys = _.sortBy(_.union(Object.keys(json1), Object.keys(json2)));
  var result = '{\n'; 
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

export {compareFiles};