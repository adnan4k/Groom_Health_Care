import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Staff = sequelize.define('Staff', {
    title: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    experience: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    }
});

export default Staff;
