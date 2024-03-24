import { DataTypes } from 'sequelize';
import sequelize from '../db';

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

export default Service;
