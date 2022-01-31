const components = require("./components");
const Computer = require("./Computer.js");
const { User } = require("./User.js");

const computer1 = new Computer();
const user1 = new User();

computer1.addComponent(new components.Keyboard());
computer1.addComponent(new components.Mouse());
computer1.addComponent(new components.Monitor());

user1.setComputer(computer1);
user1.doProgramming();