#!/usr/bin/env node
import { Option, program } from 'commander';
import gendiff from '../src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .addOption(new Option('-f, --format [type]', 'output format', 'stylish').choices(['stylish', 'plain', 'json']))
  .action((filepath1, filepath2, options) => gendiff(filepath1, filepath2, options.format));
program.parse();
