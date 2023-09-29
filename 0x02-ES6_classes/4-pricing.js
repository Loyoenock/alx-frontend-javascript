// Import the Currency class from the '3-currency' module.
import Currency from './3-currency';

// Define a class named Pricing with a constructor that accepts
// amount (number) and currency (an instance of class Currency) as parameters.
export default class Pricing {
  constructor(amount, currency) {
    // Check the data types of the parameters and throw errors if they are invalid.
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  // Define getter methods for retrieving the values of _amount and _currency.
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Define setter methods for updating the values of _amount and _currency.
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }
    this._currency = currency;
  }

  // Define a method displayFullPrice that returns a formatted string
  // containing the amount, currency name, and currency code.
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Define a static method convertPrice that accepts amount (number)
  // and conversionRate (number) as parameters and returns the converted amount.
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }

    return amount * conversionRate;
  }
}
