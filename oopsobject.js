let person = {
    first_name: "ishika",
    last_name: "khade",
    
    getFunction: function(){
        return `The name of the person is ${this.first_name} ${this.last_name}`; 
    },
    phone_number: {
        mobile: '123456789',
        landline: '54321',
    }
}
console.log(person.getFunction());
console.log(person.phone_number.mobile);
console.log(person.phone_number.landline);



