// class Ring {
//   constructor(color, gem) {
//     this.color = color;
//     this.gem = gem;
//   }
//   print() {
//     console.log(`${this.color} ${this.gem} ring`)
//   }
// }

// const sapphireRing = new Ring('gold', 'sapphire')
// const rubyRing = new Ring('gold', 'ruby')
// const diamondRing = new Ring('gold', 'diamond')

// sapphireRing.print()
// rubyRing.print()
// diamondRing.print()

class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  getAge() {
    let d = new Date();
    return d.getFullYear() - this.year;
  }
  print() {
    console.log(`This ${this.brand} is ${this.getAge()} years old.`);
  }
}

const fordFocus = new Car("focus", 2009);
const audiR8 = new Car("audi", 2017);
const chevyNova = new Car("chevrolet", 1997);

fordFocus.print();
audiR8.print();
chevyNova.print();
