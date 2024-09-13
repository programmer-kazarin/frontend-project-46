import {compareFiles} from '../compare.js';

test('empty', () => {
  expect(compareFiles('__fixtures__/empty1.json', '__fixtures__/empty2.json')).toEqual('{\n}');  
});

test('not_empty', () => {
  expect(compareFiles('__fixtures__/filepath1.json', '__fixtures__/filepath2.json'))
	.toEqual(
`{
  - follow: false    host: hexlet.io
  - proxy: 123.234.53.22  - timeout: 50
  + timeout: 20
  + verbose: true
}`);  
});