const {StudentList} = require("../my-data");
const resolvers = {
    Query: {
        Students() {
            return StudentList;
        }
    }
};
module.exports = {resolvers};