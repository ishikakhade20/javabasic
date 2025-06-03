const coder = {
    isStudying:false,
    printIntroduction:function(){
        console.log(`My name is ${this.name}. Am  I studying?: ${this.isStudying}.`);
        
    }
}
const me = Object.create(coder);//for instance object 
me.name = 'ishika';
me.isStudying = true;
me.printIntroduction();
