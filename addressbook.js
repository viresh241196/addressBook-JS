class Addressbook {
  constructor(firstName, lastName, address, city, state, zip, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.email = email;
  }

  //getter and setter method
  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    let nameRegx = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegx.test(firstName)) this._firstName = firstName;
    else throw "invalid firstName";
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    let nameRegx = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegx.test(lastName)) this._lastName = lastName;
    else throw "invalid lastName";
  }
  get address() {
    return this._address;
  }
  set address(address) {
    let nameRegx = RegExp("^[A-Za-z]{4,}$");
    if (nameRegx.test(address)) this._address = address;
    else throw "invalid address";
  }
  get city() {
    return this._city;
  }
  set city(city) {
    let nameRegx = RegExp("^[A-Za-z]{4,}$");
    if (nameRegx.test(city)) this._city = city;
    else throw "invalid city";
  }
  get state() {
    return this._state;
  }
  set state(state) {
    let nameRegx = RegExp("^[A-Za-z]{4,}$");
    if (nameRegx.test(state)) this._state = state;
    else throw "invalid state";
  }
  get zip() {
    return this._zip;
  }
  set zip(zip) {
    let nameRegx = RegExp("^[0-9]{6}$");
    if (nameRegx.test(zip)) this._zip = zip;
    else throw "invalid zip";
  }
  get phone() {
    return this._phone;
  }
  set phone(phone) {
    let nameRegex = RegExp("^[0-9]{2}[: :][0-9]{10}");
    if (nameRegex.test(phone)) this._phone = phone;
    else throw "Incorrect Phone Num..!!";
  }

  get email() {
    return this._email;
  }
  set email(email) {
    let nameRegex = RegExp(
      "^abc[a-zA-Z0-9.+-]*@[a-z0-9]*[.][a-z]{2,5}[.,a-z]*$"
    );
    if (nameRegex.test(email)) this._email = email;
    else throw "Incorrect Email Address..!";
  }

  toString() {
    return (
      "firstName=" +
      this.firstName +
      ",lastName= " +
      this.lastName +
      ",address=" +
      this.address +
      ",city=" +
      this.city +
      ",state=" +
      this.state +
      ",zip=" +
      this.zip +
      ",phone=" +
      this.phone +
      ",email=" +
      this.email
    );
  }
}
let addressbookList = new Array();
const prompt = require("prompt-sync")();
function newAddressBook(
  firstName,
  lastName,
  address,
  city,
  state,
  zip,
  phone,
  email
) {
  let exist = false;
  addressbookList.forEach((element) => {
    if (element.firstName == firstName) {
      exist = true;
      console.log("name already exit");
    }
  });
  if (exist === false) {
    let addressbook = new Addressbook(
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      phone,
      email
    );
    addressbookList.push(addressbook);
  }
  return addressbookList;
}

function takeEntryDetails() {
  let firstName = prompt("enter the first name: ");
  let lastName = prompt("enter the last name: ");
  let address = prompt("enter the address: ");
  let city = prompt("enter the city: ");
  let state = prompt("enter the state: ");
  let zip = prompt("enter the zip: ");
  let phone = prompt("enter the phone: ");
  let email = prompt("enter the email: ");
  newAddressBook(firstName, lastName, address, city, state, zip, phone, email);
}

function displayList() {
  console.log(addressbookList);
}

function deleteContact() {
  let name = prompt("enter the name to delete: ");
  addressbookList.forEach((element) => {
    if (element.firstName == name) {
      addressbookList.pop(element);
    }
  });
}

function sizeOfAddressbook() {
  console.log("the count of entries are : " + addressbookList.length);
}

function editContact() {
  let name = prompt("enter the name: ");
  addressbookList.forEach((element) => {
    if (element.firstName === name) {
      let choice = parseInt(
        prompt(
          "enter the choice to edit 1.firstname 2.lastname 3.address 4.city 5.state 6.zip 7.phone 8.email"
        )
      );
      let value = prompt("enter the value: ");
      switch (choice) {
        case 1:
          element.firstName = value;
          break;
        case 2:
          element.lastName = value;
          break;
        case 3:
          element.address = value;
          break;
        case 4:
          element.city = value;
          break;
        case 5:
          element.state = value;
          break;
        case 6:
          element.zip = value;
          break;
        case 7:
          element.phone = value;
          break;
        case 8:
          element.email = value;
          break;
        default:
          console.log("invalid");
      }
    }
  });
}

let contact_1 = newAddressBook(
  "Viresh",
  "Rawool",
  "parel",
  "mumbai",
  "maharashtra",
  "400012",
  "91 8655899904",
  "abcxyz@.com"
);
let contact_2 = newAddressBook(
  "Sidhu",
  "Rawool",
  "parel",
  "mumbai",
  "maharashtra",
  "400012",
  "91 8655899904",
  "abcxyz@.com"
);
let loop = true;
while (loop) {
  let choice = parseInt(
    prompt("1.display 2.edit 3.delete 4.count 5.add 0.exit : ")
  );
  switch (choice) {
    case 1:
      displayList();
      break;
    case 2:
      editContact();
      break;
    case 3:
      deleteContact();
      break;
    case 4:
      sizeOfAddressbook();
      break;
    case 5:
      takeEntryDetails();
      break;
    case 0:
      loop = false;
    default:
      console.log("thank you");
  }
}
