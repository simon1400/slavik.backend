const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Question = new Schema({
  nameTest: String,
  dateUpdate: Number,
  questions: [
    {
      nameQuestion: String,
      descriptionQuestion: String,
      asks: [
        {
          nameAsk: String,
          valueAsk: String
        }
      ]
    }
  ]
});

module.exports = mongoose.model("Question", Question);
