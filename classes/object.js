function additionof5(num) {
  return num + 10;
}

additionof5.power = 5;
console.log(additionof5(10));
console.log(additionof5.power);
console.log(additionof5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}
createUser.prototype.price = function () {
  this.score++;
};
createUser.prototype.print = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 20);
const tea = new createUser("tea", 250);

chai.print();
chai.price();
chai.print();
tea.print();
tea.price();
tea.print();
