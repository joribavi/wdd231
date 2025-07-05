// Footer Current Year and Last Modified
const currentyear = document.querySelector("#currentyear");

// use the date object
const today = new Date();
currentyear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span> `;


let lastmodified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastmodified.toLocaleString();

//Courses 

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


function CoursesButtons(course) {

    const courseContainer = document.querySelector('.course-container');

    let classBtn = course.completed ? 'completed' : 'not-completed'; //ternary operator like an if statement but in one line


    const btnHTML =
        `
        <div class="course-container">
           <button class="${classBtn}">${course.subject} ${course.number} </button>

        </div>

        `



    courseContainer.innerHTML += btnHTML;



};



courses.forEach(CoursesButtons)



// code to show all courses 

const allCourses = document.getElementById('all');
allCourses.addEventListener('click', () => {

    document.querySelector('.course-container').innerHTML = "";

    courses.forEach(CoursesButtons);

    // reduce to get total of courses
    document.getElementById('credits').innerHTML = courses.reduce(getCredits, 0);

    function getCredits(mySum, course) {

        return mySum + course.credits;

    }



});


// code to show CSE courses

const cseCourses = document.getElementById('cse');
cseCourses.addEventListener('click', () => {

    document.querySelector('.course-container').innerHTML = "";

    const filteredCourses = courses.filter(course => {

        const subjectCourses = course.subject === "CSE";

        return subjectCourses &&
            course.completed;


    });


    // reduce to get total of courses
    document.getElementById('credits').innerHTML = courses.reduce(getCredits, 0);

    function getCredits(mySum, course) {
        if (course.subject === "CSE" && course.completed) {
            return mySum + course.credits;
        }
        return mySum
    }

    filteredCourses.forEach(CoursesButtons);
});

// code to show WDD Courses 

const wddCourses = document.getElementById('wdd');
wddCourses.addEventListener('click', () => {

    document.querySelector('.course-container').innerHTML = "";

    const filteredCourses = courses.filter(course => {

        const subjectCourses = course.subject === "WDD";

        return subjectCourses &&
            course.completed;


    });

    // reduce to get total of courses
    document.getElementById('credits').innerHTML = courses.reduce(getCredits, 0);

    function getCredits(mySum, course) {
        if (course.subject === "WDD" && course.completed) {
            return mySum + course.credits;
        }
        return mySum
    }

    filteredCourses.forEach(CoursesButtons);
});








