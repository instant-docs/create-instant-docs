#!/usr/bin/env node

const { copyFolder } = require('copy-folder-util');
const path = require('path');

const scriptDir = __dirname;
const projectName = process.argv[2];
const projectDir = projectName ? path.join(process.cwd(), projectName) : process.cwd();

const templateDir = path.join(scriptDir, 'template');

console.log(`Creating instant-docs at ${projectDir}`);
copyFolder(templateDir, projectDir);
console.log('Completed');

