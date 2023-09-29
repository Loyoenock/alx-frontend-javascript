// Define an Airport class with a constructor that accepts name and code as parameters.
// It checks the data types of the parameters and sets the _name and _code properties.
export default class Airport {
  constructor(name, code) {
    // Check if name and code are strings; throw errors if they are not.
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    // Initialize instance variables _name and _code with the provided values.
    this._name = name;
    this._code = code;
  }

  // Define a custom symbol for converting the Airport object to a string.
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
