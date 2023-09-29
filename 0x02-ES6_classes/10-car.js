// Define a Car class with a constructor that initializes brand, motor, and color properties.
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Define a static getter method for the Symbol.species property.
  static get [Symbol.species]() {
    return this;
  }

  // Define a method to clone a Car instance using Symbol.species.
  cloneCar() {
    const ModelCar = this.constructor[Symbol.species];
    return new ModelCar();
  }
}
