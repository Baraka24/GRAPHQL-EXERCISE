const { StudentList, CourseList } = require("../my-data");
const _ = require("lodash");
const resolvers = {
  Query: {
    Students() {
      console.log("Resolver for Students query called");

      // Make sure to return the StudentList array
      return StudentList;
    },
    Courses: () => {
      return CourseList;
    },
    StudentById: (parent, args) => {
      const id = args.id;
      const StudentById = _.find(StudentList, {id: Number(id)});
      return StudentById;
    },
    CourseByName: (parent, args) => {
      const name = args.name;
      const CourseByName = _.find(CourseList, {name:name});
      return CourseByName;
    }
  }
};

module.exports = { resolvers };
