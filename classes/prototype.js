const heroesPower = {
  name: "thor",
  weapon: "hammer",
  getDetails: function () {
    console.log("I am thor");
  },
};

let myheroes = ["thor", "spiderman"];

Object.prototype.bala = function () {
  console.log("bala is a hero");
};

myheroes.bala();
heroesPower.bala();

//prototype

const User = {
  username: "bala",
  email: "bala@gmail.com",
};

const Teacher = {
  course: "science",
};

const teacherAssistant = {
  fulltime: true,
  task: "assignment question",
  __proto__: Teacher, // access teacher properties
};

Teacher.__proto__ = User; // teacher can access user properties.

//modern syntax
Object.setPrototypeOf(teacherAssistant, Teacher); // to   from

let anothername = "Balkrishnaray     ";
String.prototype.truelength = function () {
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};
anothername.truelength();
"bala".truelength();
