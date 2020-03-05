class Coupon {
  constructor({
    id,
    day,
    integral,
    description,
  }) {
    this.id = id;
    this.day = day;
    this.integral = integral;
    this.description = description;
  }
}

module.exports = Coupon;