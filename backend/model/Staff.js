import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

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
// Staff.sync({force:true})

export default Staff;
