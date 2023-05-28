
const sum = (a, b) => {
    return a + b
}

console.log(sum(10, 15));


const Student = {
    name: "Saz Cherukat",
    age: 22,
    class: 12,
    section: "Science",

    print() {
        console.log("Name: " + this.name + "\nAge: " + this.age + "\nClass: " + this.class + "\nSection: " + this.section)
    }

}

Student.print();