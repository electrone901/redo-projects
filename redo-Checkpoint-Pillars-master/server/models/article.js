'use strict';

const db = require('./database');
const Sequelize = require('sequelize');

// Make sure you have `postgres` running!

const User = require('./user');

//---------VVVV---------  your code below  ---------VVV----------

const Article = db.define('article', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    version: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
        get() {
            const rawValue = this.getDataValue("tags");
            return rawValue.join(", ")
        }
    }
});




Article.prototype.truncate = function(randLength) {
    this.content = this.content.slice(0, randLength);
}


Article.findByTitle = function(targetTitle) {
    const article = Article.findOne({
        where: {
            title: targetTitle
        }
    })
    return article
}

Article.belongsTo(User, { as: "author" });


Article.beforeUpdate((article) => {
        article.version++;
    })
    //---------^^^---------  your code above  ---------^^^----------

module.exports = Article;