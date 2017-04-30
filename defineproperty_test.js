

var o = {}; // Creates a new object

// Example of an object property added
// with defineProperty with a data property descriptor
Object.defineProperty(o, 'a', {
    value: 37,
    enumerable: true,
    writable: false,
});

o.a = 0;

console.log(o.a);

var bValue = 38;
Object.defineProperty(o, 'b', {
    enumerable: true,
    get: function () {
        console.log('get');
        return bValue;
    },
    set: function (newValue) {
        console.log('set');

        bValue = newValue;
    },
});
o.b = 0;

console.log(o.b);

Object.defineProperty(o, 'c', {
    value: 37,
    enumerable: false,
    writable: false,
});

console.log(Object.keys(o));