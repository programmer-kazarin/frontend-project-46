#!/usr/bin/env node
import { program } from 'commander';
import compare from './compare.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format');
program.parse();
const { args } = program;
program.action(compare(args[0], args[1]));