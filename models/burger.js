// Inside burger.js, import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.


const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function (res){
            cb(res);
        });
    },

    insertOne: function (values, cb) {
        orm.insertOne("burgers", ["burger_name"], values, function (res){
            cb(res);
        });
    },

    updateOne: function (condition, cb) {
        orm.updateOne("burgers", "devoured=true", condition, function(res){
            cb(res);
        });
    },
};

// Export at the end of the burger.js file.

module.exports = burger;