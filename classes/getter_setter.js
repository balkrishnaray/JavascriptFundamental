class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  //getter,setter and variable name should be same
//constructor and getter name should be diff
  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
}

const bala = new user("Bala", "killer@112", 123);
console.log(bala.email);
