
function dec(id) {
    console.log('evaluated', id);
    return (target, property, descriptor) => console.log('executed', id, ' target: ', target, ' property: ', property, ' descriptor: ', descriptor);
}

function observable(target, property, descriptor) {

    console.log('executed', ' target: ', target, ' property: ', property, ' descriptor: ', descriptor);


    return {
        enumerable: true, configurable: true,
        get: function () {
            console.log('get');
            if(!this['__'+property]){
                this['__'+property] = descriptor.initializer.call(this);
            }
            return this['__'+property];
        },
        set: function (v) {
            console.log('set');
            this['__'+property] = v;
        }
    };
}

class Example {
    @dec(1)
    method() { }


    @observable todos = [1];

    @observable i = 1;
}

var e = new Example();
e.method();
console.log(e.todos);
e.todos = [1, 2];
console.log(e.todos);

console.log(e);
e.i = 2;
console.log(e);
