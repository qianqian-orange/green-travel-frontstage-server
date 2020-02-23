class PublicWelfare {
  constructor({
    id,
    user_id,
    title,
    description,
    reason = '',
    integral,
    create_time = new Date(),
    end_time,
    path,
    destory = 0,
    exist = 0,
    status = 0,
  }) {
    this.id = id;
    this.user_id = user_id;
    this.title = title;
    this.description = description;
    this.reason = reason;
    this.integral = integral;
    this.create_time = create_time;
    this.end_time = end_time;
    this.path = path;
    this.destory = destory;
    this.exist = exist;
    this.status = status;
  }
}

module.exports = PublicWelfare;