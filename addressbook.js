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
let arraylist = new Array();
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
  arraylist.push(addressbook);
  return arraylist;
}


let addressbook_1 =newAddressBook(
  "Viresh",
  "Rawool",
  "parel",
  "mumbai",
  "maharashtra",
  "400012",
  "91 8655899904",
  "abcxyz@.com"
);
let addressbook_2 =newAddressBook(
    "Sidhu",
    "Rawool",
    "parel",
    "mumbai",
    "maharashtra",
    "400012",
    "91 8655899904",
    "abcxyz@.com"
  );
  console.log(arraylist);
