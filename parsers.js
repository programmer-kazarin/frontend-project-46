import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (file) => {
  const pathToFile = path.resolve(process.cwd(), file);
  const format = path.extname(pathToFile);
  let { parse } = JSON;
  if (format === '.yml' || format === '.yaml') {
    parse = yaml.load;
  }

  return parse(fs.readFileSync(pathToFile), 'utf-8');
};
