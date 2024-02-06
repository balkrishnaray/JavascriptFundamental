function createUser(username, email, password) {
  giveName.call(this, username);
  this.email = email;
  this.password = password;
}

function giveName(username) {
  this.username = username;
}

const valorant = new createUser("killer", "natsu@gmail.com", 1234);

console.log(valorant);
console.log(new giveName("balkrishna"));
