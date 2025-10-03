const student = {
    name: 'Bohdan',
    age: 25,
    profession: 'QA Manual',
    address: {
        city: 'Kremenchuk',
        street: 'Ukrainian Renaissance Boulevard',
        house: 14
    },

    get info () {
        return `Student: ${this.name}, Age: ${this.age}`;
    },

    set Age (newAge) {
        if (newAge > 0 && newAge < 100 && newAge === Number(newAge)) {
            this.age = newAge;
        }   else {
            console.log('Invalid age');
        }
    },

    summary() {
        return `Student ${this.name} lives in ${this.address.city} on street ${this.address.street}.`;
    }
};

console.log(student.info);
student.Age = 30;
console.log('Updated Age:', student.age);
student.Age = -5;
console.log(student.summary());
