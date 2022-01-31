import ComponentPackage, {
  Keyboard,
  Mouse,
  Monitor,
} from "./components/index.js";
import Computer from "./Computer.js";
import { User } from "./User.js";

const computer1 = new Computer();
const user1 = new User();

computer1.addComponent(new ComponentPackage.keyboard());
computer1.addComponent(new Mouse());
computer1.addComponent(new Monitor());

user1.setComputer(computer1);
user1.doProgramming();
