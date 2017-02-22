/**
 * Created by hien.tran on 2/21/2017.
 */

export default class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  sayName() {
    console.log("width, height: ", this.width, this.height);
  }

  sayHistory() {
  }
}