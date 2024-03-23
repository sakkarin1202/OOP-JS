class Shape { 
    constructor(color = "red", filled = true) {
        this.color = color;
        this.filled = filled;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    isFilled() {
        return this.filled;
    }

    setFilled(filled) {
        this.filled = filled;
    }

    toString() {
        return `Shape[color=${this.color}, filled=${this.filled}]`;
    }
}

class Circle extends Shape {
    constructor(radius = 1.0, color = "yellow", filled = true) {
        super(color, filled);
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `Circle[${super.toString()}, radius=${this.radius}]`;
    }
}

class Rectangle extends Shape {
    constructor(width = 1.0, length = 1.0, color = "pink", filled = true) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    getLength() {
        return this.length;
    }

    setLength(length) {
        this.length = length;
    }

    getArea() {
        return this.width * this.length;
    }

    getPerimeter() {
        return 2 * (this.width + this.length);
    }

    toString() {
        return `Rectangle[${super.toString()}, width=${this.width}, length=${
      this.length
    }]`;
    }
}

class Square extends Rectangle {
    constructor(side = 1.0, color = "green", filled = true) {
        super(side, side, color, filled);
    }

    getSide() {
        return this.width;
    }

    setSide(side) {
        this.width = side;
        this.length = side;
    }
    setWidth(side){
        this.setSide(side);
    }
    setLength(side){
        this.setSide(side);
    }
    toString() {
        return `Square[${super.toString()}]`;
    }
}

const main = () => { 
    const shap = new Shape()
    const circle = new Circle();
    const rectangle = new Rectangle();
    const square = new Square();

    console.log(shap.toString());

    console.log(circle.toString());

    console.log(rectangle.toString()); 

    console.log(square.toString());     
};

main();