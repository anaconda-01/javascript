class Animal {
  constructor(name, legcount, speak) {
    this.name = name;
    this.legcount = legcount;
    this.speak = speak;
  }
  print() {
    console.log(
      `${this.name} have ${this.legcount} legs nad it speaks ${this.speak}`
    );
  }
  static mytype() {
    console.log("Animal");
  }
}

let dog = new Animal("dog", 2, "bhow bhaow");
let cat = new Animal("cat", 4, "oni chan");
Animal.mytype();
