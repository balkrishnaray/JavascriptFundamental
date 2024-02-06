class user {
  constructor(username) {
    this.username = username;
  }

  logme() {
    console.log(`username: ${this.username}`);
  }

  static createID() {
    return `123`;
  }
}

class Teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const reyna = new Teacher("brimstone", "brimy123@gmail.com");
const viper = new user("viper");
reyna.logme();
// console.log(reyna.createID()); cant access static
console.log(user.createID());
