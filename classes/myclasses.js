class user {
  constructor(username, gmail, password) {
    this.username = username;
    this.gmail = gmail;
    this.password = password;
  }

  encryptpassword() {
    return `${this.password}abc`;
  }

  changename() {
    return `${this.username.toUpperCase()}`;
  }
}

const balkrishna = new user("balkrishna", "balkrishhna11@gmail.com", 123);
console.log(balkrishna);
console.log(balkrishna.encryptpassword());
console.log(balkrishna.changename());
