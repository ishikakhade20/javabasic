function person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}
function person2(first_name='pradeep', last_name='vivek') {
    this.first_name = first_name;
    this.last_name = last_name;
}
let person1 = new person('ishika','sanika');
let person3 = new person('aryan','kedare');
console.log(person1.first_name);
console.log(person1.last_name);
let person4=new person2();
console.log(`${person3.first_name} ${person3.last_name}`);
console.log(`${person4.first_name} ${person4.last_name}`);