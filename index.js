#!/usr/bin/env node

const path = require('path');

async function main() {
    const { copyFolder } = await import('copy-folder-util');
    const scriptDir = __dirname;
    const projectName = process.argv[2];
    const projectDir = projectName ? path.join(process.cwd(), projectName) : process.cwd();

    const templateDir = path.join(scriptDir, 'template');

    console.log(`Creating instant-docs at ${projectDir}`);
    copyFolder.cp(templateDir, projectDir);
    console.log('Completed');
    console.log('First install dependencies with your favourite package manager');
    console.log('e.g. npm install')
    console.log('Then start server');
    console.log('e.g. npm start')
}

main();