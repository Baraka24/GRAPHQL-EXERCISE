const StudentList = [
    {
        id: 5,
        firstName: "Alfred",
        lastName: "Kambale",
        preferedCourse:[
            {
                id: 452,
                name: "Programming"
            },
            {
                id: 112,
                name: "Maths"
            }
        ]
    },
    {
        id: 1,
        firstName: "Bienvenu",
        lastName: "Moringa",
        level: "L3",
        preferedCourse:[
            {
                id: 452,
                name: "Programming"
            },
            {
                id: 112,
                name: "Maths"
            }
        ]
    },
    {
        id: 2,
        firstName: "Chris",
        lastName: "Kbg",
        level: "L1",
        preferedCourse:[
            {
                id: 452,
                name: "Programming"
            },
            {
                id: 112,
                name: "Maths"
            }
        ]
    },
    {
        id: 3,
        firstName: "Elie",
        lastName: "Kasai",
        level: "L2",
        preferedCourse:[
            {
                id: 365,
                name: "English"
            },
            {
                id: 452,
                name: "Programming"
            },
        ]
    },
    {
        id: 4,
        firstName: "Marie",
        lastName: "Baraka",
        level: "L3",
        preferedCourse:[
            {
                id: 365,
                name: "English"
            },
            {
                id: 452,
                name: "Programming"
            }
        ]
    }

];
const CourseList = [
    {
        id: 365,
        name: "English"
    },
    {
        id: 452,
        name: "Programming"
    },
    {
        id: 112,
        name: "Maths"
    }
];
module.exports = {StudentList, CourseList};