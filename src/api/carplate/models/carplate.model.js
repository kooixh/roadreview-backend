/**
 *
 * This file defines the database model for a carplate
 *
 */
'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../../../common/clients/database');

const Model = Sequelize.Model;
class Carplate extends Model {}
Carplate.init(
    {
        // attributes
        plate_number: {
            type: Sequelize.STRING,
            allowNull: false
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false
        },
        upvotes: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        downvotes: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'carplate'
    }
);

class Review extends Model {}
Review.init(
    {
        // attributes
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        reviewer_ip: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'review'
    }
);
Carplate.hasMany(Review);
Review.belongsTo(Carplate);
Carplate.sync();
Review.sync();

module.exports = {
    Review: Review,
    Carplate: Carplate
};
