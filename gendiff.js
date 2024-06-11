#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
program
  .usage("[options]")
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .parse();

console.log('hello');