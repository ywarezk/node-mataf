// Object Oriented Programming - class, instance, inheritance

// Person.myInstance
// Person.getInstance()
class Person {
    // public myName: string = 'John Doe';
    // public age: number;
    static myInstance = null;

    constructor(public myName: string, public age: number) {
        // this.name = myName;
        // this.age = age;
    }

    static getInstance() {

    }

    birthday() {
        // this.age = undefined
        this.age++;
    }

    birthday2 = () => {
        // this is constant and will be equal to class instance
    }
}

const me = new Person('Yariv Katz', 35);

console.log(me.myName);
console.log(me.age); // 35
me.birthday();
console.log(me.age); // 36

const stamObj = {
    hello: me.birthday
}

stamObj['hello']()
console.log(me.age); //  36
// stamObj['age'] === NaN

class Child extends Person {

}
