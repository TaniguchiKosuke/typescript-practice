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
let superkosuke = new SuperPerson("kosuke", 21, "Japan", "I am a software engineer")


function buildName(firstName: string, lastName="Taniguchi"): string {
    return firstName + " " + lastName
}

interface MyFoo {
    method: ()=> void
  }
  
  class Foo {
    method(): void {
    }
  }
  
  const obj: MyFoo = new Foo();
  const obj2: Foo = obj;
  obj.method()
  obj2.method()

// ジェネリクス
function test<T>(arg: T): T {
    return arg
}

test<string>("hello world")
test<number>(1000)

type MyOriginalType = string
let originalStr: MyOriginalType = "Hello World"

interface UserI {
    username: string
    password: string
}

class User {
    username: string
    password: string
    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }
}

const user: UserI = {
    username: "kosuke",
    password: "aaa"
}

const userObj: UserI = new User("kosuke", "aaa")



// clean architectureぽく

// entity
class Car {
    public id: string
    public carName: string
    public speed: string
    constructor(id: string, carName: string, speed: string) {
        this.id = id
        this.carName = carName
        this.speed = speed
    }

    public run() {
        console.log(`${this.carName} is running at ${this.speed} km/h`)
    }
}

// Handler
class CarHandler {
    private carUsecase: CarUsecase
    constructor(carUsecase: CarUsecase) {
        this.carUsecase = carUsecase
    }

    public createCar(id: string, carName: string, speed: string): Car {
        const createdCar: Car = this.carUsecase.createCar(id, carName, speed)
        return createdCar
    }
}

// Usecase
class CarUsecase {
    carRepository: CarRepository
    constructor(carRepository: CarRepository) {
        this.carRepository = carRepository
    }

    public createCar(id: string, carName: string, speed: string): Car {
        const createdCar = this.carRepository.createCar(id, carName, speed)
        return createdCar
    }
}

// Repository
class CarRepository {
    private dbConnection: DBConnection
    constructor(dbConn: DBConnection) {
        this.dbConnection = dbConn
    }
    public createCar(id: string, carName: string, speed: string): Car {
        const newCar = new Car(id, carName, speed)
        this.dbConnection.database.push(
            {
                id: newCar.id,
                carName: newCar.carName,
                speed: newCar.speed
            }
        )
        return newCar
    }
}

interface ICar {
    id: string
    carName: string
    speed: string
}

class DBConnection {
    public database: ICar[]
    constructor(iCar: ICar[]) {
        this.database = iCar
    }
}

// Dependency Injection
const database: ICar[] = []
const dbConn = new DBConnection(database)
const carRepository = new CarRepository(dbConn)
const carUsecase = new CarUsecase(carRepository)
const carHandler = new CarHandler(carUsecase)

console.log(carHandler.createCar("0", "toyota", "200"))
console.log(database)