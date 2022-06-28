//  Add your code here
const { Schema, model, default: mongoose } = require("mongoose");

const celebritySchema = new Schema({

    name: { type: String },
    ocupation: { type: String },
    catchPhrase: { type: String }
})

const Celebrity = model(' Celebrity', celebritySchema);

module.exports = Celebrity;