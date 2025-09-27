const student = {
    name: 'Bohdan',
    age: 25,
    profession: 'QA Manual',
    address: {
        city: 'Kremaenchuck',
        street: 'Ukrainian Renaissance Boulevard',
        house: 14
    },
    courses: ['JavaScript', 'Node.js', 'TypeScript'],

    getStudentInfo: function () {
        console.log(`Student: ${this.name}, Age: ${this.age}`);
        console.log(`City: ${this.address.city}`);
    },

    getStudentCourses: function () {
        console.log('My Courses:');
        this.courses.forEach(course => console.log('-', course));
    }
};

student.getStudentInfo();
student.getStudentCourses();
console.log('Street:', student.address.street);
