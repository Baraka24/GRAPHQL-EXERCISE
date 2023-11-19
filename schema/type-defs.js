const {gql} = require("apollo-server");

const typeDefs = gql`
    type Student {
        id: ID!
        firstName: String!
        lastName: String!
        level: Level
    }
    type Query {
    Students: [Student!]!
    }
    enum Level {
        L1
        L2
        L3
    }
`;
module.exports = {typeDefs};