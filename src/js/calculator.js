export default class Age {

    // Age construcotr for earth and expectancy.
    constructor(earth, expectancy) {
      this.earth = earth;
      this.expectancy = expectancy;
    }

    mercury() {
      this.earth = parseInt((this.earth / .24).toFixed());
      return this.earth;
    }
}

