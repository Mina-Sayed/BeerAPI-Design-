const Dispenser = require('../models/dispenser');

exports.createDispenser = async (req, res) => {
    try {
        const dispenser = await Dispenser.create(req.body);
        res.status(201).json(dispenser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



exports.getDispenserById = async (req, res) => {
    try {
        const dispenser = await Dispenser.findOne({ id: req.params.id });
        if (dispenser) {
            res.status(200).json(dispenser);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.status(500).send();
    }
};




exports.getDispenser = async (req, res) => {
    try {
        const dispensers = await Dispenser.find({});
        res.status(200).json(dispensers);
    } catch (error) {
        res.status(500).send();
    }
};


exports.updateDispenser = async (req, res) => {

    try {

        const dispenser = await Dispenser.findOneAndUpdate({ id: req.params.id }, req.body, { new: true, runValidators: true });
        
        if (dispenser) {
            res.status(200).json(dispenser);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
};


exports.openDispenser = async (req, res) => {
    try {
        const dispenser = await Dispenser.findOne({ id: req.params.id });
        if (dispenser) {
            const usage = {
                opened_at: new Date(),
                closed_at: null,
                flow_volume: 0,
                total_spent: 0
            };
            dispenser.usages.push(usage);
            await dispenser.save();
            res.status(200).json(dispenser);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.status(500).send();
    }
};


exports.closeDispenser = async (req, res) => {
    try {
        const dispenser = await Dispenser.findOne({ id: req.params.id });
        if (dispenser) {
            const usage = dispenser.usages[dispenser.usages.length - 1];
            usage.closed_at = new Date();
            usage.flow_volume = (usage.closed_at - usage.opened_at) / 1000 * dispenser.amount;
            usage.total_spent = usage.flow_volume * dispenser.amount;
            await dispenser.save();
            res.status(200).json(dispenser);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.status(500).send();
    }
};



