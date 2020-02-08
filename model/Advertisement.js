class Advertisement {
  constructor({
    id,
    path,
    create_time = new Date(),
    outside_link = '',
    status = 0,
    exist = 0,
  }) {
    this.id = id;
    this.path = path;
    this.create_time = create_time;
    this.outside_link = outside_link;
    this.status = status;
    this.exist = exist;
  }
}

module.exports = Advertisement;