export const cities = [
  "Bari",
  "Cagliari",
  "Firenze",
  "Genova",
  "Milano",
  "Napoli",
  "Palermo",
  "Roma",
  "Torino",
  "Venezia",
  "Tutte",
];

export class Wheel {
  city;

  constructor(city) {
    this.city = city;
  }

  /**
   * Validate wheel checking if city is valid
   * @param {any} wheelCity
   * @returns {Array<string>} - an array of validation errors
   */
  static validate(wheelCity) {
    let errors = [];

    if (!cities.find((val) => val === wheelCity)) {
      errors.push("Wheel is invalid");
    }

    return errors;
  }
}
