import { getArea } from "./area";
export enum ShapeType {
  Circle = "circle",
  Rectangle = "rectangle",
  Triangle = "triangle",
}
export interface Circle {
  type: ShapeType.Circle;
  radius: number;
}
export interface Rectangle {
  type: ShapeType.Rectangle;
  side1: number;
  side2: number;
}
export interface Triangle {
  type: ShapeType.Triangle;
  side1: number;
  side2: number;
  side3: number;
}

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
