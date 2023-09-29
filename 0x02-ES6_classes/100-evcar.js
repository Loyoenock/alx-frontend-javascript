// Import the Car class from another module.
import Car from './10-car';

// Define an EVCar subclass that extends the Car class and adds a range property.
class EVCar extends Car {
  constructor(brand = '', motor = '', color = '', range = '') {
    super(brand, motor, color);
    this._range = range;
  }

  // Define a static getter method for the Symbol.species property.
  static get [Symbol.species]() {
    return Car;
  }
}

// Export the EVCar subclass as the default export of this module.
export default EVCar;
