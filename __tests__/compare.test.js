import fs from 'fs';
import path from 'path';
import compareFiles from '../compare.js';
import format from '../formatters.js';

const getFixturePath = (filename) => path.join('.', '__fixtures__', filename);

test('recursive json', () => {
  const pathToResult = path.resolve(process.cwd(), '__fixtures__/file1_file2_result.txt');
  const resultContent = fs.readFileSync(pathToResult, 'utf8');
  expect(format(compareFiles(getFixturePath('file1.json'), getFixturePath('file2.json')), 'stylish'))
    .toEqual(resultContent);
});
