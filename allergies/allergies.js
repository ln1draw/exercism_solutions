export class Allergies {
  constructor(num) {
    this.num = num;
    this.allergens = this.mapAllergens(num); 
  }

  list() {
    return Object.keys(this.allergens).reverse();
  }

  allergicTo(allergen) {
    return this.allergens[allergen] == true;
  }

  mapAllergens(num) {
    var matchable = {
      128: 'cats',
      64: 'pollen',
      32: 'chocolate',
      16: 'tomatoes',
      8: 'strawberries',
      4: 'shellfish',
      2: 'peanuts',
      1: 'eggs'
    }
    var map = {};
    var remainder = num;
    // .keys automatically sorts, hence the .reverse
    var keys = Object.keys(matchable).reverse();

    for (var i = 0; i < 8; i++) {
      var val = keys[i];

      if (remainder - val >= 0) {
        map[matchable[val]] = true;
        remainder = remainder - val;
      }
    }

    return map;
  }
}
