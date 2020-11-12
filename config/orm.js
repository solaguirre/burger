const connection = require("./connection.js");

function objToSql(object) {
    const array = [];

    for (var key in object) {
        // push the key and the value into the array 

        array.push(key + "=" + object[key])
    }

    return array.toString();
}

// will communicate with
const orm = {

    selectAll() {

    },

    insertOne() {

    },

    updateOne() {

    }

}

module.exports = orm;