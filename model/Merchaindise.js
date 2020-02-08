class Merchandise {
  constructor({
    id,
    name,
    integral,
    path,
    description,
    create_time,
    exist = 0,
  }) {
    this.id = id;
    this.name = name;
    this.integral = integral;
    this.path = path;
    this.description = description;
    this.create_time = create_time;
    this.exist = exist;
  }
}

module.exports = Merchandise;