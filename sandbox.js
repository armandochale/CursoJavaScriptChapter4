/*greetings();
greetings();
greetings();*/

/*welcome();
welcome();
welcome();*/

//function declaration
/*function greetings(){
    console.log('Hello world!');
}

//function expression
const welcome = function(){
    console.log('How are you?');
};*/

//arguments & parameters

/*const welcome = function(name = 'Jhoedy', time = 'day'){
    console.log(`Good ${time} ${name}`);
};
welcome();
welcome('Sheyla','morning');*/

// regular function
/*const calculate = function(radius){
    return 3.14 * radius**2;
}*/

// arrow function
/*const calculate = radius => 3.14 * radius**2;

const area = calculate(5);
console.log('area is: ', area);*/

/*const greetings = function(){
    return 'Hello world!';
};

const greetings = () => 'Hello world!';
const example = greetings();
console.log(example);*/

/*const bill = function(price, tax){
    let total = 0;
    for(let i = 0; i < price.length; i++){
        total += price[i] + price[i] * tax;
    }
    return total;
}*/

/*const bill = (price, tax) => {
    let total = 0;
    for(let i = 0; i < price.length; i++){
        total += price[i] + price[i] * tax;
    }
    return total;
};

console.log(bill([10,15,30], 0.2));*/

/*const name = 'Sheyla';

// functions

const greetings = () => 'hello';

let one = greetings();
console.log(one);

//methods

let two = name.toUpperCase();
console.log(two);*/

// callbacks & foreach

/*const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    // do something
    console.log(value);
});*/

/*let people = ['Artemio', 'Sheyla', 'Jhoedy', 'Adrian', 'Armando'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);*/

// get a reference to the 'u1'
const u1 = document.querySelector('.people');

const people = ['Artemio', 'Sheyla', 'Jhoedy', 'Adrian', 'Armando'];

let html = ``;

people.forEach(person =>{
    //create html template
    html += `<li style="color: pink">${person}</li>`;
});

console.log(html);
u1.innerHTML = html;