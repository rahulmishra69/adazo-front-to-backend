const mongoose = require("mongoose");

const campaigns = new mongoose.Schema({
  companyname: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  cap: {
    type: Number,
    required: true,
  },
  concurrence: {
    type: Number,
    required: true,
  },
  costperlead: {
    type: Number,
    required: true,
  },
  leadtype: {
    type:String,
    required:true
  },
  forwardnumber: {
    type: Number,
    required: true,
  },
  status: {
    type:String,
    required:true
  },
});
module.exports = mongoose.model("campaigns", campaigns);
