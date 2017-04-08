require('babel-register')({
  "presets": ['es2015', 'stage-0', 'react'],
   "plugins": ["transform-decorators-legacy"]
});

console.log(process.argv);
var program = require('commander');
program
  .version('0.0.1')
  .option('-s, --script [script]', 'script')
  .parse(process.argv);

console.log(program.script);

require(program.script);