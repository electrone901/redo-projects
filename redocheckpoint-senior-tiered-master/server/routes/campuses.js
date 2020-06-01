'use strict';

const express = require('express');
const db = require('../models');
const Campus = db.models.campus;
const Student = db.models.student;

// This router is already mounted on `/api/campuses` in server/app.js
const router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        const campuses = await Campus.findAll();
        res.json(campuses)
    } catch (error) {
        next(error)
    }

})

router.get('/:id', async(req, res, next) => {

    try {
        const campusStudents = await Campus.findByPk(req.params.id, {
            include: [{ model: Student }]
        })
        if (campusStudents) {
            res.json(campusStudents)
        } else {
            res.status(404)
        }
    } catch (error) {
        next(error)
    }
})

router.get('/:id/students', async(req, res, next) => {
    try {

        const campusStudent = await Campus.findByPk(req.params.id, {
            include: [{ model: Student }]
        })
        if (campusStudent) {
            res.json(campusStudent.dataValues.students)
        } else {
            res.status(404)
        }
    } catch (error) {
        next(error)
    }
})


router.post('/', async(req, res, next) => {
    try {
        const campus = await Campus.create(req.body);
        res.status(201)
        res.json(campus)
    } catch (error) {
        next(error)
    }
})

router.post('/:id/students', async(req, res, next) => {
    try {
        const campus = await Campus.findByPk(req.params.id);
        if (campus) {
            const student = await campus.createStudent(req.body)
                // to check what method has  console.log(Object.keys(Campus.prototype))
            res.status(201).json(student)
        } else {
            res.status(404)
        }
    } catch (error) {
        next(error)
    }
})


module.exports = router;