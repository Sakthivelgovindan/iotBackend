/**
 * @module path
 * A utility library that facilitates working with file and directory paths
 */
import * as path from "path";
/**
 * @module graphql-tools
 * A utility library to automatically stitch multiple schemas together into one larger API
 * @function makeExecutableSchema - To combine schema & resolvers together
 */
import { makeExecutableSchema } from "graphql-tools";
/**
 * @module merge-graphql-schemas
 * A utility library to facilitate merging of modularized GraphQL schemas and resolver objects.
 * @function fileLoader - import all mentioned files from the specified folder
 * @function mergeResolvers - merge all resolver files from the specified folder
 * @function mergeTypes - merge all schema files from the specified folder
 */
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
/**
 * @constant resolversArray - Contains all the resolver files
 * @function fileLoader :
 *    @argument recursive - Loop through the directories
 *    @argument extensions - File extensions to loop through
 */
const resolversArray = fileLoader(
  path.join(__dirname, "../modules/**/resolver.js"),
  {
    recursive: true,
    extensions: [".js"],
  }
);
/**
 * @constant typesArray - Contains all the schema files
 * @function fileLoader :
 *    @argument recursive - Loop through the directories
 *    @argument extensions - File extensions to loop through
 */
const typesArray = fileLoader(path.join(__dirname, "../modules/**/schema.js"), {
  recursive: true,
  extensions: [".js"],
});
/**
 * @constant resolvers - Contains all the resolver files merged as a single entity
 */
const resolvers = mergeResolvers(resolversArray);
/**
 * @constant typeDefs - Contains all the schema files merged as a single entity
 */
const typeDefs = mergeTypes(typesArray, { all: true });
/**
 * @constant typeDefs
 * Contains @constant resolvers, @constant typeDefs merged as a single entity
 */
const schema = makeExecutableSchema({ typeDefs, resolvers });
/**
 * @exports schema
 * Consists of a single entity of all the schemas & resolvers
 * Imported in server.js
 */
export default schema;
