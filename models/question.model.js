const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Question = new Schema({
  nameTest: String,
  questions: [
    {
      nameQuestion: String,
      descriptionQuestion: String,
      typeInput: String,
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
