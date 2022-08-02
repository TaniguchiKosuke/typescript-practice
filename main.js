var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }
    Person.prototype.walk = function () {
        return "".concat(this.name, " is walking");
    };
    Person.prototype.profile = function () {
        return "My name is ".concat(this.name, ". I am ").concat(this.age, " years old");
    };
    return Person;
}());
var SuperPerson = /** @class */ (function (_super) {
    __extends(SuperPerson, _super);
    function SuperPerson(name, age, nationality, skill) {
        var _this = _super.call(this, name, age, nationality) || this;
        _this.skill = skill;
        return _this;
    }
    SuperPerson.prototype.AboutSuperPerson = function () {
        return "".concat(this.name, " && ").concat(this.nationality, " && ").concat(this.skill);
    };
    return SuperPerson;
}(Person));
var kosuke = new Person("kosuke", 21, "Japan");
var superkosuke = new SuperPerson("kosuke", 21, "Japan", "I am a software engineer");
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Taniguchi"; }
    return firstName + " " + lastName;
}
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.method = function () {
    };
    return Foo;
}());
var obj = new Foo();
var obj2 = obj;
obj.method();
obj2.method();
// ジェネリクス
function test(arg) {
    return arg;
}
test("hello world");
test(1000);
var originalStr = "Hello World";
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());
var user = {
    username: "kosuke",
    password: "aaa"
};
var userObj = new User("kosuke", "aaa");
// clean architectureぽく
// entity
var Car = /** @class */ (function () {
    function Car(id, carName, speed) {
        this.id = id;
        this.carName = carName;
        this.speed = speed;
    }
    Car.prototype.run = function () {
        console.log("".concat(this.carName, " is running at ").concat(this.speed, " km/h"));
    };
    return Car;
}());
// Handler
var CarHandler = /** @class */ (function () {
    function CarHandler(carUsecase) {
        this.carUsecase = carUsecase;
    }
    CarHandler.prototype.createCar = function (id, carName, speed) {
        var createdCar = this.carUsecase.createCar(id, carName, speed);
        return createdCar;
    };
    return CarHandler;
}());
// Usecase
var CarUsecase = /** @class */ (function () {
    function CarUsecase(carRepository) {
        this.carRepository = carRepository;
    }
    CarUsecase.prototype.createCar = function (id, carName, speed) {
        var createdCar = this.carRepository.createCar(id, carName, speed);
        return createdCar;
    };
    return CarUsecase;
}());
// Repository
var CarRepository = /** @class */ (function () {
    function CarRepository(dbConn) {
        this.dbConnection = dbConn;
    }
    CarRepository.prototype.createCar = function (id, carName, speed) {
        var newCar = new Car(id, carName, speed);
        this.dbConnection.database.push(newCar);
        return newCar;
    };
    return CarRepository;
}());
var DBConnection = /** @class */ (function () {
    function DBConnection(iCar) {
        this.database = iCar;
    }
    return DBConnection;
}());
// Dependency Injection
var database = [];
var dbConn = new DBConnection(database);
var carRepository = new CarRepository(dbConn);
var carUsecase = new CarUsecase(carRepository);
var carHandler = new CarHandler(carUsecase);
carHandler.createCar("0", "toyota", "200");
carHandler.createCar("1", "nissan", "300");
carHandler.createCar("2", "mazda", "100");
console.log(database);
for (var _i = 0, database_1 = database; _i < database_1.length; _i++) {
    var car = database_1[_i];
    car.run();
}
