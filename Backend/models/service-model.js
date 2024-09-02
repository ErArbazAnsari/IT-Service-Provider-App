const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
    service: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: false },
    provider: { type: String, required: false },
});

// create model from schema
const Service = model("Service", serviceSchema);
module.exports = Service;
