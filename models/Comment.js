var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  
  comment: {
    type: String,
    required: true
  },

  replys: [{
    type: Schema.Types.ObjectId,
    ref: "Comment",
  }]
});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model("Comment", CommentSchema);

// Export the Note model
module.exports = Comment;
