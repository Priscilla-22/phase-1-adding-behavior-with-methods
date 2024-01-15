// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
  }
  sayName() {
    return `${this.name} says meow!`;
  }
}
const myCat = new Cat('Whiskers');

class Dog {
  constructor(name, sex) {
    this.name = `${name}says woof!`;
  }
  sayName() {
    return `${this.name}says woof!`;
  }
}
const myDog = new Cat('Nora');

class Bird {
  constructor(name, sex) {
    if (sex === 'male') {
      this.speak=`It's me! ${name},the parrot!`;
    } else {
      this.speak=`${name} says squawk!`;
    }
  }
    speakBird() {
        return this.speak
    }
}
const myBird = new Bird('Debby', 'male');
