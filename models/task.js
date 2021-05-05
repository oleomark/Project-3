const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema ({
    userId: {type: String},
    title: {type: String, required: true},
    description: {type: String, required: true},
    startDate: {type: Date}, 
        // default: function() {
        //     let currentDate = new Date();
        //     currentDate.setFullYear(currentDate.getFullYear() +1);    },
    endDate: {type: Date}
    },
);

module.exports = mongoose.model("Task", taskSchema);
