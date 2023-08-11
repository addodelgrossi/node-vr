const path = require('path');
const { execSync } = require('child_process');

const inputPath = path.resolve(__dirname, '../src');
const outputPath = path.resolve(__dirname, '../docs');

execSync(`jsdoc ${inputPath} -d ${outputPath}`);
