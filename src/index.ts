import { getArea } from "./area";
import { ShapeType, Circle, Rectangle, Triangle } from "./types.js";
const circle: Circle = {
  type: ShapeType.Circle,
  radius: 5,
};
const triangle: Triangle = {
  type: ShapeType.Triangle,
  side1: 2,
  side2: 3,
  side3: 4,
};
const rectangle: Rectangle = {
  type: ShapeType.Rectangle,
  side1: 2,
  side2: 4,
};

getArea(circle);
getArea(triangle);
getArea(rectangle);
