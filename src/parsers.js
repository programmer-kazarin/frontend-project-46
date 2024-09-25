import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (file) => {
  const pathToFile = path.resolve(process.cwd(), file);
  const format = path.extname(pathToFile);
  if (format === '.yml' || format === '.yaml') {
    return yaml.load(fs.readFileSync(pathToFile), 'utf-8');
  }
  return JSON.parse(fs.readFileSync(pathToFile), 'utf-8');
};
