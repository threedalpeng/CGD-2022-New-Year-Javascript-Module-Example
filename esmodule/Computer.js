export default function Computer() {
  this.components = [];
  this.addComponent = (component) => {
    this.components.push(component);
  };
  this.printComponents = () => {
    if (this.components.length === 0) {
      console.log("Components are unavailable.");
    } else {
      this.components.forEach((component) => {
        console.log(component);
      });
    }
  };
}
