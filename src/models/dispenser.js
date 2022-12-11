const mongoose = require('mongoose');

const dispenserSchema = new mongoose.Schema({
    id: { uuid: true, default: mongoose.Types.ObjectId() },
    amount: { type: Number },
    usages: [{
        opened_at: { type: Date, default: Date.now() },
        closed_at: { type: Date, default: Date.now() },
        flow_volume: { type: Number },
        total_spent: { type: Number },
    }]
   
});

const Dispenser = mongoose.model('Dispenser', dispenserSchema);


module.exports = Dispenser;
