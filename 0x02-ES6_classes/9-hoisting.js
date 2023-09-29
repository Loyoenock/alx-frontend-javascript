// Import the StudentHolberton class from the same directory (relative path).
import StudentHolberton from './StudentHolberton';

// Define a HolbertonClass class with a constructor that initializes year and location properties.
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  // Define getter methods for accessing year and location properties.
  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

// Create instances of the HolbertonClass and StudentHolberton classes.
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Create a list of students and export it as the default export of this module.
const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;
