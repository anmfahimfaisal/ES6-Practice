class Parent{

    constructor(){
        this.fatherName = "Scoot"
    }
}


class Child extends Parent{
    constructor(name){

        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Red");
const baby2 = new Child("Thomas");
console.log(baby.getFullName());
console.log(baby2);