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
