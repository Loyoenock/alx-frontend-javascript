// Define a class named HolbertonCourse with a constructor that accepts
// name (string), length (number), and students (array of strings) as parameters.
class HolbertonCourse {
  constructor(name, length, students) {
    // Check the data types of the parameters and throw errors if they are invalid.
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }

    // Initialize instance variables _name, _length, and _students with the provided values.
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Define getter methods for retrieving the values of _name, _length, and _students.
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Define setter methods for updating the values of _name, _length, and _students.
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw a TypeError('Length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}

// Export the HolbertonCourse class as the default export of this module.
export default HolbertonCourse;

