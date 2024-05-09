// idea: 


const ConnectionSingleton = (function () {
    let connection;
    
    function createConnection(){
        const object = new Object("Connection created");
        return object; // You need to return the object here
    }

    return {
        getConnection: function () {
           if(!connection) {
            connection = createConnection();
           }
           return connection;
        }
    };
})();

module.exports = { ConnectionSingleton };