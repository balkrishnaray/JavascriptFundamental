function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
Object.defineProperty(this, "email", {
  get: function () {
    return this._email.toUpperCase();
  },
  set: function (value) {
    this._email = value;
  },
});
const chai = new user("bala", "bala@gmail.com", 122);
console.log(chai.email);
