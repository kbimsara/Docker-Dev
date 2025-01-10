const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const retries = 5;
let attempts = 0;
const User = require('./models/user.model.js');
const Task = require('./models/todo.model.js');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: 'http://localhost:80', // Ensure this matches your frontend's origin
}));

// Test server working
app.get('/', (req, res) => {
    res.send('Server Test Request: Showed');
});

// User Registration
app.post('/api/user', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// User Login
app.post('/api/user/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, pw: req.body.pw });
        if (!user) {
            res.status(404).json({ message: "No user found" });
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Task Management

// Add a Task
app.post('/api/task', async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Tasks for a User
app.get('/api/task/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const tasks = await Task.find({ email }).sort({ stat: 1 });

        if (tasks.length === 0) {
            res.status(404).json({ message: "No tasks found" });
        } else {
            res.status(200).json(tasks);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a Task
app.put('/api/task/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true });

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a Task
app.delete('/api/task/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        if (attempts < retries) {
            console.log(`Attempt ${attempts + 1} failed: ${err.message}. Retrying...`);
            attempts++;
            setTimeout(connectToDatabase, 5000);  // Retry after 5 seconds
        } else {
            console.log('Database connection failed after multiple attempts');
        }
    });
