class User {
    constructor(username, first_name, last_name, password_hash) {
      this.username = username;
      this.first_name = first_name;
      this.last_name = last_name;
      this.password_hash = password_hash;
    }
}
module.exports = User;