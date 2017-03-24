const myObj = {
  name: 'Eddie Wang',
  age: 12,
  printName: function () {
    console.log(`${this.name} is ${this.age} years old`)
  }
}

const child = Object.assign({}, myObj, {name: 'Andi Geng'})

child.printName()
