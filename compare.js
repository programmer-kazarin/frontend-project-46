import fs from 'fs';
import path from 'path';


export default (file1, file2) => {
  const path1 = path.resolve(process.cwd(), file1);
  const path2 = path.resolve(process.cwd(), file2);
  const content1 = JSON.parse(fs.readFileSync(path1));
  const content2 = JSON.parse(fs.readFileSync(path2));
  console.log(content1);
  console.log(content2);
};