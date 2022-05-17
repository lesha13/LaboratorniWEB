let id = 0;

class Film {
  constructor(name, director, producer, actors, trailer, year, money) {
    this.id = id++;
    this.name = name;
    this.director = director;
    this.producer = producer;
    this.actors = actors;
    this.trailer = trailer;
    this.year = year;
    this.money = money;
  }
}

class StringifyFilm extends Film {
  ToString() {
    return `
            film: ${this.name}
            director: ${this.director}
            producer: ${this.producer}
            year: ${this.year}
            `;
  }
}

class Films {
  constructor() {
    this.films = [];
  }

  add(film) {
    this.films.push(film);
  }

  delete(id) {
    let index = this.films.findIndex((elem) => elem.id == id);
    if (index == -1) throw "Not found";
    this.films.splice(index, 1);
  }

  edit(id, newObj) {
    let oldObj = this.films.findIndex((elem) => elem.id == id);
    this.films[oldObj] = newObj;
    this.films[oldObj].id = id;
    id--;
  }

  deleteByName(name) {
    let index = this.films.findIndex((elem) => elem.name == name);
    if (index == -1) throw "Not found";
    this.films.splice(index, 1);
  }

  getById(id) {
    return this.films.find((elem) => elem.id == id);
  }

  getAll() {
    return [...this.films];
  }
}

class FilmsHTML extends Films {
  filmsToHTML(film) {
    return `
      <tr>
        <td>
            ${film.id}
        </td>
        <td>
            ${film.name}
        </td>
        <td>
            ${film.director}
        </td>
        <td>
            ${film.producer}
        </td>
        <td>
            ${film.year}
        </td>
        <td> 
            <button onclick="DeleteUser(${film.id})">
                Delete
            </button>
        </td>
        <td> 
            <button onclick="StartEditUser(${film.id})">
                Edit
            </button>
        </td>
      </tr>
    `;
  }

  filmsTableToHTMl() {
    let rows = "";
    for (let film of this.getAll()) {
      rows += this.filmsToHTML(film);
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
            Director
          </th>
          <th>
            Producer
          </th>
          <th>
           Year
          </th>
          <th colspan="2">
           Actions
          </th>
        </tr>
          ${rows}
      </table>
        <br>
        <input name="delete" placeholder="name">
        <button type="button" onclick="DeleteByName()">
          Delete film
        </button>
        <br>
        <br>
        <button type="button" onclick="ShowAddUser()">
            Add film
        </button>
    `;
  }

  addFormToHTML() {
    return ` 
      <div id="add">
        <form name="addForm" method="post" action="#">
          <h3> Add User </h3>
            <input name="name" placeholder="name"> 
            <input name="director" placeholder="director">
            <input name="producer" placeholder="producer">
            <input name="actors" placeholder="actors">
            <input name="trailer" placeholder="trailer">
            <input name="year" placeholder="year">
            <input name="money" placeholder="money">

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
            <input name="director" placeholder="director">
            <input name="producer" placeholder="producer">
            <input name="actors" placeholder="actors">
            <input name="trailer" placeholder="trailer">
            <input name="year" placeholder="year">
            <input name="money" placeholder="money">

            <button type="button" onclick="EditUser()">
              Save
            </button>
        </form>
      </div>
    `;
  }

  toHTML() {
    return (
      this.filmsTableToHTMl() + this.addFormToHTML() + this.editFormToHTML()
    );
  }

  addEventListners() {
    document.addEventListener("deleteUser", (event) => {
      let deleted = this.getById(event.detail.id);
      super.delete(event.detail.id);
      document.getElementById("root").innerHTML = this.toHTML();
      document.getElementById("deleted").innerHTML = `
      <br>
      <p>name: ${deleted.name}</p>
      <p>director: ${deleted.director}</p>
      <p>producer: ${deleted.producer}</p>
      <p>actors: ${deleted.actors}</p>
      <p>trailer: ${deleted.trailer}</p>
      <p>year: ${deleted.year}</p>
      <p>money: ${deleted.money}</p>
      `;
    });

    document.addEventListener("deleteUserByName", (event) => {
      let deleted = this.getById(
        this.films.find(
          (elem) => (elem.name = document.getElementsByName("delete").value)
        )
      );
      super.deleteByName(document.getElementsByName("delete").value);
      document.getElementById("root").innerHTML = this.toHTML();
      document.getElementById("deleted").innerHTML = `
      <br>
      <p>name: ${deleted.name}</p>
      <p>director: ${deleted.director}</p>
      <p>producer: ${deleted.producer}</p>
      <p>actors: ${deleted.actors}</p>
      <p>trailer: ${deleted.trailer}</p>
      <p>year: ${deleted.year}</p>
      <p>money: ${deleted.money}</p>
      `;
    });

    document.addEventListener("addUser", (event) => {
      super.add(
        new StringifyFilm(
          event.detail.name,
          event.detail.director,
          event.detail.producer,
          event.detail.actors,
          event.detail.trailer,
          event.detail.year,
          event.detail.money
        )
      );
      document.getElementById("root").innerHTML = this.toHTML();
    });

    document.addEventListener("editUser", (event) => {
      super.edit(
        event.detail.id,
        new StringifyFilm(
          event.detail.name,
          event.detail.director,
          event.detail.producer,
          event.detail.actors,
          event.detail.trailer,
          event.detail.year,
          event.detail.money
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

function DeleteByName() {
  let deleteUserByNameEvent = new CustomEvent("deleteUserByName", {
    detail: {},
  });
  document.dispatchEvent(deleteUserByNameEvent);
}

function ShowAddUser() {
  document.getElementById("add").style.display = "block";
  document.getElementById("edit").style.display = "none";
}

function AddNewUser() {
  const name = document.getElementsByName("name")[0].value;
  const director = document.getElementsByName("director")[0].value;
  const producer = document.getElementsByName("producer")[0].value;
  const actors = document.getElementsByName("actors")[0].value;
  const trailer = document.getElementsByName("trailer")[0].value;
  const year = document.getElementsByName("year")[0].value;
  const money = document.getElementsByName("money")[0].value;
  let addUserEvent = new CustomEvent("addUser", {
    detail: {
      name,
      director,
      producer,
      actors,
      trailer,
      year,
      money,
    },
  });
  document.dispatchEvent(addUserEvent);
}

function StartEditUser(id) {
  document.getElementById("edit").style.display = "block";
  document.getElementById("add").style.display = "none";

  let film = films.getById(id);

  document.getElementsByName("name")[1].value = film.name;
  document.getElementsByName("director")[1].value = film.director;
  document.getElementsByName("producer")[1].value = film.producer;
  document.getElementsByName("actors")[1].value = film.actors;
  document.getElementsByName("trailer")[1].value = film.trailer;
  document.getElementsByName("year")[1].value = film.year;
  document.getElementsByName("money")[1].value = film.money;
  document.getElementsByName("id").value = id;
}

function EditUser() {
  const name = document.getElementsByName("name")[1].value;
  const director = document.getElementsByName("director")[1].value;
  const producer = document.getElementsByName("producer")[1].value;
  const actors = document.getElementsByName("actors")[1].value;
  const trailer = document.getElementsByName("trailer")[1].value;
  const year = document.getElementsByName("year")[1].value;
  const money = document.getElementsByName("money")[1].value;
  const id = document.getElementsByName("id").value;

  let addUserEvent = new CustomEvent("editUser", {
    detail: {
      id,
      name,
      director,
      producer,
      actors,
      trailer,
      year,
      money,
    },
  });
  document.dispatchEvent(addUserEvent);
}

let film1 = new StringifyFilm(
  "Titanic",
  "Joe",
  "Bob",
  ["1", "2", "3"],
  "https://en.wikipedia.org/wiki/Titanic_(1997_film)",
  1997,
  1_000_000
);
let film2 = new StringifyFilm(
  "Avatar",
  "Jack",
  "Daniel",
  ["4", "5", "6"],
  "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
  2009,
  1_000_000_000
);

let films = new FilmsHTML();
films.add(film1);
films.add(film2);

document.getElementById("root").innerHTML = films.toHTML();
films.addEventListners();
