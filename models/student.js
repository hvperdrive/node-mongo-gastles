const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const studentSchema = new Schema({ 
    name: {
        required: true,
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
