class vehicle{
    constructor(name,maker,engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return `The name of the bike is ${this.name}.`
    }
}
let bike1 = new vehicle('Ninja H2','Kawasaki','998cc');
let bike2 = new vehicle('TVS','apache','200cc');
let bike3 = new vehicle('Ducati','Panigale','1100cc');
console.log(bike1.name);
console.log(bike2.maker);
console.log(bike3.engine);
console.log(bike3.getDetails());
