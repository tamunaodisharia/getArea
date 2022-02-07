"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArea = void 0;
const types_js_1 = require("./types.js");
function getCircleArea(shape) {
    return shape.radius * shape.radius * Math.PI;
}
function getTriangleArea(shape) {
    let s = (shape.side1 + shape.side2 + shape.side3) / 2;
    let area = Math.sqrt(s * ((s - shape.side1) * (s - shape.side2) * (s - shape.side3)));
    return area;
}
function getRectangleArea(shape) {
    return shape.side1 * shape.side2;
}
function getArea(shape) {
    let area;
    switch (shape.type) {
        case types_js_1.ShapeType.Circle:
            area = getCircleArea(shape);
            break;
        case types_js_1.ShapeType.Rectangle:
            area = getRectangleArea(shape);
            break;
        case types_js_1.ShapeType.Triangle:
            area = getTriangleArea(shape);
            break;
    }
    console.log(`Area of the ${shape.type} is ${area.toFixed(2)}.`);
}
exports.getArea = getArea;
