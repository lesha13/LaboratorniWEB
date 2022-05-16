let id = 1;

class Abonent {
  constructor(name, number, address, time) {
    this.name = name;
    this.number = number;
    this.address = address;
    this.time = time;
    this.bill = this.time >= 120 ? this.time * 2 : this.time * 2.5;
    this.id = id++;
  }
}

class StringifyAbonent extends Abonent {
  ToString() {
    return `
            person: ${this.name}
            number: ${this.number}
            time on phone: ${this.time}
            `;
  }
}

class Abonents {
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
    let oldObj = this.abonents.findIndex((elem) => elem.id == someId);
    this.abonents[oldObj] = newObj;
    this.abonents[oldObj].id = someId;
    id--;
  }

  getById(someId) {
    return this.abonents.find((elem) => elem.id == someId);
  }

  getByAddress(someAddress) {
    return [...this.abonents.filter((elem) => elem.address == someAddress)];
  }

  getByTime(someTime) {
    return [...this.abonents.filter((elem) => elem.time >= someTime)];
  }

  getInfo(someId) {
    return this.getById(someId).ToString();
  }

  getAll() {
    return [...this.abonents];
  }
}

class AbonentsWithDOM extends Abonents {
  abonentsToHTML(abonent) {
    return `
      <tr>
      <td>
          ${abonent.id}
      </td>
      <td>
          ${abonent.name}
      </td>
      <td>
          ${abonent.address}
      </td>
      <td>
          ${abonent.time}
      </td>
      <td> 
          <button onclick="DeleteUser(${abonent.id})">
              Delete
          </button>
      </td>
      <td> 
          <button onclick="StartEditUser(${abonent.id})">
              Edit
          </button>
      </td>
      </tr>
    `;
  }

  abonentsTableToHTML() {
    let rows = "";
    for (let user of this.getAll()) {
      rows += this.abonentsToHTML(user);
    }
    return `
        <table>
            <tr>
                <th>
                    Id
                </th>
                <th>
                    Name
                </th>
                <th>
                    Number
                </th>
                <th>
                    Time on phone
                </th>
                <th colspan="2">
                    Actions
                </th>
            </tr>
            ${rows}
        </table>
        <br>
        <button type="button" onclick="ShowAddUser()">
            Add user
        </button>
    `;
  }

  addFormToHTML() {
    return ` 
        <div id="add">
            <form name="addForm" method="post" action="#">
                <h3> Add User </h3>
                <input name="name" placeholder="name"> 
                <input name="number" placeholder="number">
                <input name="address" placeholder="address">
                <input name="time" placeholder="time on phone">
                <button type="button" onclick="AddNewUser()">
                    Save
                </button>
            </form>
        </div>
    `;
  }

  editFormToHTML() {
    return ` 
        <div id="edit">
            <form name="editForm" method="post" action="#">
                <h3> Edit User </h3>
                <input name="id" type="hidden">
                <input name="name" placeholder="name"> 
                <input name="number" placeholder="number">
                <input name="address" placeholder="address">
                <input name="time" placeholder="time on phone">
                <button type="button" onclick="EditUser()">
                    Save
                </button>
            </form>
        </div>
    `;
  }

  toHTML() {
    return (
      all.abonentsTableToHTML() + this.addFormToHTML() + this.editFormToHTML()
    );
  }

  addEventListners() {
    document.addEventListener("deleteUser", (event) => {
      super.delete(event.detail.id);
      document.getElementById("root").innerHTML = this.toHTML();
    });

    document.addEventListener("addUser", (event) => {
      super.addOne(
        new StringifyAbonent(
          event.detail.name,
          event.detail.number,
          event.detail.address,
          event.detail.time
        )
      );
      document.getElementById("root").innerHTML = this.toHTML();
    });

    document.addEventListener("editUser", (event) => {
      super.edit(
        event.detail.id,
        new StringifyAbonent(
          event.detail.name,
          event.detail.number,
          event.detail.address,
          event.detail.time
        )
      );
      document.getElementById("root").innerHTML = this.toHTML();
    });
  }
}

function DeleteUser(id) {
  let deleteUserEvent = new CustomEvent("deleteUser", { detail: { id } });
  document.dispatchEvent(deleteUserEvent);
}

function AddNewUser() {
  const name = document.getElementsByName("name")[0].value;
  const number = document.getElementsByName("number")[0].value;
  const address = document.getElementsByName("address")[0].value;
  const time = document.getElementsByName("time")[0].value;
  let addUserEvent = new CustomEvent("addUser", {
    detail: {
      name,
      number,
      address,
      time,
    },
  });
  document.dispatchEvent(addUserEvent);
}

function ShowAddUser() {
  document.getElementById("add").style.display = "block";
  document.getElementById("edit").style.display = "none";
}

function EditUser() {
  const name = document.getElementsByName("name")[1].value;
  const number = document.getElementsByName("number")[1].value;
  const address = document.getElementsByName("address")[1].value;
  const time = document.getElementsByName("time")[1].value;
  const id = document.getElementsByName("id").value;
  let addUserEvent = new CustomEvent("editUser", {
    detail: {
      id,
      name,
      number,
      address,
      time,
    },
  });
  document.dispatchEvent(addUserEvent);
}

function StartEditUser(id) {
  document.getElementById("edit").style.display = "block";
  document.getElementById("add").style.display = "none";

  let abonent = all.getById(id);

  document.getElementsByName("name")[1].value = abonent.name;
  document.getElementsByName("number")[1].value = abonent.number;
  document.getElementsByName("address")[1].value = abonent.address;
  document.getElementsByName("time")[1].value = abonent.time;
  document.getElementsByName("id").value = id;
}

let all = new AbonentsWithDOM();

let Person1 = new StringifyAbonent("Jack", "216-615-1964", "Ohio", 120);
let Person2 = new StringifyAbonent("Bob", "305-749-3432", "Florida", 60);

all.addOne(Person1);
all.addOne(Person2);

document.getElementById("root").innerHTML = all.toHTML();
all.addEventListners();
