var path = require('path');

//Stores friends database into friends variable
var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", (req,res) => {
        return res.json(friends);
    })

    app.post("/api/friends", (req,res) => {

        var matchLogic = {};

        var matchScoreToBeat = 100;

        for (var i = 0; i < friends.length; i++) {
            
            var mathArray = [];
            var totalDifference = 0;

            for (var x = 0; x < friends[i].scores.length; x++) {

                mathArray.push(Math.abs(req.body.scores[x] - friends[i].scores[x]));
            };

            for (var y = 0; y < mathArray.length; y++) {
                totalDifference += mathArray[y];
            }

            if (matchLogic == {}) {
                matchLogic = friends[i];
                matchScoreToBeat = totalDifference;
            } else if (totalDifference < matchScoreToBeat) {
                match = friends[i];
                matchScoreToBeat = totalDifference;
            }
        }

        console.log('Your match is: ' + match.name);

        // Push new person into friends array
        friends.push(req.body);
        res.json(match);
    });
}