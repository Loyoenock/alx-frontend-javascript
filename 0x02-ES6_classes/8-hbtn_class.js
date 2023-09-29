// Define a HolbertonClass class with a constructor that validates and initializes size and location properties.
export default class HolbertonClass {
  constructor(size, location) {
    // Validate that size is a number and location is a string; throw errors if not.
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    } else if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    // Initialize instance variables _size and _location with the provided values.
    this._size = size;
    this._location = location;
  }

  // Define a custom symbol for converting the HolbertonClass object to a primitive value.
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    return this._location;
  }
}
