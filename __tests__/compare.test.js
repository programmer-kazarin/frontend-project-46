import fs from 'fs';
import path from 'path';
import compareFiles from '../compare.js';

test('empty json', () => {
  expect(compareFiles('__fixtures__/empty1.json', '__fixtures__/empty2.json')).toEqual('{\n}');
});

test('not empty json', () => {
  const pathToResult = path.resolve(process.cwd(), '__fixtures__/result.txt');
  const resultContent = fs.readFileSync(pathToResult, 'utf8');
  expect(compareFiles('__fixtures__/filepath1.json', '__fixtures__/filepath2.json'))
    .toEqual(resultContent);
});

test('not empty yaml', () => {
  const pathToResult = path.resolve(process.cwd(), '__fixtures__/result.txt');
  const resultContent = fs.readFileSync(pathToResult, 'utf8');
  expect(compareFiles('__fixtures__/filepath1.yml', '__fixtures__/filepath2.yml'))
    .toEqual(resultContent);
});
