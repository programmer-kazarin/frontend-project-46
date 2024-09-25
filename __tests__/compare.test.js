import fs from 'fs';
import path from 'path';
import compareFiles from '../src/compare.js';
import format from '../src/formatters/index.js';

const getFixturePath = (filename) => path.join('.', '__fixtures__', filename);

test('file: json, format: stylish', () => {
  const pathToResult = path.resolve(process.cwd(), '__fixtures__/file1_file2_stylish_result.txt');
  const resultContent = fs.readFileSync(pathToResult, 'utf8');
  expect(format(compareFiles(getFixturePath('file1.json'), getFixturePath('file2.json')), 'stylish'))
    .toEqual(resultContent);
});

test('file: json, format: stylish', () => {
  const pathToResult = path.resolve(process.cwd(), '__fixtures__/file1_file2_plain_result.txt');
  const resultContent = fs.readFileSync(pathToResult, 'utf8');
  expect(format(compareFiles(getFixturePath('file1.json'), getFixturePath('file2.json')), 'plain'))
    .toEqual(resultContent);
});

test('file:json, format:json', () => {
  const pathToResult = path.resolve(process.cwd(), '__fixtures__/file1_file2_json_result.txt');
  const resultContent = fs.readFileSync(pathToResult, 'utf8');
  expect(format(compareFiles(getFixturePath('file1.json'), getFixturePath('file2.json')), 'json'))
    .toEqual(resultContent);
});
