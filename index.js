#!/usr/bin/env node

const path = require('path');

async function main() {
    const { copyFolder } = await import('copy-folder-util');
    const scriptDir = __dirname;
    const projectName = process.argv[2];
    if(!projectName ) {
        console.warn('Creating project in the current directory');
    }
    const projectDir = path.join(process.cwd(), projectName || '.');

    const templateDir = path.join(scriptDir, 'template');

    console.log(`Creating instant-docs at ${projectDir}`);
    copyFolder.cp(templateDir, projectDir);
    console.log('Completed');
    if (projectName) {
        console.log('Please first navigate to the directory');
        console.log(`e.g. cd ${projectName}`);
    }
    console.log('Install dependencies with your favourite package manager');
    console.log('e.g. npm install')
    console.log('Then start server');
    console.log('e.g. npm start')
}

main();