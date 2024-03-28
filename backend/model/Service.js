import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Service = sequelize.define('Service', {
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    }
});
Service.sync({force:false})

export default Service;
