"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeType = void 0;
// In index.js , have seperate interfaces for all the shapes.
// Using getArea , print areas of different shapes.
const area_1 = require("./area");
var ShapeType;
(function (ShapeType) {
    ShapeType["Circle"] = "circle";
    ShapeType["Rectangle"] = "rectangle";
    ShapeType["Triangle"] = "triangle";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));
const circle = {
    type: ShapeType.Circle,
    radius: 5,
};
const triangle = {
    type: ShapeType.Triangle,
    side1: 2,
    side2: 3,
    side3: 4,
};
const rectangle = {
    type: ShapeType.Rectangle,
    side1: 2,
    side2: 4,
};
(0, area_1.getArea)(circle);
(0, area_1.getArea)(triangle);
(0, area_1.getArea)(rectangle);
