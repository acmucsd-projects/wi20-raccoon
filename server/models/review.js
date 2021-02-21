const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  overall_rating: {
    type: Number,
    required: true,
  },
  safety_rating: {
    type: Number,
    required: true,
  },
  comment: String,
  anonymous: Boolean,
});

module.exports = mongoose.model("Review", ReviewSchema);
