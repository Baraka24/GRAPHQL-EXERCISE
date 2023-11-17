const {gql} = require("apollo-server");

const typeDefs = gql`
    type Student {
        id: ID!
        firstName: String!
        lastName: String!
    }
    type Query {
    Students: [Student!]!
    }
`;
module.exports = {typeDefs};