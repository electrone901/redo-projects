'use strict';

const Sequelize = require('sequelize');
const db = require('./_db');

const Student = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phase: {
        type: Sequelize.STRING,
        validate: {
            isIn: [
                ["junior", "senior"]
            ]
        }
    }
});

Student.findByPhase = async function(type) {
    const students = await Student.findAll({
        where: {
            phase: type
        }
    })
    return students;
}

module.exports = Student;