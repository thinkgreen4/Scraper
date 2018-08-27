var db = require("../models");

module.exports = function (app) {

    app.get("/api/article/comments:id", function (req, res) {

        // Finds all the comments in connection to that article
        db.Article.findById(req.params.id)
            .populate("Comment")
            .then(function (comments) {
                res.send(comments);
            });
    });


    app.put("/api/edit/:id", function (req, res) {


        db.Comment.findOneAndUpdate({ _id: req.params.id }, { $set: { comment: req.body.comment } });
    })


    app.delete("/api/delete/:id", function (req, res) {


        db.Comment.findByIdAndRemove({ _id: req.params.id });
    });

    app.post("/api/reply/:id", function (req, res) {

        db.Comment.create(req.body)
            .then(function (dbcomment) {

                db.Comment.findOneAndUpdate({ _id: req.params.id }, { replys: dbcomment._id }, { new: true });
            });
    });
};


