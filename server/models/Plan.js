const mongoose = require("mongoose");

// const PlansSchema= new mongoose.Schema({
//     plans: mongoose.Schema.Types.Array,
//     // ref: 'Plan'
// })

const PlanSchema = new mongoose.Schema({
  id: { type: String },
  block: { type: String },
  floor: { type: String },
  room: { type: String },
  living__space: { type: Number },
  total__area: { type: Number },
  url__gen: { type: String },
  url__3d: { type: String },
  url__schema: { type: String },
  populare: { type: Boolean },
});

module.exports = mongoose.model("Plan", PlanSchema);
