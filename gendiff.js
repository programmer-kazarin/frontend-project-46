#!/usr/bin/env node
import { Option, program } from 'commander';
import compareFiles from './compare.js';
import format from './formatters/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .addOption(new Option('-f, --format [type]', 'output format', 'stylish').choices(['stylish', 'plain', 'json']));
program.parse();
const { args } = program;
program.action(console.log(`${format(compareFiles(args[0], args[1]), program.opts().format)}`));
