const connection = require("./connection.js");

// function objToSql(object) {
//     const array = [];

//     for (var key in object) {
//         // push the key and the value into the array 

//         array.push(key + "=" + object[key])
//     }

//     return array.toString();
// }

// will communicate with
const orm = {

    selectAll: function (tableInput, cb){
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result){
            if (err){
                throw err;
            }
            cb(result);
        })
    },

    insertOne: function (table,columns, values,cb) {
        let queryString = "INSERT INTO " + table;

        queryString += "(";
        queryString += columns.toString();
        queryString += ")";
        queryString += " VALUES (";
        queryString += "?";
        queryString += ")";

        connection.query(queryString,values, function (err, result){
            if (err) throw err;

            cb(result);
         });

    },

    updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE" + table;

        queryString += " SET ";
        queryString += objColVals;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result){
            if (err) throw err;

            cb(result);

        });

    },

};

module.exports = orm;