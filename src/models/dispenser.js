const mongoose = require('mongoose');

const dispenserSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
  },
  usages: [
    {
      opened_at: { type: Date, default: Date.now() },
      closed_at: { type: Date, default: Date.now() },
      flow_volume: { type: Number },
      total_spent: { type: Number },
    },
  ],
});

dispenserSchema.virtual('id').get(function () {
  return this.uuid + '-' + this.amount;
});

const Dispenser = mongoose.model('Dispenser', dispenserSchema);

module.exports = Dispenser;
