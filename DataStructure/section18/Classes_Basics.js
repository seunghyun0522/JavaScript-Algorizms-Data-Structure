class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
  }
}

let firstStudent = new Student("Colt", "Steele", 3);
let secondStudent = new Student("Blue", "Steele", 5);

console.log(firstStudent);
console.log(firstStudent.firstName);
