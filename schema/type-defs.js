const {gql} = require("apollo-server");

const typeDefs = gql`
    type Student {
        id: ID!
        firstName: String!
        lastName: String!
        level: Level
        preferedCourse: [Course!]!
    }
    type Query {
    Students: [Student!]!
    Courses: [Course!]!
    StudentById(id:ID!) : Student!
    CourseByName(name:String) : Course
    }
    enum Level {
        L1
        L2
        L3
    }
    type Course {
        id: ID!
        name: String!
    }

    input  CreateStudentInput {
        firstName: String!
        lastName: String!
        level: Level = L3
    }
    type Mutation {
        createStudent(input: CreateStudentInput): Student
    }

`;
module.exports = {typeDefs};