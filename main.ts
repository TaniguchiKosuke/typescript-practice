class Person {
    public name: string
    private age: number
    protected nationality: string

    constructor(name: string, age: number, nationality: string) {
        this.name = name
        this.age = age
        this.nationality = nationality
    }

    walk(): string {
        return `${this.name} is walking`
    }

    profile(): string {
        return `My name is ${this.name}. I am ${this.age} years old`
    }
}

class SuperPerson extends Person {
    skill: string
    constructor(name: string, age: number, nationality: string, skill: string) {
        super(name, age, nationality)
        this.skill = skill
    }

    AboutSuperPerson() {
        return `${this.name} && ${this.nationality} && ${this.skill}`
    }
}

let kosuke = new Person("kosuke", 21, "Japan")
console.log(kosuke.walk())
console.log(kosuke.profile())
let superkosuke = new SuperPerson("kosuke", 21, "Japan", "I am a software engineer")
console.log(superkosuke.AboutSuperPerson())


function buildName(firstName: string, lastName="Taniguchi"): string {
    return firstName + " " + lastName
}

console.log(buildName("Kosuke"))
console.log(buildName("Kosuke", "Suzuki"))

function returnVoid(): void{
    console.log("return void")
}

returnVoid()

interface MyFoo {
    method: ()=> void
  }
  
  class Foo {
    method(): void {
      console.log('Hello, world!')
    }
  }
  
  const obj: MyFoo = new Foo();
  const obj2: Foo = obj;
  obj.method()
  console.log(obj)
  obj2.method()
  console.log(obj2)

// ジェネリクス
function test<T>(arg: T): T {
    console.log(arg)
    return arg
}

test<string>("hello world")
test<number>(1000)

type MyOriginalType = string
let originalStr: MyOriginalType = "Hello World"
console.log(originalStr)
console.log(typeof originalStr)