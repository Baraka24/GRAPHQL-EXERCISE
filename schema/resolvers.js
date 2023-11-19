const { StudentList, CourseList } = require("../my-data");

const resolvers = {
  Query: {
    Students() {
      console.log("Resolver for Students query called");

      // Make sure to return the StudentList array
      return StudentList;
    },
    Courses: () => {
      return CourseList;
    }
  }
};

module.exports = { resolvers };
