class SignIn {
  constructor({
    id,
    year,
    month,
    days,
    user_id,
  }) {
    this.id = id;
    this.year = year;
    this.month = month;
    this.days = days;
    this.user_id = user_id;
  }
}

module.exports = SignIn;