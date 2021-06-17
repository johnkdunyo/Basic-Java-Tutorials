//data types
//primitive: strings,num, bool, null, undefined and symbol

const name = 'john';
const age = 23;
const isboy = true;
const x = null;
const height = 6.7;

//string concatenation
const info = `My name is ${name} and i am ${age} years old`;

const todos = [
    {
        id: 1,
        task: 'Take our trash',
        isCompleted: true,
    },
    {
        id: 2,
        task: 'Cook breakfast',
        isCompleted: true,
    },
    {
        id: 3,
        task: 'Dentist appoitment',
        isCompleted : false,
    },
];


const todos_json = JSON.stringify(todos); //this coverts our data to json format

/*
//some loops
for (let todo of todos){
    console.log(todo);
}
*/

//high order array methods: foreach, map, and filter

//foreach, note its function call stufss
todos.forEach(function(todo){
    //console.log(todo.id);
});

 //map functions, returns a array
 const todoText = todos.map(function(todo){
     return todo.task;
 });


 //filter:  
 const todosCompleted = todos.filter(function(todo){
     return todo.isCompleted == true;
 });

 //console.log(todosCompleted);


 //ternary operator

const kofiAge  = 10;
const ifAdult = kofiAge > 18 ? true : false;
//this sets ifAdult to true if kofi age is more than 18


//functions

function AddNums (num1, num2){
    return (num1 + num2);
   
};

//classess

class Person {
    constructor(firstName, lastName, dob, sex)  {
        this.firstName = firstName;
        this.firstName = lastName;
        this.dob = new Date (dob);
        this.sex = sex
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    };

    getDateofBirth(){
        return this.dob
    }
    getAge(){
        const today = new Date();
        return today - this.dob;
    }
}

//initialise
person1 = new Person ('Jon', 'Dexter', '01-30-1999', 'male');


console.log(person1.getAge());