"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArea = void 0;
// In area.js , create 4 functions getCircleArea , getRectangleArea , getTriangleArea , getArea ,
//export only
// getArea .
const index_js_1 = require("./index.js");
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
        case index_js_1.ShapeType.Circle:
            area = getCircleArea(shape);
            break;
        case index_js_1.ShapeType.Rectangle:
            area = getRectangleArea(shape);
            break;
        case index_js_1.ShapeType.Triangle:
            area = getTriangleArea(shape);
            break;
    }
    console.log(`Area of the ${shape.type} is ${area.toFixed(2)}.`);
}
exports.getArea = getArea;
