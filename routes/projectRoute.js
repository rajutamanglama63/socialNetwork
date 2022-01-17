const express = require('express');
const Project = require('../models/Projects');
const auth = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

router.post('/add', auth, async (req, res) => {
    try {
        const {projectTitle, year} = req.body;

        const user = await User.findById(req.user._id);
        if(!user) {
            res.status(400).json("User does not exist.");
        }

        const project = new Project({
            projectTitle,
            year,
            username : user.username,
            user : req.user._id
        });

        await project.save();

        res.status(200).json(project);
    } catch (error) {
        console.log(error);
        res.status(500).json("Server error...");
    }
});

router.get('/render_project', auth, async (req, res) => {
    try {
        const projects = await Project.find();

        const filteredProjects = projects.filter((project) => project.username === req.user.username);

        res.status(200).json(filteredProjects);
    } catch (error) {
        console.log(error);
        res.status(500).json("Server error...");
    }
});

router.delete('/del_project/:id', auth, async (req, res) => {
    try {
        const id = req.params.id;

        const projectToBeDeleted = await Project.findByIdAndDelete(id);

        res.status(400).json(projectToBeDeleted);
    } catch (error) {
        console.log(error);
        res.status(500).json("Server error...");
    }
})

module.exports = router;