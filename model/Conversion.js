class Conversion {
  constructor({
    create_time,
    serial_number = `GREEN-TRAVEL-${`${Math.random()}`.substring(2)}`,
    user_id,
    merchandise_id,
    quantity,
  }) {
    this.create_time = create_time;
    this.serial_number = serial_number;
    this.user_id = user_id;
    this.merchandise_id = merchandise_id;
    this.quantity = quantity;
  }
}

module.exports = Conversion;