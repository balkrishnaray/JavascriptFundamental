const user = {
  username: "Balkrishna",
  age: 21,
  logined: true,
  getDetails: function () {
    console.log("got the details");
    console.log(`username:  ${this.username}`);
  },
};

console.log(user.username);
console.log(user.getDetails());
console.log(this);

function User(username, loginedtimes, isloggedin) {
  this.username = username;
  this.loginedtimes = loginedtimes;
  this.isloggedin = isloggedin;
  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };
  return this;
}

const Userone = new User("bala", 10, true);
const Usertwo = new User("amish", 11, true);

console.log(Userone.constructor);
console.log(Usertwo);
