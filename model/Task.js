class Task {
  constructor({
    id,
    title,
    aim,
    type,
    description,
    growth,
    integral,
    coupons = [],
  }) {
    this.id = id;
    this.title = title;
    this.aim = aim;
    this.type = type;
    this.description = description;
    this.growth = growth;
    this.integral = integral;
    this.coupons = coupons;
  }
}

module.exports = Task;