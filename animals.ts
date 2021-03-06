class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }

    move(meters) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    move() {
        console.log("Slithering...");
        super.move(5);
    }
}

class Horse extends Animal {
    move() {
        console.log("Galloping...");
        super.move(45);
    }
}

var sam: Snake = new Snake("Sammy the Python")
var tom: Animal = new Horse("Tommy the Palomino")

sam.move()
tom.move(34)

function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
class ConsoleLogger {
    log(): void {
        for (let id in this) {
            if (this.hasOwnProperty(id)) {
                console.log(id, ':', this[id]);
            }
        }
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
jim.log();

class Component<P>{
    public props: P;
}

var c: Component<{ animal?: Animal }> = new Component<{ a: Animal }>();
c.props = {animal: new Animal('cat')};

var c1: Component<{ animal: Animal }> = new Component<{ animal: Animal }>();
c1.props = {animal: new Snake("Sammy the Python")};

interface IScrollOptions {
	x: number;
	y?: number;
}

var opt: IScrollOptions= {x:2};