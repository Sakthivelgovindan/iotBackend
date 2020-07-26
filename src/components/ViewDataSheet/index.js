/**
 * @module path
 * A utility library that facilitates working with file and directory paths
 */
import * as path from "path";
/**
 * @module merge-graphql-schemas
 * A utility library to facilitate merging of modularized GraphQL schemas and resolver objects.
 * @function fileLoader - import all mentioned files from the specified folder
 */
import { fileLoader } from "merge-graphql-schemas";
/**
 * @constant functions - Contains all the files from model folder
 * @function fileLoader :
 *    @argument recursive - Loop through the directories
 *    @argument extensions - File extensions to loop through
 */
const functions = fileLoader(path.join(__dirname, "./model/*.js"), {
  recursive: true,
  extensions: [".js"],
});
/**
 * @constant model - Object containing functionName: function values
 */
const model = Object.assign({}, ...functions);
/**
 * @exports model
 * @typedef object
 * Consists of a single entity of all model functions as an object
 * Imported in resolvers.js
 */
export default model;
