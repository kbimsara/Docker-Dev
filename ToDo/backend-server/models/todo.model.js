const mongoose = require('mongoose');

const TasksSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please Enter Email Field!!"],
        },
        task: {
            type: String,
            required: [true, "Please Enter Task Field!!"],
        },
        stat: {
            type: Boolean, 
            default: false 
        }
    },
    {
        timestamp: true,
    }
);

const Task = mongoose.model("tasks", TasksSchema);
module.exports = Task;