const fruits = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];


console.log(fruits)
console.log(fruits.map(fruits => {
    return fruits.replace(' ', 'empty String')
}))

console.log(fruits);

const newFruits = [...fruits];
console.log(newFruits);


const toArray = (...args) => {
    return [args]
}

console.log(toArray(1, 2, 3, 4, 5));

const Student = {
    name: "Saz Cherukat",
    age: 22,
    class: 12,
    section: "Science",

    print() {
        console.log("Name: " + this.name + "\nAge: " + this.age + "\nClass: " + this.class + "\nSection: " + this.section)
    }

}


const dest = ({ name, section }) => {
    console.log(name + "   " + section);
}

dest(Student);