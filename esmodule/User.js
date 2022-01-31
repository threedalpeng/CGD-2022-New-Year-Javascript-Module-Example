export function User() {
  this.computer = {};
  this.setComputer = (computer) => {
    this.computer = computer;
  };
  this.doProgramming = () => {
    this.computer.printComponents();
    if (this.computer.components.length === 0) {
      console.log("Take a rest.");
    } else {
      console.log("PROGRAMMING...");
    }
  };
}
