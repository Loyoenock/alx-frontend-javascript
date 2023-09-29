// Define a default class named Building with a constructor that accepts
// an optional parameter sqft (square footage) and sets it as an instance variable.
export default class Building {
  constructor(sqft = 0) {
    // Check if a subclass is extending Building and implementing
    // the evacuationWarningMessage function, as required.
    if (this.constructor !== Building
        && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  // Define a getter method for retrieving the value of sqft.
  get sqft() {
    return this._sqft;
  }
}
