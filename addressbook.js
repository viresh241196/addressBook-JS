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
  let addressbook = new Addressbook(
    "viresh",
    "rawool",
    "parel",
    "mumbai",
    "maharashtra",
    "400012",
    "123456",
    "abc@abc"
  );
  console.log(addressbook.toString());