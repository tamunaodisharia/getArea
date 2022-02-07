"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const area_1 = require("./area");
const types_js_1 = require("./types.js");
const circle = {
    type: types_js_1.ShapeType.Circle,
    radius: 5,
};
const triangle = {
    type: types_js_1.ShapeType.Triangle,
    side1: 2,
    side2: 3,
    side3: 4,
};
const rectangle = {
    type: types_js_1.ShapeType.Rectangle,
    side1: 2,
    side2: 4,
};
(0, area_1.getArea)(circle);
(0, area_1.getArea)(triangle);
(0, area_1.getArea)(rectangle);
