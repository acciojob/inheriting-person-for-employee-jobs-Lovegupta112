// complete this js code
function Person(name, age) {
    this.name=name;
    this.age=age;

}
Person.prototype.greet=function(){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}
// const person1=new Person('rahul',20);
// person1.greet();

function Employee(name, age, jobTitle) {
    this.name=name;
    this.age=age;
    this.jobTitle=jobTitle;
}
Employee.prototype.__proto__=Object.create(Person.prototype);

Employee.prototype.jobGreet=function(){

console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
}

const employee1=new Employee('ramesh',23,'sde');
employee1.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
