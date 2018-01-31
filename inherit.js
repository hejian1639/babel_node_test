class Point {
    constructor(x, y) {
        console.log('Point')
        this.x = x;
        this.y = y;
    }
    
}


class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        console.log('ColorPoint')
        this.color = color;
    }
}