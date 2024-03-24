import { DataTypes } from 'sequelize';
import sequelize from '../db';

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
});

export default User;
