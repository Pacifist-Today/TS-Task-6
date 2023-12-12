var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figure = /** @class */ (function () {
    function Figure(name, color) {
        this._name = name;
        this._color = color;
    }
    return Figure;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(name, color, radius) {
        var _this = _super.call(this, name, color) || this;
        _this._radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        this.area = Math.PI * Math.pow(this._radius, 2);
        return this.area;
    };
    return Circle;
}(Figure));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, color, length, width) {
        var _this = _super.call(this, name, color) || this;
        _this._length = length;
        _this._width = width;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        this.area = this._length * this._width;
        return this.area;
    };
    Rectangle.prototype.print = function () {
        return "S = length * width = ".concat(this._length, " * ").concat(this._width);
    };
    return Rectangle;
}(Figure));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(name, color, side) {
        var _this = _super.call(this, name, color) || this;
        _this._side = side;
        return _this;
    }
    Square.prototype.calculateArea = function () {
        this.area = Math.pow(this._side, 2);
        return this.area;
    };
    Square.prototype.print = function () {
        return "S = side^2 = ".concat(Math.pow(this._side, 2));
    };
    return Square;
}(Figure));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(name, color, base, height) {
        var _this = _super.call(this, name, color) || this;
        _this._base = base;
        _this._height = height;
        return _this;
    }
    Triangle.prototype.calculateArea = function () {
        this.area = (this._height * this._base) / 2;
        return this.area;
    };
    return Triangle;
}(Figure));
var circle = new Circle('circle', 'red', 30);
console.log(circle);
console.log(circle.calculateArea());
console.log(circle);
var rectangle = new Rectangle('rectangle', 'red', 5, 3);
console.log(rectangle);
console.log(rectangle.calculateArea());
console.log(rectangle.print());
console.log(rectangle);
