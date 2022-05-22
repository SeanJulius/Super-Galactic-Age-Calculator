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

    mars() {
      this.earth =parseInt((this.earth / 1.88).toFixed());
      return this.earth;
    }

    jupiter() {
      this.earth =parseInt((this.earth / 11.6).toFixed());
      return this.earth;
    }  
    
    mercuryExpectancy() {
      if (this.expectancy >= this.earth) {
        return parseInt((this.expectancy - this.earth) / .24);
      } else {
        return parseInt((this.earth - this.expectancy) / .24);
      }
    }
}

