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
console.log(kosuke.walk());
console.log(kosuke.profile());
var superkosuke = new SuperPerson("kosuke", 21, "Japan", "I am a software engineer");
console.log(superkosuke.AboutSuperPerson());
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Taniguchi"; }
    return firstName + " " + lastName;
}
console.log(buildName("Kosuke"));
console.log(buildName("Kosuke", "Suzuki"));
function returnVoid() {
    console.log("return void");
}
returnVoid();
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.method = function () {
        console.log('Hello, world!');
    };
    return Foo;
}());
var obj = new Foo();
var obj2 = obj;
obj.method();
console.log(obj);
obj2.method();
console.log(obj2);
// ジェネリクス
function test(arg) {
    console.log(arg);
    return arg;
}
test("hello world");
test(1000);
var originalStr = "Hello World";
console.log(originalStr);
console.log(typeof originalStr);
