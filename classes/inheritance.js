class user {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addcourse() {
    console.log(`a new course was added by ${this.username}`);
  }
}

const balkrishna = new Teacher("killer", "balkrishna22@gmail.com", 123);
console.log(balkrishna.logMe());
const player = new user("natsu");
console.log(player.logMe());
