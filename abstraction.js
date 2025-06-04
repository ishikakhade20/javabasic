function person(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
    let getDetails_noaccess = function() {
    return (`first name is: ${this.firstname} last name is: ${this.lastname}`);
    }
    this.getDetails = function() {
           return (`first name is: ${this.firstname} last name is: ${this.lastname}`);
    };
}
let person1 = new person("ishika","sanika");
console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.getDetails());
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access);