var obj = {
    name: "Max",
    surname: "Maxov",
    age: 31,
    legs: 4,
    hands: 4,
};
var obj2 = {
    name: "Max",
    surname: "Maxov",
    age: 31,
    legs: 4,
    hands: 4,
};
var User = /** @class */ (function () {
    function User(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age | 18;
    }
    return User;
}());
var first = new User("max", "maxov");
var personFullInfo = {
    name: "max",
    surname: "maxov",
    birthday: "10-08-91",
    age: 31,
    adress: "Msc",
};
console.log(personFullInfo);
