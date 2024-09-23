#!/usr/bin/env node
import { program } from 'commander';
import compareFiles from './compare.js';
import format from './formatters.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish');
program.parse();
const { args } = program;
program.action(console.log(`${format(compareFiles(args[0], args[1]), program.opts().format)}`));
