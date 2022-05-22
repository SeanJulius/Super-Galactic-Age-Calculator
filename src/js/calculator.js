export default class Age {

    // Age construcotr for earth and expectancy.
    constructor(earth, expectancy) {
      this.earth = earth;
      this.expectancy = expectancy;
    }
      //toFixed() will round to a whole number
    mercury() {
      this.earth = parseInt((this.earth / .24).toFixed());
      return this.earth;
    }

    venus() {
      this.earth = parseInt((this.earth / .62).toFixed());
      return this.earth;
    }
}

