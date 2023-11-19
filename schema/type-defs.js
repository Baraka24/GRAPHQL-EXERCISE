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
    enum Classes {
        L1
        L2
        L3
    }
`;
module.exports = {typeDefs};