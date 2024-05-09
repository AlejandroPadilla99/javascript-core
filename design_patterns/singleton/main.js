const { ConnectionSingleton } = require("./singleton");

//Get connection to the db
const connection1 = ConnectionSingleton.getConnection();
const connection2 = ConnectionSingleton.getConnection();

console.log(connection1 === connection2)