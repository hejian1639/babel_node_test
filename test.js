
var obj = {};

obj['1'] = 'a';
console.log(obj);

obj['1'] = 'b';
console.log(obj);

obj['str'] = 'c';
console.log(obj);

var str = '@import "a.scss";\r\n.import{';
// str.replace(/(@import).*/, "$1");

console.log(str.replace(/(@import).*\r\n+/g, ""));