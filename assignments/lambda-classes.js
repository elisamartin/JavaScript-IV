// CODE here for your Lambda Classes

class Person {
	constructor(attr) {
		this.name = attr.name;
		this.age = attr.age;
		this.location = attr.location;
		this.gender = attr.genter;
	}
	speak() {
		return `Hello, my name is ${this.name}, I am from ${this.location}`;
	}
}

class Instructor extends Person {
	constructor(attr) {
		super(attr);
		this.specialty = attr.specialty;
		this.favLanguage = attr.favLanguage;
		this.catchPhrase = attr.catchPhrase;
	}
	demo(subject) {
		return `Today we are learning about ${subject}`;
	}
	grade(student, subject) {
		`${student} receives a perfect score on ${subject}`;
	}
	gradeRandom(Student) {
		let randomGrade = Math.floor(Math.random() * 100) + 1;
		Student.grade = randomGrade;
		if (Student.grade > 100) {
			Student.grade = 100;
		}
		if (Student.grade < 0) {
			Student.grade = 0;
		}

		return `${Student.name} grade was changed by ${Instructor.name} to ${Student.grade}`;
	}
}

class Student extends Person {
	constructor(attr) {
		super(attr);
		this.previousBackground = attr.previousBackground;
		this.className = attr.className;
		this.favSubjects = attr.favSubjects;
		this.grade = attr.grade;
	}
	listsSubjects() {
		let arr = this.favSubjects;
		arr.forEach(function(element) {
			console.log(element);
		});
	}
	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}`;
	}
	sprintChallenge(subject) {
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
}

class ProjectManagers extends Instructor {
	constructor(attr) {
		super(attr);
		this.gradClassName = attr.gradClassName;
		this.favInstructor = attr.favInstructor;
	}
	standUp(slackChannel) {
		return `${this.name} announces to ${slackChannel}, @channel standy times!`;
	}
	debugsCode(Student, subject) {
		return `${this.name} debugs ${Student.name}'s code on ${subject}`;
	}
}

const pete = new Student({
	name: 'Pete',
	age: 20,
	location: 'Portland',
	gender: 'male',
	previousBackground: 'collegue',
	className: 'CS10',
	favSubjects: [ 'Html', 'CSS' ],
	grade: 75
});

const adam = new Student({
	name: 'Adam',
	age: 30,
	location: 'Ada',
	gender: 'male',
	previousBackground: 'Construction work',
	className: 'CS20',
	favSubjects: [ 'Javascript', 'CSS' ],
	grade: 80
});

const john = new Instructor({
	name: 'John',
	age: 35,
	location: 'Jupiter',
	gender: 'male',
	specialty: 'CSS',
	favLanguage: 'Front-end',
	catchPhrase: 'Ohh, you are awful...but I like you!'
});

const olivia = new Instructor({
	name: 'Olivia',
	age: 35,
	location: 'Ozark',
	gender: 'female',
	specialty: 'Back-end',
	favLanguage: 'Javascript',
	catchPhrase: 'Computer says no.'
});

const lily = new ProjectManagers({
	name: 'Lily',
	age: 30,
	location: 'La Fayette',
	gender: 'female',
	specialty: 'Javascript',
	favLanguage: 'Javascript',
	catchPhrase: 'Go ahead, make my day',
	gradClassName: 'CS1',
	favInstructor: 'James'
});

const pat = new ProjectManagers({
	name: 'Pat',
	age: 40,
	location: 'Pasco',
	gender: 'female',
	specialty: 'Java',
	favLanguage: 'Python',
	catchPhrase: 'I have a bad feeling about this',
	gradClassName: 'CS3',
	favInstructor: 'Linda'
});

console.log(pete.listsSubjects());
console.log(pete.sprintChallenge('Preprocesors'));
console.log(adam.speak());
console.log(john.catchPhrase);
console.log(john.speak());
console.log(olivia.demo('Javascript'));
console.log(lily.speak());
console.log(lily.standUp('#CS20'));
console.log(pat.debugsCode(pete, 'Javascript'));
console.log(olivia.gradeRandom(pete));
