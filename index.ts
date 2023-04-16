// C:\WINDOWS\System32\cmd.exe

interface IHuman {
  legs: number;
  hands: number;
}

interface IUser extends IHuman {
  name: string;
  surname: string;
  age: number;
}

interface ICustomer {
  bill: number;
  user: IUser;
}

const obj: IUser = {
  name: "Max",
  surname: "Maxov",
  age: 31,
  legs: 4,
  hands: 4,
};

const obj2: IUser = {
  name: "Max",
  surname: "Maxov",
  age: 31,
  legs: 4,
  hands: 4,
};

interface IUserClass {
  name: string;
  surname: string;
  age: number;
}

class User {
  name: string;
  surname: string;
  age: number;
  constructor(name: string, surname: string, age?: number) {
    this.name = name;
    this.surname = surname;
    this.age = age | 18;
  }
}

const first = new User("max", "maxov");

interface IPerson {
  name: string;
  surname: string;
}
interface IPersonAdditInfo {
  birthday: string;
  age: number;
}

interface IFullUserInfo extends IPersonAdditInfo, IPerson {
  adress: string;
}

const personFullInfo: IFullUserInfo = {
  name: "max",
  surname: "maxov",
  birthday: "10-08-91",
  age: 31,
  adress: "Msc",
};

console.log(personFullInfo);
