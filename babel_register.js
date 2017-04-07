require('babel-register');

console.log(process.argv);
var program = require('commander');
program
  .version('0.0.1')
  .option('-s, --script [script]', 'script')
  .parse(process.argv);

console.log(program.script);

require(program.script);