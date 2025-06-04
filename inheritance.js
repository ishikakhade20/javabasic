class user {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    toString(){
        return `Name of person: ${this.email} and password: ${this.password}`;
    }
}
class empolyee extends user {
    constructor(email, password, id){
        super(email, password);
        this.id = id;
    }
}
let empolyee1 = new empolyee('ishika',20);
console.log(empolyee1); // Name of person: ishika
