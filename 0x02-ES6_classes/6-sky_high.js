// Import the Building class from './5-building'.
import Building from './5-building';

// Define a subclass SkyHighBuilding that extends Building,
// with a constructor, getter method, and evacuationWarningMessage function.
class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Define a getter method for retrieving the number of floors.
  get floors() {
    return this._floors;
  }

  // Define the evacuationWarningMessage function for this subclass.
  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}

// Export the SkyHighBuilding class as the default export of this module.
export default SkyHighBuilding;

