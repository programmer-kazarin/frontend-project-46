import compareFiles from './compare.js';
import format from './formatters/index.js';

export default (filepath1, filepath2, formatOption) => console.log(`${format(compareFiles(filepath1, filepath2), formatOption)}`);
