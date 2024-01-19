export const typeDefs = `#graphql


    type Person{
        id :ID!
        nombreCompleto :String!
        number :String!
        country :String!
        timezone :String!
    } 
    type Query {
        person( id: ID!): Person!
    },

    type Mutation { 
        addContact(nombreCompleto: String!,number: String!):Person!,
        updateContact(id: ID!,nombreCompleto: String!,number: String!):Person!
        deleteContact(id: ID!): Person!
    }

`;