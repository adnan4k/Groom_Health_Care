import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../db'; // Assuming this exports a Sequelize instance

const Appointment = sequelize.define('Appointment', {
    name: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.STRING, // Consider using DataTypes.DATEONLY for actual date fields
    },
    time: {
        type: DataTypes.STRING, // Consider changing to DataTypes.TIME if you need to store only time
    },
    city: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },
    reason: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.STRING, 
    },
    userId: {
        type: DataTypes.INTEGER, 
        references: {
            model: 'Users',
            key: 'id', 
        }
    }
});

export default Appointment;
