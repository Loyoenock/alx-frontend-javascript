// Define a class named Currency with a constructor that accepts
// code (string) and name (string) as parameters and initializes
// instance variables _code and _name with the provided values.
class Currency {
  constructor(code, name) {
    // Check the data types of the parameters and throw errors if they are invalid.
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    } else if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  // Define getter methods for retrieving the values of _code and _name.
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Define setter methods for updating the values of _name and _code.
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  // Define a method displayFullCurrency that returns a formatted string
  // containing the name and code of the currency.
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

// Export the Currency class as the default export of this module.
export default Currency;
