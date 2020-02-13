class Merchandise {
  constructor({
    id,
    name,
    integral,
    path,
    description,
    create_time,
    status,
    stock,
    exist = 0,
  }) {
    this.id = id;
    this.name = name;
    this.integral = integral;
    this.path = path;
    this.description = description;
    this.create_time = create_time;
    this.status = status;
    this.stock = stock;
    this.exist = exist;
  }
}

module.exports = Merchandise;