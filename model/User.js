class User {
  constructor({
    id,
    name,
    integral,
    lv,
    growth,
    bicycle_mileage,
    bicycle_count,
    subway_count,
    bus_count,
    rail_count,
    tasks = [],
  }) {
    this.id = id;
    this.name = name;
    this.integral = integral;
    this.lv = lv;
    this.growth = growth;
    this.bicycle_mileage = bicycle_mileage;
    this.bicycle_count = bicycle_count;
    this.subway_count = subway_count;
    this.bus_count = bus_count;
    this.rail_count = rail_count;
    this.tasks = tasks;
  }
}

module.exports = User;