const express = require('express');

const router = express.Router();

const burger = require("../models/burger.js");

// routes

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        res.render("index",hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([req.body.name], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    const condition = "id=" + req.params.id;

    console.log("condition", condition);

    burger.updateOne(condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router; 