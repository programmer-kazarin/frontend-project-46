import fs from 'fs';
import path from 'path';
import compareFiles from '../compare.js';

const getFixturePath = (filename) => path.join('.', '__fixtures__', filename);

test('empty json', () => {
  expect(compareFiles(getFixturePath('empty1.json'), getFixturePath('empty2.json'))).toEqual('{\n}');
});

test('not empty json', () => {
  const pathToResult = path.resolve(process.cwd(), '__fixtures__/result.txt');
  const resultContent = fs.readFileSync(pathToResult, 'utf8');
  expect(compareFiles(getFixturePath('filepath1.json'), getFixturePath('filepath2.json')))
    .toEqual(resultContent);
});

test('not empty yaml', () => {
  const pathToResult = path.resolve(process.cwd(), '__fixtures__/result.txt');
  const resultContent = fs.readFileSync(pathToResult, 'utf8');
  expect(compareFiles(getFixturePath('filepath1.yml'), getFixturePath('filepath2.yml')))
    .toEqual(resultContent);
});

test('recursive json', () => {
  const pathToResult = path.resolve(process.cwd(), '__fixtures__/file1_file2_result.txt');
  const resultContent = fs.readFileSync(pathToResult, 'utf8');
  expect(compareFiles(getFixturePath('file1.json'), getFixturePath('file2.json')))
    .toEqual(resultContent);
});
