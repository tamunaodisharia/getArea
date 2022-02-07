import { ShapeType, Circle, Rectangle, Triangle } from "./index.js";
function getCircleArea(shape: Circle): number {
  return shape.radius * shape.radius * Math.PI;
}
function getTriangleArea(shape: Triangle): number {
  let s = (shape.side1 + shape.side2 + shape.side3) / 2;
  let area = Math.sqrt(
    s * ((s - shape.side1) * (s - shape.side2) * (s - shape.side3))
  );
  return area;
}
function getRectangleArea(shape: Rectangle): number {
  return shape.side1 * shape.side2;
}
export function getArea(shape: Circle | Rectangle | Triangle) {
  let area: number;
  switch (shape.type) {
    case ShapeType.Circle:
      area = getCircleArea(shape);
      break;
    case ShapeType.Rectangle:
      area = getRectangleArea(shape);
      break;
    case ShapeType.Triangle:
      area = getTriangleArea(shape);
      break;
  }
  console.log(`Area of the ${shape.type} is ${area.toFixed(2)}.`);
}
