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

  static getWheel(value) {
    return cities.find((val) => val === value);
  }
}
