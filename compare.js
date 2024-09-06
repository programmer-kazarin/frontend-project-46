import fs from 'fs';
import path from 'path';
import _ from 'lodash';

export default (file1, file2) => {
  const path1 = path.resolve(process.cwd(), file1);
  const path2 = path.resolve(process.cwd(), file2);
  const content1 = JSON.parse(fs.readFileSync(path1));
  const content2 = JSON.parse(fs.readFileSync(path2));
  const allKeys = _.sortBy(_.union(Object.keys(content1), Object.keys(content2)));
  console.log('{');
  allKeys.forEach(key => {
    if (!Object.hasOwn(content2, key)) {
      console.log(`  - ${key}: ${content1[key]}`);
    } else if (Object.hasOwn(content1, key) && Object.hasOwn(content2, key)) {
      if (content1[key] === content2[key]) {
        console.log(`    ${key}: ${content1[key]}`);
      } else {
        console.log(`  - ${key}: ${content1[key]}`);
        console.log(`  + ${key}: ${content2[key]}`);
      }      
    } else if (!Object.hasOwn(content1, key)) {
      console.log(`  + ${key}: ${content2[key]}`);
    }
  });
  console.log('}');
};