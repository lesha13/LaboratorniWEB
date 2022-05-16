let id = 0;

class Abonent {
  constructor(person, number, address, time) {
    this.person = person;
    this.number = number;
    this.address = address;
    this.time = time;
    this.bill = this.time >= 120 ? this.time * 2 : this.time * 2.5;
    this.id = ++id;
  }
}

class StringifyAbonent extends Abonent {
  ToString() {
    return `
            person: ${this.person}
            number: ${this.number}
            time on phone: ${this.time}
            `;
  }
}

class AllAbonents {
  constructor() {
    this.abonents = [];
  }

  addOne(elem) {
    this.abonents.push(elem);
  }

  addMany(elems) {
    elems.forEach((elem) => {
      this.abonents.push(elem);
    });
  }

  delete(someId) {
    let index = this.abonents.findIndex((elem) => elem.id == someId);
    if (index == -1) throw "Not found";
    this.abonents.splice(index, 1);
  }

  edit(someId, newObj) {
    this.abonents[someId] = newObj;
  }

  getById(someId) {
    return this.abonents.find((elem) => elem.id == someId);
  }

  getByAddress(someAddress) {
    return this.abonents.filter((elem) => elem.address == someAddress);
  }

  getByTime(someTime) {
    return this.abonents.filter((elem) => elem.time >= someTime);
  }

  getInfo(someId) {
    return this.getById(someId).ToString();
  }
}

let Person1 = new StringifyAbonent("Bob", "262-514-0332", "Wisconsin", 60);
let Person2 = new StringifyAbonent("Jack", "903-392-3009", "Texas", 120);
let Person3 = new StringifyAbonent("Mark", "614-596-3917", "Ohio", 90);
let Person4 = new StringifyAbonent("Kyle", "206-273-0083", "Washington", 121);

let all = new AllAbonents();

all.addOne(Person1);
all.addOne(Person2);
all.addOne(Person3);
all.addOne(Person4);

console.log(all.getInfo(3));
