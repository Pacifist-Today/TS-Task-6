abstract class Figure {
    private _name: string
    private _color: string
    area: number

    constructor (name: string, color: string) {
        this._name = name
        this._color = color
    }

    abstract calculateArea(): number
}

interface IPrint {
    print(): string
}

class Circle extends Figure {

    private _radius: number
    area: number

    constructor (name: string, color: string, radius: number) {
        super(name, color)
        this._radius = radius
    }

    calculateArea(): number {
        this.area = Math.PI * Math.pow(this._radius, 2)
        return this.area
    }
}

class Rectangle extends Figure implements IPrint {

    private _length: number
    private _width: number
    area: number

    constructor(
        name: string,
        color: string,
        length: number,
        width: number
    ) {
        super(name, color)
        this._length = length
        this._width = width
    }

    calculateArea(): number {
        this.area = this._length * this._width
        return this.area
    }

    print () {
        return `S = length * width = ${this._length} * ${this._width}`
    }
}

class Square extends Figure implements IPrint {

    private _side: number
    area: number

    constructor(
        name: string,
        color: string,
        side: number
    ) {
        super(name, color)
        this._side = side
    }

    calculateArea(): number {
        this.area = Math.pow(this._side, 2)
        return this.area
    }

    print () {
        return `S = side^2 = ${Math.pow(this._side, 2)}`
    }
}

class Triangle extends Figure {

    private _base: number
    private _height: number
    area: number

    constructor (name: string, color: string, base: number, height: number) {
        super(name, color)
        this._base = base
        this._height = height
    }

    calculateArea (): number {
        this.area = (this._height * this._base) / 2
        return this.area
    }
}

const circle = new Circle('circle', 'red', 30)
console.log(circle)
console.log(circle.calculateArea())
console.log(circle)

const rectangle = new Rectangle('rectangle', 'red', 5, 3)
console.log(rectangle)
console.log(rectangle.calculateArea())
console.log(rectangle.print())
console.log(rectangle)