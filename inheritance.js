// parent class
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getInformation() {
        console.log(`This person is ${this.name}`);
    }
    getAge(){
        console.log(`This Person has ${this.age}`);
    }
}

//child class
class Professor extends Person {
    constructor(name,teaches,age) {
        super(name);
        this.teaches = teaches;
        this.age = age;
    }

    introductSelf() {
        console.log(
        `My Name is ${this.name}, and i will be your ${this.teaches} Professor, ${this.age} year`
        );
    }   
}

//const person = new Person("Cinta");
//console.log[person.getInformation()];


const ema = new Professor("Ema","Math", 22);
console.log[ema.getInformation()];
console.log[ema.introductSelf()];
console.log[ema.getAge()];

