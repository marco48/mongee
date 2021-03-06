var mongoose		= require("mongoose");

var Schema			= mongoose.Schema;
var ObjectId		= Schema.ObjectId;

var Comment 		= mongoose.model("Comment");

var Post = new Schema({
	user			: ObjectId,
	firstName		: String,
	lastName		: String,
	on_wall			: [ObjectId],
	content			: String,
	link		 	: String,
	comment			: [Comment],
	created_at		: {type : Date, default : Date.now}
});

exports.Post = Post;